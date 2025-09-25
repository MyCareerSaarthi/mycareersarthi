"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
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

export default function SignInPage() {
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

      {/* Right side - Login Form */}
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

          <SignIn.Root>
            <SignIn.Step name="start">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0 pb-6">
                  <CardTitle className="text-2xl font-bold">
                    Sign in to your account
                  </CardTitle>
                  <CardDescription>
                    Welcome back! Please enter your details
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <Clerk.Connection name="google" asChild>
                    <Button
                      variant="outline"
                      className="w-full py-6 text-base font-medium"
                    >
                      <FaGoogle className="mr-2" size={28} />
                      Sign in with Google
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

                  <Clerk.Field name="identifier" className="space-y-2">
                    <Label htmlFor="identifier" className="text-base">
                      Email
                    </Label>
                    <Clerk.Input asChild>
                      <Input
                        id="identifier"
                        placeholder="name@company.com"
                        className="py-6 text-base"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <SignIn.Action submit asChild>
                    <Button className="w-full py-6 text-base font-medium">
                      Continue
                    </Button>
                  </SignIn.Action>

                  <div className="text-center text-sm">
                    <span className="text-muted-foreground">
                      Don't have an account?{" "}
                    </span>
                    <a href="/signup" className="text-primary hover:underline">
                      Sign up
                    </a>
                  </div>
                </CardContent>
              </Card>
            </SignIn.Step>

            <SignIn.Step name="verifications">
              <SignIn.Strategy name="email_code">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="px-0 pt-0 pb-6">
                    <CardTitle className="text-2xl font-bold">
                      Check your email
                    </CardTitle>
                    <CardDescription>
                      We sent a code to <SignIn.SafeIdentifier />.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <Clerk.Field name="code" className="space-y-2">
                      <Label htmlFor="code" className="text-base">
                        Email code
                      </Label>
                      <Clerk.Input asChild>
                        <Input
                          id="code"
                          placeholder="Enter your code"
                          className="py-6 text-base"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <SignIn.Action submit asChild>
                      <Button className="w-full py-6 text-base font-medium">
                        Continue
                      </Button>
                    </SignIn.Action>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">
                        Didn't receive a code?{" "}
                      </span>
                      <SignIn.Action
                        navigate="previous"
                        className="text-primary hover:underline cursor-pointer"
                      >
                        Resend
                      </SignIn.Action>
                    </div>
                  </CardContent>
                </Card>
              </SignIn.Strategy>

              <SignIn.Strategy name="password">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="px-0 pt-0 pb-6">
                    <CardTitle className="text-2xl font-bold">
                      Enter your password
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <Clerk.Field name="password" className="space-y-2">
                      <Label htmlFor="password" className="text-base">
                        Password
                      </Label>
                      <Clerk.Input asChild>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="py-6 text-base"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <div className="flex flex-col gap-4">
                      <SignIn.Action submit asChild>
                        <Button className="w-full py-6 text-base font-medium">
                          Continue
                        </Button>
                      </SignIn.Action>
                      <SignIn.Action navigate="forgot-password" asChild>
                        <Button variant="link" className="w-full text-base p-0">
                          Forgot password?
                        </Button>
                      </SignIn.Action>
                    </div>
                  </CardContent>
                </Card>
              </SignIn.Strategy>

              <SignIn.Strategy name="reset_password_email_code">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="px-0 pt-0 pb-6">
                    <CardTitle className="text-2xl font-bold">
                      Check your email
                    </CardTitle>
                    <CardDescription>
                      We sent a code to <SignIn.SafeIdentifier />.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <Clerk.Field name="code" className="space-y-2">
                      <Label htmlFor="reset-code" className="text-base">
                        Email code
                      </Label>
                      <Clerk.Input asChild>
                        <Input
                          id="reset-code"
                          placeholder="Enter your code"
                          className="py-6 text-base"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <SignIn.Action submit asChild>
                      <Button className="w-full py-6 text-base font-medium">
                        Continue
                      </Button>
                    </SignIn.Action>
                  </CardContent>
                </Card>
              </SignIn.Strategy>
            </SignIn.Step>

            <SignIn.Step name="forgot-password">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0 pb-6">
                  <CardTitle className="text-2xl font-bold">
                    Forgot your password?
                  </CardTitle>
                  <CardDescription>
                    No worries, we'll send you reset instructions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <SignIn.SupportedStrategy
                    name="reset_password_email_code"
                    asChild
                  >
                    <Button className="w-full py-6 text-base font-medium">
                      Reset password
                    </Button>
                  </SignIn.SupportedStrategy>

                  <SignIn.Action navigate="previous" asChild>
                    <Button
                      variant="outline"
                      className="w-full py-6 text-base font-medium"
                    >
                      Go back
                    </Button>
                  </SignIn.Action>
                </CardContent>
              </Card>
            </SignIn.Step>

            <SignIn.Step name="reset-password">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0 pb-6">
                  <CardTitle className="text-2xl font-bold">
                    Reset your password
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <Clerk.Field name="password" className="space-y-2">
                    <Label htmlFor="new-password" className="text-base">
                      New password
                    </Label>
                    <Clerk.Input asChild>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Enter your new password"
                        className="py-6 text-base"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <Clerk.Field name="confirmPassword" className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-base">
                      Confirm password
                    </Label>
                    <Clerk.Input asChild>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your new password"
                        className="py-6 text-base"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <SignIn.Action submit asChild>
                    <Button className="w-full py-6 text-base font-medium">
                      Reset password
                    </Button>
                  </SignIn.Action>
                </CardContent>
              </Card>
            </SignIn.Step>
          </SignIn.Root>
        </div>
      </div>
    </div>
  );
}
