import { useState, useEffect } from "react";
import {
  Calendar,
  User,
  Clock,
  Eye,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const HomepageBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to strip HTML tags
  const stripHtml = (html) => {
    if (!html) return "";
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Helper function to calculate reading time
  const calculateReadingTime = (content) => {
    if (!content) return "5 min read";
    const wordsPerMinute = 200;
    const words = stripHtml(content).split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://fields-garcia-developed-consider.trycloudflare.com//api/blogs?page=1&limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();

        // Handle different response formats
        let blogData = [];
        if (Array.isArray(data)) {
          blogData = data;
        } else if (data.blogs) {
          blogData = data.blogs;
        } else if (data.data) {
          blogData = data.data;
        } else {
          blogData = [];
        }

        setBlogs(blogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (blogId) => {
    // Navigate to blog detail page
    window.location.href = `/blog/${blogId}`;
  };

  const handleViewAllBlogs = () => {
    window.location.href = "/blog";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Thyroid: "bg-blue-100 text-blue-700 border-blue-200",
      "Heart Health": "bg-red-100 text-red-700 border-red-200",
      "Gut Health": "bg-green-100 text-green-700 border-green-200",
      "Mental Health": "bg-purple-100 text-purple-700 border-purple-200",
      Nutrition: "bg-orange-100 text-orange-700 border-orange-200",
      "Sleep Health": "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading health articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Error loading articles: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Since we don't have featured/popular flags from API, we'll create them based on content
  const featuredBlogs = blogs.slice(0, 3); // First 3 blogs as featured
  const popularBlogs = blogs.slice(3, 6); // Next 3 blogs as popular

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Health & Wellness Blog
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Popular Topics
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay informed with expert insights, health tips, and the latest
            medical breakthroughs
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              Featured Articles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <article
                key={blog._id}
                onClick={() => handleBlogClick(blog._id)}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-1"
              >
                {/* Featured Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center relative overflow-hidden">
                  <BookOpen className="h-12 w-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  {index === 0 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Latest
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  {/* Category */}
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                        blog.category
                      )}`}
                    >
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2 leading-tight">
                    {blog.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {blog.excerpt ||
                      stripHtml(blog.content).substring(0, 150) + "..."}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {formatDate(
                            blog.createdAt || blog.publishedAt || blog.date
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>
                          {blog.readTime || calculateReadingTime(blog.content)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{blog.views || 0}</span>
                    </div>
                  </div>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-slate-600 font-medium">
                        {blog.author || "Admin"}
                      </span>
                    </div>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Popular Articles - Compact List */}
        {popularBlogs.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-orange-600" />
                Trending Now
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularBlogs.map((blog) => (
                <article
                  key={blog._id}
                  onClick={() => handleBlogClick(blog._id)}
                  className="group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer overflow-hidden p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            blog.category || "Health"
                          )}`}
                        >
                          {blog.category || "Health"}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="h-3 w-3" />
                          <span>
                            {blog.readTime ||
                              calculateReadingTime(blog.content)}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-orange-600 transition-colors mb-2 line-clamp-2 text-sm">
                        {blog.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Eye className="h-3 w-3" />
                          <span>{blog.views || 0} views</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllBlogs}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <BookOpen className="h-5 w-5" />
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageBlogSection;
