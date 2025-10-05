import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
  // Mock data for LinkedIn and resume related dashboard
  const dashboardData = {
    latestLinkedInScore: 72,
    latestResumeScore: 85,
    recentReviews: [
      {
        id: 1,
        type: "LinkedIn",
        title: "Profile completeness review",
        score: 72,
        date: "2 hours ago",
        status: "completed",
      },
      {
        id: 2,
        type: "Resume",
        title: "Technical skills section review",
        score: 85,
        date: "1 day ago",
        status: "completed",
      },
      {
        id: 3,
        type: "LinkedIn",
        title: "Headline optimization",
        score: 68,
        date: "2 days ago",
        status: "completed",
      },
      {
        id: 4,
        type: "Resume",
        title: "Formatting and layout review",
        score: 78,
        date: "3 days ago",
        status: "completed",
      },
    ],
    recommendations: [
      {
        id: 1,
        type: "LinkedIn",
        title: "Add more industry keywords",
        description: "Your profile is missing 5 key industry terms",
        priority: "high",
      },
      {
        id: 2,
        type: "Resume",
        title: "Quantify achievements",
        description: "Add metrics to 3 experience entries",
        priority: "medium",
      },
      {
        id: 3,
        type: "LinkedIn",
        title: "Request recommendations",
        description: "Ask 2 colleagues for recommendations",
        priority: "low",
      },
    ],
    upcomingReviews: [
      {
        id: 1,
        type: "LinkedIn",
        title: "Profile photo review",
        due: "Tomorrow",
        status: "pending",
      },
      {
        id: 2,
        type: "Resume",
        title: "Skills section update",
        due: "In 3 days",
        status: "pending",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Removed motion.div wrapper */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            LinkedIn and resume analysis to boost your career prospects
          </p>
        </div>
        {/* Removed motion.div wrapper */}

        {/* Compact Latest Scores Section */}
        {/* Removed motion.div wrapper */}
        <div>
          <Card className="mb-8 border border-primary/10 bg-card rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="text-xl">Latest Profile Scores</CardTitle>
              <CardDescription>
                Your most recent LinkedIn and resume analyses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row justify-around items-center gap-6 py-4">
                {/* LinkedIn Score - Compact Circular Indicator */}
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500/30"></div>
                    <div
                      className="absolute inset-0 rounded-full border-4 border-blue-500"
                      style={{
                        clipPath: `inset(0 0 ${
                          100 - dashboardData.latestLinkedInScore
                        }% 0)`,
                      }}
                    ></div>
                    <div className="absolute w-16 h-16 rounded-full bg-card flex items-center justify-center">
                      <span className="text-xl font-bold text-foreground">
                        {dashboardData.latestLinkedInScore}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="flex items-center gap-1">
                      <span className="text-blue-400">💼</span>
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      2 hours ago
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2 text-xs rounded-full hover:bg-primary/10 hover:border-primary/30"
                  >
                    View Report
                  </Button>
                </div>

                {/* Resume Score - Compact Circular Indicator */}
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-500/30"></div>
                    <div
                      className="absolute inset-0 rounded-full border-4 border-purple-500"
                      style={{
                        clipPath: `inset(0 0 ${
                          100 - dashboardData.latestResumeScore
                        }% 0)`,
                      }}
                    ></div>
                    <div className="absolute w-16 h-16 rounded-full bg-card flex items-center justify-center">
                      <span className="text-xl font-bold text-foreground">
                        {dashboardData.latestResumeScore}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="flex items-center gap-1">
                      <span className="text-purple-400">📄</span>
                      <span className="font-medium">Resume</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      1 day ago
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2 text-xs rounded-full hover:bg-primary/10 hover:border-primary/30"
                  >
                    View Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Removed motion.div wrapper */}

        {/* Recent Reviews and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Reviews */}
          {/* Removed motion.div wrapper */}
          <div>
            <Card className="border border-primary/10 bg-card rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>
                  Your latest LinkedIn and resume analyses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentReviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            review.type === "LinkedIn"
                              ? "bg-blue-500/20"
                              : "bg-purple-500/20"
                          }`}
                        >
                          <span
                            className={
                              review.type === "LinkedIn"
                                ? "text-blue-400"
                                : "text-purple-400"
                            }
                          >
                            {review.type === "LinkedIn" ? "💼" : "📄"}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {review.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {review.date}
                            </span>
                            <span
                              className={`px-1.5 py-0.5 rounded text-xs ${
                                review.type === "LinkedIn"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-purple-500/20 text-purple-300"
                              }`}
                            >
                              {review.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          {review.score}/100
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full hover:bg-primary/10"
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Removed motion.div wrapper */}

          {/* Recommendations */}
          {/* Removed motion.div wrapper */}
          <div>
            <Card className="border border-primary/10 bg-card rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader>
                <CardTitle>Improvement Recommendations</CardTitle>
                <CardDescription>
                  Targeted suggestions for your LinkedIn and resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recommendations.map((recommendation) => (
                    <div
                      key={recommendation.id}
                      className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              recommendation.type === "LinkedIn"
                                ? "text-blue-400"
                                : "text-purple-400"
                            }
                          >
                            {recommendation.type === "LinkedIn" ? "💼" : "📄"}
                          </span>
                          <h3 className="font-semibold text-foreground">
                            {recommendation.title}
                          </h3>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            recommendation.priority === "high"
                              ? "bg-red-500/20 text-red-300"
                              : recommendation.priority === "medium"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                        >
                          {recommendation.priority}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {recommendation.description}
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full hover:bg-primary/10 hover:border-primary/30"
                        >
                          Implement
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full hover:bg-primary/10"
                        >
                          Later
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Removed motion.div wrapper */}
        </div>

        {/* Quick Actions for LinkedIn and Resume */}
        {/* Removed motion.div wrapper */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-primary/10 bg-card rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:bg-accent/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                    💼
                  </span>
                  <h3 className="text-xl font-semibold">LinkedIn Analysis</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Get detailed insights on your LinkedIn profile optimization
                </p>
                <div className="flex flex-col gap-2">
                  {/* Updated to link to the analyze page which now has payment integration */}
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 justify-start rounded-full hover:scale-105 transition-transform"
                  >
                    <Link href="/analyze">Analyze Profile</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start rounded-full hover:bg-primary/10 hover:border-primary/30"
                  >
                    View Detailed Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/10 bg-card rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:bg-accent/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                    📄
                  </span>
                  <h3 className="text-xl font-semibold">Resume Review</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional evaluation of your resume for better job
                  prospects
                </p>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    className="bg-purple-600 hover:bg-purple-700 justify-start rounded-full hover:scale-105 transition-transform"
                  >
                    <Link href="/resume/analyze">Review Resume</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="justify-start rounded-full hover:bg-primary/10 hover:border-primary/30"
                  >
                    <Link href="/resume/report?id=latest">
                      View Detailed Report
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Removed motion.div wrapper */}
      </div>
    </div>
  );
};

export default Dashboard;
