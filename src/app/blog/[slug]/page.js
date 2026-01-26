"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { useUser } from "@clerk/nextjs";
import { BlogAPI } from "@/components/api/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Heart,
  MessageSquare,
  Send,
  Link2,
  Check,
} from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user, isLoaded: isUserLoaded } = useUser();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [likingInProgress, setLikingInProgress] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentForm, setCommentForm] = useState({
    author_name: "",
    author_email: "",
    content: "",
  });
  const [submittingComment, setSubmittingComment] = useState(false);
  const [showFloatingBar, setShowFloatingBar] = useState(true);
  const commentsRef = useRef(null);

  const isLoggedIn = isUserLoaded && user;
  const getUserName = () =>
    user?.fullName || user?.firstName || user?.username || "";
  const getUserEmail = () => user?.primaryEmailAddress?.emailAddress || "";

  useEffect(() => {
    if (params.slug) {
      loadBlog();
      loadLikeStatus();
      loadComments();
    }
  }, [params.slug]);

  // Hide floating bar when comments section is visible
  useEffect(() => {
    const handleScroll = () => {
      if (commentsRef.current) {
        const rect = commentsRef.current.getBoundingClientRect();
        setShowFloatingBar(rect.top > window.innerHeight - 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadBlog = async () => {
    try {
      setLoading(true);
      const response = await BlogAPI.getBlogBySlug(params.slug);
      setBlog(response);
      setLikesCount(response.likes_count || 0);
    } catch (err) {
      setError(err.error || "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  const loadLikeStatus = async () => {
    try {
      const r = await BlogAPI.getLikeStatus(params.slug);
      setLiked(r.liked);
      setLikesCount(r.likes_count);
    } catch {}
  };

  const loadComments = async () => {
    try {
      setCommentsLoading(true);
      const r = await BlogAPI.getComments(params.slug);
      setComments(r.comments || []);
    } catch {
    } finally {
      setCommentsLoading(false);
    }
  };

  const handleLike = async () => {
    if (likingInProgress) return;
    setLikingInProgress(true);
    try {
      const r = liked
        ? await BlogAPI.unlikeBlog(params.slug)
        : await BlogAPI.likeBlog(params.slug);
      setLiked(!liked);
      setLikesCount(r.likes_count);
    } catch {
    } finally {
      setLikingInProgress(false);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const name = isLoggedIn ? getUserName() : commentForm.author_name;
    const email = isLoggedIn ? getUserEmail() : commentForm.author_email;
    if (!name.trim() || !commentForm.content.trim()) return;
    setSubmittingComment(true);
    try {
      await BlogAPI.addComment(params.slug, {
        author_name: name,
        author_email: email,
        content: commentForm.content,
      });
      setCommentForm({ author_name: "", author_email: "", content: "" });
      loadComments();
    } catch {
    } finally {
      setSubmittingComment(false);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500">Article not found</p>
        <Button variant="outline" onClick={() => router.push("/blog")}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Back Button */}
      <div className="w-full lg:w-3/4 mx-auto px-4 pt-6">
        <button
          onClick={() => router.push("/blog")}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
      </div>

      {/* Hero */}
      <header className="w-full lg:w-3/4 mx-auto px-4 pt-8 pb-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
            {blog.category || "Article"}
          </span>
          {blog.published_at && (
            <time>{format(new Date(blog.published_at), "MMM d, yyyy")}</time>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          {blog.title}
        </h1>
        {blog.excerpt && (
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {blog.excerpt}
          </p>
        )}
      </header>

      {/* Featured Image */}
      {blog.featured_image && (
        <figure className="w-full lg:w-3/4 mx-auto px-4 mb-8">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full rounded-xl object-cover max-h-[500px]"
          />
        </figure>
      )}

      {/* Content */}
      <main className="w-full lg:w-3/4 mx-auto px-4 pb-24">
        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Like Button */}
        <div className="mt-8 pt-6 border-t flex items-center gap-4">
          <button
            onClick={handleLike}
            disabled={likingInProgress}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition ${
              liked
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-white" : ""}`} />
            {liked ? "Liked" : "Like"} ({likesCount})
          </button>
          <span className="text-sm text-gray-500">
            {likesCount} {likesCount === 1 ? "person likes" : "people like"}{" "}
            this
          </span>
        </div>
      </main>

      {/* Floating Action Bar */}
      {showFloatingBar && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2 bg-white rounded-full shadow-lg border px-2 py-1.5">
            <button
              onClick={handleLike}
              disabled={likingInProgress}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition ${
                liked
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-white" : ""}`} />
              {likesCount}
            </button>
            <a
              href="#comments"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              <MessageSquare className="w-4 h-4" />
              {comments.length}
            </a>
          </div>
        </div>
      )}

      {/* Comments */}
      <section id="comments" ref={commentsRef} className="bg-slate-100 py-12">
        <div className="w-full lg:w-3/4 mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            {comments.length} Comment{comments.length !== 1 ? "s" : ""}
          </h2>

          {/* Comment Form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">
              Leave a comment
            </h3>
            <form onSubmit={handleComment}>
              {isLoggedIn ? (
                <div className="flex items-center gap-3 mb-4 p-3 bg-slate-50 rounded-lg">
                  {user.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                      {getUserName().charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-gray-900">
                      {getUserName()}
                    </div>
                    <div className="text-xs text-gray-500">Signed in</div>
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <Input
                    placeholder="Your name *"
                    value={commentForm.author_name}
                    onChange={(e) =>
                      setCommentForm({
                        ...commentForm,
                        author_name: e.target.value,
                      })
                    }
                    required
                    className="h-11 bg-slate-50 border-slate-200"
                  />
                  <Input
                    placeholder="Email (optional)"
                    type="email"
                    value={commentForm.author_email}
                    onChange={(e) =>
                      setCommentForm({
                        ...commentForm,
                        author_email: e.target.value,
                      })
                    }
                    className="h-11 bg-slate-50 border-slate-200"
                  />
                </div>
              )}
              <Textarea
                placeholder="Share your thoughts..."
                value={commentForm.content}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, content: e.target.value })
                }
                rows={4}
                required
                className="resize-none mb-4 bg-slate-50 border-slate-200"
              />
              <Button type="submit" disabled={submittingComment}>
                <Send className="w-4 h-4 mr-2" />
                {submittingComment ? "Posting..." : "Post Comment"}
              </Button>
            </form>
          </div>

          {/* Comments List */}
          {commentsLoading ? (
            <div className="text-center py-12 text-gray-400">
              Loading comments...
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 mx-auto text-slate-300 mb-3" />
              <p className="text-gray-500">
                No comments yet. Be the first to share your thoughts!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((c, index) => (
                <div
                  key={c.id}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:border-slate-300 transition"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium shrink-0"
                      style={{
                        backgroundColor: [
                          "#6366f1",
                          "#8b5cf6",
                          "#06b6d4",
                          "#10b981",
                          "#f59e0b",
                          "#ef4444",
                        ][index % 6],
                      }}
                    >
                      {c.author_name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900">
                          {c.author_name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {format(new Date(c.created_at), "MMM d, yyyy")}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {c.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
