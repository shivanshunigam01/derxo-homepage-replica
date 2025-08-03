import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Eye,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [limit] = useState(10);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://31.97.205.42:5000/api/blogs?page=${currentPage}&limit=${limit}`
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        if (Array.isArray(data)) {
          setBlogs(data);
          setTotalPages(Math.ceil(data.length / limit));
          setTotalBlogs(data.length);
        } else {
          setBlogs(data.blogs || data.data || []);
          setTotalPages(
            data.totalPages ||
              Math.ceil((data.total || data.totalBlogs || 0) / limit)
          );
          setTotalBlogs(data.total || data.totalBlogs || 0);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [currentPage, limit]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (currentPage > 1) newSearchParams.set("page", currentPage.toString());
    else newSearchParams.delete("page");
    if (searchQuery) newSearchParams.set("search", searchQuery);
    else newSearchParams.delete("search");
    navigate(`?${newSearchParams.toString()}`, { replace: true });
  }, [currentPage, searchQuery, navigate, searchParams]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog._id}`);
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const stripHtml = (html) => {
    if (!html) return "";
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Loading blogs...</p>
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
                <BookOpen className="h-16 w-16 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-4">
                Unable to Load Blogs
              </h1>
              <p className="text-slate-600 mb-6">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Try Again
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

      <section className="pt-24 pb-8 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {searchQuery ? "Search Results" : "Health & Wellness Blog"}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {searchQuery
                ? `Showing ${filteredBlogs.length} results for “${searchQuery}”`
                : "Discover expert insights, health tips, and the latest medical news"}
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Search articles, health tips, and more..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 h-14 text-base bg-white border-0 rounded-full px-6 shadow-lg"
                />
                {searchQuery && (
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                    variant="outline"
                    className="h-14 px-6 bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:shadow-md rounded-full"
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-slate-600 text-sm">
                Showing {(currentPage - 1) * limit + 1}-
                {Math.min(currentPage * limit, totalBlogs)} of {totalBlogs}{" "}
                articles
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-600 text-sm mr-2">View:</span>
                <div className="flex border border-slate-300 rounded-full overflow-hidden bg-white/80">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-4 py-2 text-sm flex items-center gap-2 ${
                      viewMode === "grid"
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-white/50"
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-4 py-2 text-sm flex items-center gap-2 ${
                      viewMode === "list"
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-white/50"
                    }`}
                  >
                    <List className="h-4 w-4" />
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-slate-400 mb-6">
                <Search className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {searchQuery
                  ? `No articles found for “${searchQuery}”`
                  : "No blogs available"}
              </h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                {searchQuery
                  ? "We couldn't find any articles matching your search. Try different keywords."
                  : "Check back later for new health and wellness articles."}
              </p>
              {searchQuery && (
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View All Articles
                </Button>
              )}
            </div>
          ) : (
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-8"
                }
              >
                {filteredBlogs.map((blog) => (
                  <article
                    key={blog._id}
                    onClick={() => handleBlogClick(blog)}
                    className={`group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer ${
                      viewMode === "list" ? "flex gap-6 p-6" : "overflow-hidden"
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <>
                        {blog.featuredImage && (
                          <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <BookOpen className="h-12 w-12 text-blue-400" />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {formatDate(
                                  blog.createdAt ||
                                    blog.publishedAt ||
                                    blog.date
                                )}
                              </span>
                            </div>
                            {blog.author && (
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{blog.author}</span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                            {blog.excerpt ||
                              stripHtml(blog.content).substring(0, 150) + "..."}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-slate-500">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{blog.readTime || "5 min read"}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                              <span>Read More</span>
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-48 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-8 w-8 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {formatDate(
                                  blog.createdAt ||
                                    blog.publishedAt ||
                                    blog.date
                                )}
                              </span>
                            </div>
                            {blog.author && (
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />{" "}
                                <span>{blog.author}</span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-3">
                            {blog.title}
                          </h3>
                          <p className="text-slate-600 mb-4 line-clamp-2">
                            {blog.excerpt ||
                              stripHtml(blog.content).substring(0, 200) + "..."}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{blog.readTime || "5 min read"}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                <span>{blog.views || "0"} views</span>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                            >
                              Read Article
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      const isCurrent = page === currentPage;
                      const show =
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1);
                      if (!show) {
                        if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span key={page} className="px-2 text-slate-400">
                              …
                            </span>
                          );
                        }
                        return null;
                      }
                      return (
                        <Button
                          key={page}
                          variant={isCurrent ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                          className={
                            isCurrent ? "bg-blue-600 hover:bg-blue-700" : ""
                          }
                        >
                          {page}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Health News
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest health tips, medical breakthroughs, and wellness
            advice delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white border-0 h-12"
            />
            <Button
              variant="outline"
              className="bg-white text-blue-600 border-white hover:bg-blue-50 h-12 px-8"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
