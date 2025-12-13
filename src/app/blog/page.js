"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { BlogAPI } from "@/components/api/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Calendar } from "lucide-react";

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
      const response = await BlogAPI.getBlogs({ page, limit: 12, search });
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Hero Section */}
      <section className="relative overflow-hidden py-12">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Inspiration & Insights
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                At MyCareerSarthi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your everyday growth companion: read, reflect, and level-up your
              career journey with practical, engaging content.
            </p>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex items-center justify-center rounded-full shadow-lg bg-card border border-border px-4 py-2 w-full max-w-xl mx-auto"
            >
              <Search className="h-5 w-5 mr-2 text-muted-foreground" />
              <Input
                ref={searchRef}
                type="text"
                placeholder="Search for stories, tips, or news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none shadow-none flex-1 text-base"
                style={{
                  boxShadow: "none",
                  outline: "none",
                  border: "none",
                }}
              />
              <Button
                type="submit"
                className="rounded-full px-6 py-2 ml-2 font-semibold"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full aspect-[16/10] bg-muted rounded-t-lg" />
                <CardContent className="p-6 space-y-3">
                  <div className="h-5 bg-muted rounded w-4/5" />
                  <div className="h-4 bg-muted rounded w-3/5" />
                  <div className="h-3 bg-muted rounded w-5/6" />
                  <div className="h-8 w-28 bg-muted rounded mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="text-center space-y-4">
              <p className="text-3xl font-bold text-muted-foreground">
                No blogs found!
              </p>
              <p className="text-lg text-muted-foreground">
                Try another search or check back later.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      router.push(`/blog/${blog.slug}`);
                  }}
                  tabIndex={0}
                  aria-label={`Read post: ${blog.title}`}
                >
                  {/* Blog image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                    {blog.featured_image ? (
                      <img
                        src={blog.featured_image}
                        alt={blog.title}
                        loading="lazy"
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-muted-foreground text-6xl">
                        📄
                      </div>
                    )}
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {blog.category || "Blog"}
                    </Badge>
                  </div>

                  {/* Content */}
                  <CardContent className="flex-1 flex flex-col p-6">
                    <h2 className="text-xl font-bold mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    {blog.excerpt ? (
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3 flex-1">
                        {blog.excerpt}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground mb-4">
                        No description available.
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {blog.published_at
                            ? format(new Date(blog.published_at), "MMM d, yyyy")
                            : "Draft"}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-0 group-hover:text-primary font-semibold"
                        tabIndex={-1}
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/blog/${blog.slug}`);
                        }}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mt-16">
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <div className="flex gap-1">
                  {Array.from(
                    { length: Math.min(7, pagination.totalPages) },
                    (_, i) => {
                      let showPage = i + 1;
                      if (pagination.totalPages > 7) {
                        if (page <= 4) {
                          showPage = i + 1;
                        } else if (page >= pagination.totalPages - 3) {
                          showPage = pagination.totalPages - 6 + i;
                        } else {
                          showPage = page - 3 + i;
                        }
                      }
                      if (showPage < 1 || showPage > pagination.totalPages)
                        return null;
                      return (
                        <Button
                          key={showPage}
                          variant={showPage === page ? "default" : "ghost"}
                          size="icon"
                          className="w-11 h-11"
                          onClick={() => setPage(showPage)}
                          aria-current={showPage === page ? "page" : undefined}
                          disabled={showPage === page}
                        >
                          {showPage}
                        </Button>
                      );
                    }
                  )}
                  {pagination.totalPages > 7 &&
                    page < pagination.totalPages - 3 && (
                      <>
                        <span className="mx-2 text-lg text-muted-foreground font-semibold select-none">
                          …
                        </span>
                        <Button
                          variant={
                            pagination.totalPages === page ? "default" : "ghost"
                          }
                          size="icon"
                          className="w-11 h-11"
                          onClick={() => setPage(pagination.totalPages)}
                          aria-current={
                            pagination.totalPages === page ? "page" : undefined
                          }
                          disabled={pagination.totalPages === page}
                        >
                          {pagination.totalPages}
                        </Button>
                      </>
                    )}
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    setPage((p) => Math.min(pagination.totalPages, p + 1))
                  }
                  disabled={page === pagination.totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
