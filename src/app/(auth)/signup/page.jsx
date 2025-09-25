"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex max-w-7xl mx-auto">
      {/* Left side - Visual Preview */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 p-12">
        <div className="space-y-8">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Connect with mentors and boost your career
            </h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of professionals who are already advancing their
              careers with our platform.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div className="bg-card rounded-xl p-4 shadow-lg border">
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-primary w-8 h-8 rounded-full"></div>
                <div>
                  <div className="h-2 bg-primary rounded w-16"></div>
                  <div className="h-2 bg-muted rounded w-12 mt-1"></div>
                </div>
              </div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-3/4"></div>
            </div>

            <div className="bg-card rounded-xl p-4 shadow-lg border mt-8">
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-secondary w-8 h-8 rounded-full"></div>
                <div>
                  <div className="h-2 bg-secondary rounded w-16"></div>
                  <div className="h-2 bg-muted rounded w-12 mt-1"></div>
                </div>
              </div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-3/4"></div>
            </div>

            <div className="bg-card rounded-xl p-4 shadow-lg border">
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-accent w-8 h-8 rounded-full"></div>
                <div>
                  <div className="h-2 bg-accent rounded w-16"></div>
                  <div className="h-2 bg-muted rounded w-12 mt-1"></div>
                </div>
              </div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8 lg:hidden">
            <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <span className="text-primary-foreground font-bold text-2xl">
                M
              </span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MyCareerSarthi
            </h1>
          </div>

          <SignUp.Root>
            <SignUp.Step name="start">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0 pb-6">
                  <CardTitle className="text-2xl font-bold">
                    Create an account
                  </CardTitle>
                  <CardDescription>
                    Welcome! Please enter your details to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <Clerk.Connection name="google" asChild>
                    <Button
                      variant="outline"
                      className="w-full py-6 text-base font-medium"
                    >
                      <FaGoogle className="mr-2" size={28} />
                      Sign up with Google
                    </Button>
                  </Clerk.Connection>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-3 py-1 text-muted-foreground">
                        Or continue with email
                      </span>
                    </div>
                  </div>

                  <Clerk.Field name="username" className="space-y-2">
                    <Label htmlFor="username" className="text-base">
                      Username
                    </Label>
                    <Clerk.Input asChild>
                      <Input
                        id="username"
                        placeholder="Enter your username"
                        className="py-6 text-base"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <Clerk.Field name="emailAddress" className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email
                    </Label>
                    <Clerk.Input asChild>
                      <Input
                        id="email"
                        placeholder="name@company.com"
                        className="py-6 text-base"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <Clerk.Field name="password" className="space-y-2">
                    <Label htmlFor="password" className="text-base">
                      Password
                    </Label>
                    <Clerk.Input asChild>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        className="py-6 text-base"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <SignUp.Action submit asChild>
                    <Button className="w-full py-6 text-base font-medium">
                      Sign up
                    </Button>
                  </SignUp.Action>

                  <div className="text-center text-sm">
                    <span className="text-muted-foreground">
                      Already have an account?{" "}
                    </span>
                    <a href="/login" className="text-primary hover:underline">
                      Sign in
                    </a>
                  </div>
                </CardContent>
              </Card>
            </SignUp.Step>

            <SignUp.Step name="continue">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0 pb-6">
                  <CardTitle className="text-2xl font-bold">
                    Fill in missing fields
                  </CardTitle>
                  <CardDescription>
                    Please provide the required information to complete your
                    registration
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <Clerk.Field name="username" className="space-y-2">
                    <Label htmlFor="username-continue" className="text-base">
                      Username
                    </Label>
                    <Clerk.Input asChild>
                      <Input
                        id="username-continue"
                        placeholder="Enter your username"
                        className="py-6 text-base"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <SignUp.Action submit asChild>
                    <Button className="w-full py-6 text-base font-medium">
                      Continue
                    </Button>
                  </SignUp.Action>
                </CardContent>
              </Card>
            </SignUp.Step>

            <SignUp.Step name="verifications">
              <SignUp.Strategy name="phone_code">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="px-0 pt-0 pb-6">
                    <CardTitle className="text-2xl font-bold">
                      Check your phone for an SMS
                    </CardTitle>
                    <CardDescription>
                      We sent a code to your phone number
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <Clerk.Field name="code" className="space-y-2">
                      <Label htmlFor="phone-code" className="text-base">
                        Phone Code
                      </Label>
                      <Clerk.Input asChild>
                        <Input
                          id="phone-code"
                          placeholder="Enter your code"
                          className="py-6 text-base"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <SignUp.Action submit asChild>
                      <Button className="w-full py-6 text-base font-medium">
                        Verify
                      </Button>
                    </SignUp.Action>
                  </CardContent>
                </Card>
              </SignUp.Strategy>

              <SignUp.Strategy name="email_code">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="px-0 pt-0 pb-6">
                    <CardTitle className="text-2xl font-bold">
                      Check your email
                    </CardTitle>
                    <CardDescription>
                      We sent a code to your email address
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <Clerk.Field name="code" className="space-y-2">
                      <Label htmlFor="email-code" className="text-base">
                        Email Code
                      </Label>
                      <Clerk.Input asChild>
                        <Input
                          id="email-code"
                          placeholder="Enter your code"
                          className="py-6 text-base"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <SignUp.Action submit asChild>
                      <Button className="w-full py-6 text-base font-medium">
                        Verify
                      </Button>
                    </SignUp.Action>
                  </CardContent>
                </Card>
              </SignUp.Strategy>
            </SignUp.Step>
          </SignUp.Root>
        </div>
      </div>
    </div>
  );
}
