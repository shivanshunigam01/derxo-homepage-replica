import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Tag,
  MessageSquare,
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Link,
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Fetch blog details from API
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        // Assuming you have a single blog endpoint
        const response = await fetch(
          `http://31.97.205.42:5000/api/blogs/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlog(data);

        // Fetch related blogs (you might need to adjust this based on your API)
        fetchRelatedBlogs(data.category || "health");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  // Fetch related blogs
  const fetchRelatedBlogs = async (category) => {
    try {
      const response = await fetch(
        `http://31.97.205.42:5000/api/blogs?page=1&limit=3`
      );
      if (response.ok) {
        const data = await response.json();
        const blogs = Array.isArray(data)
          ? data
          : data.blogs || data.data || [];
        setRelatedBlogs(blogs.filter((b) => b._id !== id).slice(0, 3));
      }
    } catch (err) {
      console.log("Failed to fetch related blogs:", err);
    }
  };

  // Handle back navigation
  const handleBack = () => {
    navigate("/blog");
  };

  // Handle like toggle
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Handle favorite toggle
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Handle share
  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = blog?.title || "Blog Post";

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
      case "native":
        if (navigator.share) {
          try {
            await navigator.share({ title, url });
          } catch (err) {
            console.log("Error sharing:", err);
          }
        }
        break;
    }
    setShowShareMenu(false);
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Calculate reading time
  const calculateReadingTime = (content) => {
    if (!content) return "5 min read";
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Navigate to related blog
  const handleRelatedBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Loading article...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <div className="text-red-500 mb-4">
                <AlertTriangle className="h-16 w-16 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-4">
                Unable to Load Article
              </h1>
              <p className="text-slate-600 mb-6">{error}</p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <div className="text-slate-400 mb-4">
                <BookOpen className="h-16 w-16 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-4">
                Article Not Found
              </h1>
              <p className="text-slate-600 mb-6">
                The article you're looking for doesn't exist or has been
                removed.
              </p>
              <Button
                onClick={handleBack}
                className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb & Back Navigation */}
      <div className="pt-24 pb-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={handleBack}
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-slate-600 hover:text-purple-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
            <div className="text-sm text-slate-500">
              <span>Blog</span>
              <span className="mx-2">›</span>
              <span className="text-slate-800 line-clamp-1">{blog.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category & Tags */}
            {blog.category && (
              <div className="mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <Tag className="h-3 w-3" />
                  {blog.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-6 text-slate-600">
                {blog.author && (
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="font-medium">{blog.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {formatDate(
                      blog.createdAt || blog.publishedAt || blog.date
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>
                    {blog.readTime || calculateReadingTime(blog.content)}
                  </span>
                </div>
                {blog.views && (
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    <span>{blog.views} views</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={toggleLike}
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-2 ${
                    isLiked
                      ? "bg-red-50 border-red-200 text-red-600"
                      : "hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                  />
                  <span>{blog.likes || 0}</span>
                </Button>
                <Button
                  onClick={toggleFavorite}
                  variant="outline"
                  size="sm"
                  className={`p-3 ${
                    isFavorite
                      ? "bg-yellow-50 border-yellow-200 text-yellow-600"
                      : "hover:bg-yellow-50 hover:border-yellow-200 hover:text-yellow-600"
                  }`}
                >
                  <BookOpen
                    className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`}
                  />
                </Button>
                <div className="relative">
                  <Button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    variant="outline"
                    size="sm"
                    className="p-3"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-slate-200 p-2 z-10">
                      <div className="flex flex-col gap-1 min-w-[150px]">
                        <button
                          onClick={() => handleShare("facebook")}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded"
                        >
                          <Facebook className="h-4 w-4 text-blue-600" />
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare("twitter")}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded"
                        >
                          <Twitter className="h-4 w-4 text-blue-400" />
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare("linkedin")}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded"
                        >
                          <Linkedin className="h-4 w-4 text-blue-700" />
                          LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare("copy")}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded"
                        >
                          <Link className="h-4 w-4" />
                          Copy Link
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.featuredImage && (
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-purple-400" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none">
              <div
                className="text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {blog.authorBio && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        About {blog.author || "the Author"}
                      </h3>
                      <p className="text-slate-600">{blog.authorBio}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Article Actions */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Was this article helpful?
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={toggleLike}
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 ${
                      isLiked
                        ? "bg-green-50 border-green-200 text-green-600"
                        : "hover:bg-green-50 hover:border-green-200 hover:text-green-600"
                    }`}
                  >
                    <ThumbsUp
                      className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                    />
                    Helpful
                  </Button>
                  <Button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <article
                    key={relatedBlog._id}
                    onClick={() => handleRelatedBlogClick(relatedBlog._id)}
                    className="group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-purple-400" />
                    </div>

                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {formatDate(
                              relatedBlog.createdAt ||
                                relatedBlog.publishedAt ||
                                relatedBlog.date
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{relatedBlog.readTime || "5 min read"}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors mb-3 line-clamp-2">
                        {relatedBlog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                        {relatedBlog.excerpt ||
                          (relatedBlog.content &&
                            relatedBlog.content
                              .replace(/<[^>]*>/g, "")
                              .substring(0, 100) + "...")}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center text-purple-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        <span>Read Article</span>
                        <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Miss Our Latest Articles
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest health tips, medical
            insights, and wellness advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-800"
            />
            <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default BlogDetail;
