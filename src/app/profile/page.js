"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoadingButton } from "@/components/ui/loading-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSignIn } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const { signIn } = useSignIn();
  const [activeTab, setActiveTab] = useState("profile");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.emailAddresses[0]?.emailAddress || "");
      setUsername(user.username || "");
    }
  }, [user]);

  const handleSaveProfile = async () => {
    if (!user) return;

    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      // Update user profile with camelCase parameters
      const updateData = {};
      if (firstName) updateData.firstName = firstName;
      if (lastName) updateData.lastName = lastName;
      if (username) updateData.username = username;

      await user.update(updateData);
      setMessage("Profile updated successfully!");
    } catch (err) {
      setError("Failed to update profile: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file");
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    setIsUploadingImage(true);
    setMessage("");
    setError("");

    try {
      await user.setProfileImage({ file });
      setMessage("Profile picture updated successfully!");
    } catch (err) {
      setError("Failed to update profile picture: " + err.message);
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleChangePassword = async () => {
    if (!user) return;

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      // First, attempt to sign in with the current password to verify
      await signIn.create({
        identifier: email,
        password: currentPassword,
      });

      // If sign in is successful, proceed with password change
      await user.updatePassword({
        currentPassword,
        newPassword,
      });

      setMessage("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("Failed to change password: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-background">
        <div className="animate-pulse text-foreground">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-background">
        <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
        <p className="text-muted-foreground">
          Please sign in to view your profile
        </p>
        <div>
          <LoadingButton asChild>
            <a href="/login">Sign In</a>
          </LoadingButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Profile Info */}
            <div className="flex items-center gap-6">
              <div className="relative group">
                <Avatar className="w-24 h-24 lg:w-32 lg:h-32 cursor-pointer hover:opacity-80 transition-opacity ring-4 ring-primary/20">
                  <AvatarImage
                    src={user.imageUrl}
                    alt={user.fullName || "User avatar"}
                  />
                  <AvatarFallback className="text-2xl lg:text-3xl bg-primary/10 text-foreground">
                    {user.firstName?.charAt(0)?.toUpperCase() || ""}
                    {user.lastName?.charAt(0)?.toUpperCase() || ""}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    Change Photo
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl font-bold text-foreground mb-2">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-lg text-muted-foreground">
                  @{user.username || "No username set"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user.emailAddresses[0]?.emailAddress}
                </p>
              </div>
            </div>

            {/* Upload Button */}
            <div className="flex flex-col gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="profile-image-upload"
                disabled={isUploadingImage}
              />
              <label
                htmlFor="profile-image-upload"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50 inline-flex items-center justify-center"
              >
                {isUploadingImage ? "Uploading..." : "Upload Photo"}
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border border-border/50 shadow-lg">
          <CardContent className="p-6 lg:p-8">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 bg-muted rounded-2xl p-1 mb-8">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-xl transition-all duration-300"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-xl transition-all duration-300"
                >
                  Password
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-foreground"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      className="h-12 text-base border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-foreground"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                      className="h-12 text-base border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-4 md:col-span-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      value={email}
                      disabled
                      placeholder="Email address"
                      className="h-12 text-base border-border/50 bg-muted/50"
                    />
                    <p className="text-sm text-muted-foreground">
                      Email cannot be changed here. Contact support if you need
                      to update your email.
                    </p>
                  </div>

                  <div className="space-y-4 md:col-span-2">
                    <Label
                      htmlFor="username"
                      className="text-sm font-medium text-foreground"
                    >
                      Username
                    </Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Choose a unique username"
                      className="h-12 text-base border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <p className="text-sm text-muted-foreground">
                      This will be your public username. Choose something unique
                      and memorable.
                    </p>
                  </div>
                </div>

                {/* Save Button Section */}
                <div className="pt-6 border-t border-border/50">
                  {message && activeTab === "profile" && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                      {message}
                    </div>
                  )}
                  {error && activeTab === "profile" && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                      {error}
                    </div>
                  )}
                  <LoadingButton
                    onClick={handleSaveProfile}
                    className="w-full md:w-auto px-8 py-3 text-base font-medium bg-primary hover:bg-primary/90 transition-colors"
                    isLoading={isLoading}
                    loadingText="Saving Changes..."
                  >
                    Save Changes
                  </LoadingButton>
                </div>
              </TabsContent>

              <TabsContent value="password" className="space-y-6">
                <div className="max-w-md space-y-6">
                  <div className="space-y-4">
                    <Label
                      htmlFor="currentPassword"
                      className="text-sm font-medium text-foreground"
                    >
                      Current Password
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter your current password"
                      className="h-12 text-base border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label
                      htmlFor="newPassword"
                      className="text-sm font-medium text-foreground"
                    >
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter your new password"
                      className="h-12 text-base border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <p className="text-sm text-muted-foreground">
                      Password must be at least 8 characters long.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-foreground"
                    >
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your new password"
                      className="h-12 text-base border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    {message && activeTab === "password" && (
                      <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                        {message}
                      </div>
                    )}
                    {error && activeTab === "password" && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                        {error}
                      </div>
                    )}
                    <LoadingButton
                      onClick={handleChangePassword}
                      className="w-full px-8 py-3 text-base font-medium bg-primary hover:bg-primary/90 transition-colors"
                      isLoading={isLoading}
                      loadingText="Changing Password..."
                    >
                      Change Password
                    </LoadingButton>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
