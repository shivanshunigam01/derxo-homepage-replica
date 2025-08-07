import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Grid,
  List,
  ArrowRight,
  Pill,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllMedicines = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  const [viewMode, setViewMode] = useState("grid");

  // Fetch medicines from API
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://choir-anthony-warning-functioning.trycloudflare.com/api/medicines/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch medicines");
        }
        const data = await response.json();
        setMedicines(data);
        setFilteredMedicines(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  // Filter medicines based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredMedicines(medicines);
    } else {
      const filtered = medicines.filter(
        (medicine) =>
          medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          medicine.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMedicines(filtered);
    }
  }, [searchQuery, medicines]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const newSearchParams = new URLSearchParams(searchParams);
    if (query) {
      newSearchParams.set("query", query);
    } else {
      newSearchParams.delete("query");
    }
    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    navigate("/all-medicines", { replace: true });
  };

  // Navigate to medicine category page
  const handleMedicineClick = (medicine) => {
    navigate(`/medicine/${medicine._id}`); // Use medicine._id instead of medicine.url
  };

  // Handle Enter key press for search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Trigger search or any other action
    }
  };

  // Strip HTML tags from content for preview
  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Loading medicines...</p>
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
                <Pill className="h-16 w-16 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-4">
                Unable to Load Medicines
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

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {searchQuery
                ? "Search Results"
                : "Browse All Medicine Categories"}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {searchQuery
                ? `Showing ${filteredMedicines.length} results for "${searchQuery}"`
                : `Find affordable medications across ${medicines.length} categories`}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Search for medicines or conditions..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  className="flex-1 h-14 text-base bg-white border-0 rounded-full px-6 shadow-lg"
                />
                {searchQuery && (
                  <Button
                    onClick={clearSearch}
                    variant="outline"
                    className="h-14 px-6 bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:shadow-md rounded-full"
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center justify-center gap-2">
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
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-slate-400 mb-6">
                <Search className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                No medicines found for "{searchQuery}"
              </h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                We couldn't find any medicines matching your search. Try
                different keywords or browse all categories below.
              </p>
              <Button
                onClick={clearSearch}
                className="bg-blue-600 hover:bg-blue-700"
              >
                View All Categories
              </Button>
            </div>
          ) : (
            <>
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    {searchQuery
                      ? `Search Results for "${searchQuery}"`
                      : "All Medicine Categories"}
                  </h2>
                  <p className="text-slate-600">
                    {filteredMedicines.length}{" "}
                    {filteredMedicines.length === 1 ? "category" : "categories"}
                    {searchQuery ? " found" : " available"}
                  </p>
                </div>
              </div>

              {/* Medicine Grid/List */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-6"
                }
              >
                {filteredMedicines.map((medicine) => (
                  <div
                    key={medicine._id}
                    onClick={() => handleMedicineClick(medicine)}
                    className={`group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer ${
                      viewMode === "list" ? "flex p-6" : "p-6"
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <>
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <Pill className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {medicine.name}
                              </h3>
                            </div>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                            {stripHtml(medicine.content).substring(0, 150)}...
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="h-3 w-3" />
                              <span>Verified</span>
                            </div>
                          </div>
                          <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                            <span>View Details</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-4 mr-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Pill className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                            {medicine.name}
                          </h3>
                          <p className="text-slate-600 mb-3 line-clamp-2">
                            {stripHtml(medicine.content).substring(0, 200)}...
                          </p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="h-3 w-3" />
                              <span>Verified</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              <span>Top Rated</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center ml-6">
                          <Button
                            variant="outline"
                            size="sm"
                            className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                          >
                            View Details
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Popular Categories Section */}
      {!searchQuery && medicines.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Popular Categories
              </h2>
              <p className="text-slate-600">
                Most searched medicine categories
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {medicines.slice(0, 12).map((medicine) => (
                <Button
                  key={medicine._id}
                  variant="outline"
                  onClick={() => handleMedicineClick(medicine)}
                  className="rounded-full bg-white border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                >
                  {medicine.name}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Finding the Right Medicine?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our pharmacists are here to help you find the most affordable
            options for your prescriptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white text-blue-600 border-white hover:bg-blue-50"
            >
              Contact Pharmacist
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Compare Prices
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllMedicines;
