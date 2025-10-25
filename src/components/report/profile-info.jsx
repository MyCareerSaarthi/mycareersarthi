import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfileInfo = ({ data }) => {
  if (!data || !data.profile) {
    return <div className="text-center py-8">No profile data available</div>;
  }

  const { profile } = data;

  // Determine missing sections
  const missingSections = [];
  if (!profile.headline) missingSections.push("Headline");
  if (!profile.about) missingSections.push("About section");
  if (!profile.skills || profile.skills.length === 0)
    missingSections.push("Skills");
  if (!profile.experiences || profile.experiences.length === 0)
    missingSections.push("Experience");
  if (!profile.educations || profile.educations.length === 0)
    missingSections.push("Education");
  if (!profile.certifications || profile.certifications.length === 0)
    missingSections.push("Certifications");

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Profile Information
        </h1>
        <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
          Basic profile details and information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Basic Info */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <p className="text-foreground font-semibold">
                {profile.full_name || "Not provided"}
              </p>
              {!profile.full_name && (
                <p className="text-sm text-destructive mt-1">
                  ❌ Missing: Name should be clearly visible
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Headline
              </label>
              <p className="text-foreground">
                {profile.headline || "Not provided"}
              </p>
              {!profile.headline && (
                <p className="text-sm text-destructive mt-1">
                  ❌ Missing: Headline is important for first impression
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Skills Count
              </label>
              <p className="text-foreground">
                {profile.skills?.length || 0} skills listed
              </p>
              {(!profile.skills || profile.skills.length === 0) && (
                <p className="text-sm text-destructive mt-1">
                  ❌ Missing: Skills section is crucial
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Experience Summary */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Experience Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Total Experience
              </label>
              <p className="text-foreground">
                {profile.experiences?.length || 0} positions listed
              </p>
              {(!profile.experiences || profile.experiences.length === 0) && (
                <p className="text-sm text-destructive mt-1">
                  ❌ Missing: Experience is required
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Education
              </label>
              <p className="text-foreground">
                {profile.educations?.length || 0} education entries
              </p>
              {(!profile.educations || profile.educations.length === 0) && (
                <p className="text-sm text-destructive mt-1">
                  ❌ Missing: Education should be listed
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Certifications
              </label>
              <p className="text-foreground">
                {profile.certifications?.length || 0} certifications
              </p>
              {(!profile.certifications ||
                profile.certifications.length === 0) && (
                <p className="text-sm text-amber-600 mt-1">
                  ⚠️ No certifications listed (optional but beneficial)
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Missing Sections Warning */}
      {missingSections.length > 0 && (
        <Card className="border-destructive/50 bg-destructive/10 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-lg text-destructive flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Missing Profile Sections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              The following sections are missing from your profile. Adding these
              will significantly improve your profile strength:
            </p>
            <ul className="space-y-2">
              {missingSections.map((section, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-destructive"
                >
                  <span className="text-lg">❌</span>
                  <span>{section}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* About Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">About</CardTitle>
        </CardHeader>
        <CardContent>
          {profile.about ? (
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">
              {profile.about}
            </p>
          ) : (
            <div className="text-center py-8">
              <p className="text-destructive font-medium mb-2">
                ❌ About section is missing
              </p>
              <p className="text-sm text-muted-foreground">
                The About section is crucial for showcasing your professional
                summary and value proposition.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          {profile.skills && profile.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-destructive font-medium mb-2">
                ❌ No skills listed
              </p>
              <p className="text-sm text-muted-foreground">
                Skills are essential for demonstrating your capabilities and
                increasing profile discoverability.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileInfo;
