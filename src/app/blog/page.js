"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { BlogAPI } from "@/components/api/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Search,
  Calendar,
  Clock,
  Heart,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function BlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const searchRef = useRef();

  useEffect(() => {
    loadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const response = await BlogAPI.getBlogs({ page, limit: 9, search });
      setBlogs(response.blogs || []);
      setPagination(response.pagination);
    } catch (error) {
      console.error("Error loading blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    loadBlogs();
  };

  // Estimate reading time based on content length
  const getReadingTime = (content) => {
    if (!content) return "2 min read";
    const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Featured post (first one)
  const featuredPost = blogs.length > 0 ? blogs[0] : null;
  const regularPosts = blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative container mx-auto px-4 max-w-6xl z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              Career Insights & Growth
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-slate-900">Discover Ideas That</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform Careers
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Expert insights, practical tips, and inspiring stories to help you
              navigate your career journey with confidence.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <div className="flex items-center bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-2 transition-all focus-within:shadow-2xl focus-within:shadow-primary/10 focus-within:border-primary/50">
                <Search className="h-5 w-5 ml-4 text-slate-400" />
                <Input
                  ref={searchRef}
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 text-base pl-3"
                />
                <Button
                  type="submit"
                  className="rounded-xl px-6 py-2.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold shadow-lg shadow-primary/25"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-slate-500">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {pagination?.total || 0}+ Articles
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <main className="container mx-auto px-4 pb-20 max-w-6xl">
        {loading ? (
          // Loading skeleton
          <div className="space-y-8">
            <div className="h-96 bg-slate-200 rounded-3xl animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="h-48 bg-slate-200 rounded-2xl" />
                  <div className="h-6 bg-slate-200 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 rounded w-full" />
                  <div className="h-4 bg-slate-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          </div>
        ) : blogs.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center py-32">
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">
              <BookOpen className="h-12 w-12 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-700 mb-2">
              No articles found
            </h2>
            <p className="text-slate-500 text-center max-w-md">
              {search
                ? "Try different keywords or clear your search."
                : "Check back soon for new content!"}
            </p>
            {search && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
                className="mt-6"
              >
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && !search && page === 1 && (
              <div className="mb-16">
                <Card
                  className="group overflow-hidden rounded-3xl border-0 shadow-2xl shadow-slate-200/50 cursor-pointer hover:shadow-3xl transition-all duration-500"
                  onClick={() => router.push(`/blog/${featuredPost.slug}`)}
                >
                  <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-72 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      {featuredPost.featured_image ? (
                        <img
                          src={featuredPost.featured_image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full">
                          <BookOpen className="h-20 w-20 text-slate-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <Badge className="absolute top-6 left-6 bg-white/90 text-primary backdrop-blur-sm px-4 py-1.5 text-sm font-semibold">
                        ✨ Featured
                      </Badge>
                    </div>

                    {/* Content */}
                    <CardContent className="flex flex-col justify-center p-8 md:p-12">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        {featuredPost.published_at && (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {format(
                              new Date(featuredPost.published_at),
                              "MMMM d, yyyy",
                            )}
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {getReadingTime(featuredPost.content)}
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      {featuredPost.excerpt && (
                        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Heart className="h-4 w-4" />
                          <span>{featuredPost.likes_count || 0} likes</span>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-primary font-semibold group-hover:gap-3 transition-all"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            )}

            {/* Section Header */}
            {regularPosts.length > 0 && !search && page === 1 && (
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Latest Articles
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(search || page > 1 ? blogs : regularPosts).map((blog) => (
                <Card
                  key={blog.id}
                  className="group overflow-hidden rounded-2xl border-0 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer flex flex-col bg-white"
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    {blog.featured_image ? (
                      <img
                        src={blog.featured_image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full">
                        <BookOpen className="h-12 w-12 text-slate-300" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <CardContent className="flex-1 flex flex-col p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      {blog.published_at && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {format(new Date(blog.published_at), "MMM d, yyyy")}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {getReadingTime(blog.content)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Heart className="h-3.5 w-3.5" />
                        <span>{blog.likes_count || 0}</span>
                      </div>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-16">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-xl"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-1 px-4">
                  {Array.from(
                    { length: Math.min(5, pagination.totalPages) },
                    (_, i) => {
                      let showPage;
                      if (pagination.totalPages <= 5) {
                        showPage = i + 1;
                      } else if (page <= 3) {
                        showPage = i + 1;
                      } else if (page >= pagination.totalPages - 2) {
                        showPage = pagination.totalPages - 4 + i;
                      } else {
                        showPage = page - 2 + i;
                      }

                      return (
                        <Button
                          key={showPage}
                          variant={showPage === page ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setPage(showPage)}
                          className={`w-10 h-10 rounded-xl ${
                            showPage === page
                              ? "bg-primary text-white"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {showPage}
                        </Button>
                      );
                    },
                  )}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setPage((p) => Math.min(pagination.totalPages, p + 1))
                  }
                  disabled={page === pagination.totalPages}
                  className="rounded-xl"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
