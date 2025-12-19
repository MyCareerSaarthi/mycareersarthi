"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { BlogAPI } from "@/components/api/blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.slug) {
      loadBlog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);

  const loadBlog = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await BlogAPI.getBlogBySlug(params.slug);
      setBlog(response);
    } catch (err) {
      console.error("Error loading blog:", err);
      setError(err.error || "Failed to load blog post");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-3/4" />
            <div className="h-80 bg-muted rounded" />
            <div className="space-y-3">
              <div className="h-5 bg-muted rounded w-2/4" />
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl font-bold text-muted-foreground">
            Blog Post Not Found
          </h1>
          <p className="text-lg text-muted-foreground">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Button onClick={() => router.push("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 max-w-4xl z-10">
          <div className="space-y-6">
            <Button
              variant="ghost"
              onClick={() => router.push("/blog")}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {blog.title}
              </h1>
              {blog.excerpt && (
                <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                  {blog.excerpt}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              {blog.published_at && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {format(new Date(blog.published_at), "MMMM d, yyyy")}
                  </span>
                </div>
              )}
              <Badge variant="secondary" className="text-xs">
                {blog.category || "Blog"}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-muted-foreground hover:text-foreground"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.featured_image && (
        <section className="container mx-auto px-4 max-w-4xl mb-12">
          <Card className="overflow-hidden">
            <div className="w-full aspect-video bg-muted">
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="object-cover w-full h-full"
                loading="eager"
              />
            </div>
          </Card>
        </section>
      )}

      {/* Content */}
      <main className="container mx-auto px-4 pb-12 max-w-4xl">
        <Card className="prose prose-lg dark:prose-invert max-w-none">
          <CardContent className="p-8 md:p-12">
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="prose-headings:font-bold prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground"
            />
          </CardContent>
        </Card>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => router.push("/blog")}
            size="lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Posts
          </Button>
        </div>
      </main>
    </div>
  );
}
