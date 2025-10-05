"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left content */}
        <section className="space-y-8">
          <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
  Get in{" "}
  <span className="font-thin inline-block align-middle text-5xl">—</span>{" "}
  <br></br>
  touch with us
</h1>

            <p className="text-muted-foreground max-w-xl">
              We’re here to help! Whether you have a question about our services,
              need assistance with your account, or want to provide feedback, our
              team is ready to assist you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Email:</p>
              <a
                href="mailto:hello@finpro.com"
                className="text-base font-medium hover:underline"
              >
                hello@finpro.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Phone:</p>
              <a href="tel:+123456778" className="text-base font-medium hover:underline">
                +1 234 567 78
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Available Monday to Friday, 9 AM - 6 PM GMT
            </p>
          </div>

          <div>
            <Button
              variant="default"
              size="lg"
              className="rounded-full px-6"
            >
              Live Chat
              <ArrowRight className="ml-1" />
            </Button>
          </div>
        </section>

        {/* Right form */}
        <Card className="border-0 shadow-none bg-accent/30 dark:bg-input/20">
          <CardContent className="py-6">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="Enter your first name..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Enter your last name..." />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email address..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How can we help you?</Label>
                {/* Using native textarea styled to match Input for consistency */}
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message..."
                  className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input min-h-32 h-36 w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  rows={6}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="rounded-full px-6">
                  Send Message
                  <ArrowRight className="ml-1" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


