"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";

export default function ContactUsPage() {
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
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name..."
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
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" size="lg" className="px-8">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
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
