import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfileInfo = ({ data }) => {
  if (!data || !data.profile) {
    return <div className="text-center py-8">No profile data available</div>;
  }

  const { profile } = data;

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
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Headline
              </label>
              <p className="text-foreground">
                {profile.headline || "Not provided"}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Skills Count
              </label>
              <p className="text-foreground">
                {profile.skills?.length || 0} skills listed
              </p>
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
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Education
              </label>
              <p className="text-foreground">
                {profile.educations?.length || 0} education entries
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Certifications
              </label>
              <p className="text-foreground">
                {profile.certifications?.length || 0} certifications
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* About Section */}
      {profile.about && (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">
              {profile.about}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Skills Section */}
      {profile.skills && profile.skills.length > 0 && (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Skills</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProfileInfo;
