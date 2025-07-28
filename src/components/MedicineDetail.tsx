import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Pill,
  Clock,
  Shield,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  AlertTriangle,
  CheckCircle,
  Info,
  Phone,
  MapPin,
  Grid,
  List,
  Package,
  DollarSign,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MedicineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState(null);
  const [categoryMedicines, setCategoryMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [medicinesLoading, setMedicinesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [medicinesError, setMedicinesError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  // Fetch medicine details from API
  useEffect(() => {
    const fetchMedicineDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://derxo-backend-working.onrender.com/api/medicines/medicineCategory/id/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch medicine details");
        }
        const data = await response.json();
        setMedicine(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMedicineDetails();
    }
  }, [id]);

  // Fetch category medicines from API
  useEffect(() => {
    const fetchCategoryMedicines = async () => {
      try {
        setMedicinesLoading(true);
        const response = await fetch(
          `https://derxo-backend-working.onrender.com/api/medicines/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch category medicines");
        }
        const data = await response.json();
        setCategoryMedicines(data);
      } catch (err) {
        setMedicinesError(err.message);
      } finally {
        setMedicinesLoading(false);
      }
    };

    if (id) {
      fetchCategoryMedicines();
    }
  }, [id]);

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handle favorite toggle
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: medicine?.name || "Medicine Details",
          text: `Check out ${medicine?.name} on our pharmacy`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Strip HTML tags for clean text display
  const stripHtml = (html) => {
    if (!html) return "";
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Loading medicine details...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
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
                Unable to Load Medicine Details
              </h1>
              <p className="text-slate-600 mb-6">{error}</p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 hover:bg-blue-700"
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

  // No medicine found
  if (!medicine) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <div className="text-slate-400 mb-4">
                <Pill className="h-16 w-16 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-4">
                Medicine Not Found
              </h1>
              <p className="text-slate-600 mb-6">
                The medicine you're looking for doesn't exist or has been
                removed.
              </p>
              <Button
                onClick={handleBack}
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
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
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="text-sm text-slate-500">
              <span>All Medicines</span>
              <span className="mx-2">›</span>
              <span className="text-slate-800">{medicine.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Medicine Header */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Medicine Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Pill className="h-16 w-16 text-white" />
                </div>
              </div>

              {/* Medicine Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                      {medicine.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Clock className="h-4 w-4" />
                        <span>Fast Delivery Available</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Shield className="h-4 w-4" />
                        <span>Verified & Safe</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>Top Rated Category</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={toggleFavorite}
                      variant="outline"
                      size="sm"
                      className={`p-3 ${
                        isFavorite
                          ? "bg-red-50 border-red-200 text-red-600"
                          : "hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isFavorite ? "fill-current" : ""
                        }`}
                      />
                    </Button>
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      size="sm"
                      className="p-3"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Description */}
                <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <Info className="h-6 w-6 text-blue-600" />
                    About This Medicine Category
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <div
                      className="text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: medicine.content }}
                    />
                  </div>
                </div>

                {/* Available Medicines in Category */}
                <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                      <Package className="h-6 w-6 text-blue-600" />
                      Available Medicines ({categoryMedicines.length})
                    </h2>

                    {/* View Mode Toggle */}
                    <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`px-3 py-2 text-sm flex items-center gap-2 ${
                          viewMode === "grid"
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <Grid className="h-4 w-4" />
                        Grid
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`px-3 py-2 text-sm flex items-center gap-2 ${
                          viewMode === "list"
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <List className="h-4 w-4" />
                        List
                      </button>
                    </div>
                  </div>

                  {medicinesLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-slate-600">Loading medicines...</p>
                      </div>
                    </div>
                  ) : medicinesError ? (
                    <div className="text-center py-12">
                      <div className="text-red-500 mb-4">
                        <AlertTriangle className="h-12 w-12 mx-auto" />
                      </div>
                      <p className="text-slate-600 mb-4">
                        Failed to load medicines: {medicinesError}
                      </p>
                      <Button
                        onClick={() => window.location.reload()}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Try Again
                      </Button>
                    </div>
                  ) : categoryMedicines.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-slate-400 mb-4">
                        <Package className="h-12 w-12 mx-auto" />
                      </div>
                      <p className="text-slate-600">
                        No medicines available in this category yet.
                      </p>
                    </div>
                  ) : (
                    <div
                      className={
                        viewMode === "grid"
                          ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                          : "space-y-4"
                      }
                    >
                      {categoryMedicines.map((med) => (
                        <div
                          key={med._id}
                          className={`group bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 ${
                            viewMode === "list" ? "flex p-4" : "p-6"
                          }`}
                        >
                          {viewMode === "grid" ? (
                            <>
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                    <Pill className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {med.name}
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                      {med.strength} • {med.type}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    med.stockAvailable
                                      ? "bg-green-100 text-green-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {med.stockAvailable
                                    ? "In Stock"
                                    : "Out of Stock"}
                                </div>
                              </div>

                              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                {med.description}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                  <div className="flex items-center gap-1">
                                    <Shield className="h-3 w-3" />
                                    <span>FDA Approved</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>Fast Delivery</span>
                                  </div>
                                </div>
                                <Button
                                  size="sm"
                                  disabled={!med.stockAvailable}
                                  className={`text-xs ${
                                    med.stockAvailable
                                      ? "bg-blue-600 hover:bg-blue-700"
                                      : "bg-slate-400 cursor-not-allowed"
                                  }`}
                                >
                                  <ShoppingCart className="h-3 w-3 mr-1" />
                                  {med.stockAvailable
                                    ? "Add to Cart"
                                    : "Unavailable"}
                                </Button>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-3 mr-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Pill className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                    {med.name}
                                  </h3>
                                  <div
                                    className={`px-2 py-1 text-xs rounded-full ml-2 ${
                                      med.stockAvailable
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {med.stockAvailable
                                      ? "In Stock"
                                      : "Out of Stock"}
                                  </div>
                                </div>
                                <p className="text-sm text-slate-500 mb-2">
                                  {med.strength} • {med.type}
                                </p>
                                <p className="text-slate-600 text-sm mb-3 line-clamp-1">
                                  {med.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4 text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                      <Shield className="h-3 w-3" />
                                      <span>FDA Approved</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      <span>Fast Delivery</span>
                                    </div>
                                  </div>
                                  <Button
                                    size="sm"
                                    disabled={!med.stockAvailable}
                                    className={`text-xs ${
                                      med.stockAvailable
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "bg-slate-400 cursor-not-allowed"
                                    }`}
                                  >
                                    <ShoppingCart className="h-3 w-3 mr-1" />
                                    {med.stockAvailable
                                      ? "Add to Cart"
                                      : "Unavailable"}
                                  </Button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Important Information */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Important Information
                  </h3>
                  <ul className="text-yellow-700 space-y-2 text-sm">
                    <li>
                      • Always consult with a healthcare provider before
                      starting any medication
                    </li>
                    <li>
                      • Verify prescription requirements and dosage instructions
                    </li>
                    <li>
                      • Check for potential drug interactions and allergies
                    </li>
                    <li>• Follow storage instructions and expiration dates</li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Category Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700 text-sm">
                        Total Medicines:
                      </span>
                      <span className="font-semibold text-blue-800">
                        {categoryMedicines.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700 text-sm">In Stock:</span>
                      <span className="font-semibold text-green-600">
                        {
                          categoryMedicines.filter((med) => med.stockAvailable)
                            .length
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700 text-sm">
                        Out of Stock:
                      </span>
                      <span className="font-semibold text-red-600">
                        {
                          categoryMedicines.filter((med) => !med.stockAvailable)
                            .length
                        }
                      </span>
                    </div>
                  </div>
                </div>
                {/* Quick Actions */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Find Medicines
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Consult Pharmacist
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <MapPin className="h-4 w-4" />
                      Find Store
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-green-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">
                        Verified Quality Medicines
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-green-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Competitive Pricing</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Fast & Secure Delivery</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Expert Consultation</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Need Help?
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Our pharmacists are available to help you with any questions
                    about medications.
                  </p>
                  <div className="text-sm text-slate-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+1-800-PHARMACY</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Mon-Fri: 8AM-8PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicineDetail;
