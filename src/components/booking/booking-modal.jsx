"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingAPI } from "@/components/api/booking";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";

export function BookingModal({
  open,
  onOpenChange,
  defaultServiceType = null,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: defaultServiceType || "interview_preparation",
    message: "",
    preferredDate: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const bookingData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        serviceType: formData.serviceType,
        message: formData.message || undefined,
        preferredDate: formData.preferredDate || undefined,
      };

      const response = await BookingAPI.createBooking(bookingData);

      if (response.success) {
        alert(
          "Booking Request Submitted!\n\nWe've received your booking request. Our team will contact you soon."
        );
        onOpenChange(false);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: defaultServiceType || "interview_preparation",
          message: "",
          preferredDate: "",
        });
      }
    } catch (error) {
      alert(
        `Error: ${error.error || "Failed to submit booking. Please try again."}`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Book a Session
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you to schedule your
            session.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                required
                className="rounded-lg"
                placeholder="John"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                required
                className="rounded-lg"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="rounded-lg"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="rounded-lg"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Service Type *
            </Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => handleChange("serviceType", value)}
            >
              <SelectTrigger className="rounded-lg">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="interview_preparation">
                  Interview Preparation
                </SelectItem>
                <SelectItem value="career_guidance">Career Guidance</SelectItem>
                <SelectItem value="both">Both Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredDate" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Preferred Date & Time
            </Label>
            <Input
              id="preferredDate"
              type="datetime-local"
              value={formData.preferredDate}
              onChange={(e) => handleChange("preferredDate", e.target.value)}
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Additional Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="rounded-lg min-h-[100px]"
              placeholder="Tell us about your goals or any specific areas you'd like to focus on..."
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-xl"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl"
            >
              {loading ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
