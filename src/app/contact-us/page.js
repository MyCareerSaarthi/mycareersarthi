"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { api } from "@/components/api/api";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await api.post("/api/contact", formData);
      
      if (response.data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(response.data.error || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error.response?.data?.error ||
        error.message ||
        "Failed to submit form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Heading and Contact Info */}
          <motion.section
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                We're here to help! Whether you have a question about our
                services, need assistance with your account, or want to provide
                feedback, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:support@mycareersarthi.com"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    support@mycareersarthi.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+919810291730"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    +91 98102 91730
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Business Hours
                  </p>
                  <p className="text-base font-medium">
                    Monday to Friday, 9 AM - 6 PM IST
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h2>
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">
                          Thank you for contacting us! We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-red-800 dark:text-red-200">
                          {errorMessage || "Failed to submit form. Please try again."}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name..."
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name..."
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address..."
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help you?</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message..."
                      className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
