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
import CustomerTestimonials from "@/pages/CustomerTestimonials";

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
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => {
    const fetchMedicineDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://31.97.205.42:5000/api/medicines/medicineCategory/id/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch medicine details");
        const data = await response.json();
        setMedicine(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchMedicineDetails();
  }, [id]);

  useEffect(() => {
    const fetchCategoryMedicines = async () => {
      try {
        setMedicinesLoading(true);
        const response = await fetch(
          `http://31.97.205.42:5000/api/medicines/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch category medicines");
        const data = await response.json();
        setCategoryMedicines(data);
      } catch (err) {
        setMedicinesError(err.message);
      } finally {
        setMedicinesLoading(false);
      }
    };
    if (id) fetchCategoryMedicines();
  }, [id]);

  const handleBack = () => navigate(-1);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

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
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleProductClick = (productId, e) => {
    e.stopPropagation();
    const selectedProduct = categoryMedicines.find(
      (med) => med._id === productId
    );
    navigate(`/product/${productId}`, { state: { product: selectedProduct } });
  };

  const relatedProducts = [
    { id: 1, name: "Similar Medicine A", price: "$19.99", rating: 4.1 },
    { id: 2, name: "Alternative Treatment B", price: "$22.99", rating: 4.3 },
    { id: 3, name: "Complementary Product C", price: "$16.99", rating: 4.0 },
    { id: 4, name: "Enhanced Formula D", price: "$28.99", rating: 4.4 },
  ];
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="ml-4 text-slate-600">Loading medicine details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">
            Unable to Load Medicine Details
          </h1>
          <p className="mb-6">{error}</p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleBack}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Go Back
            </Button>
            <Button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Try Again
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!medicine) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 text-center">
          <Pill className="h-16 w-16 mx-auto text-slate-400 mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Medicine Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The medicine you're looking for doesn't exist or has been removed.
          </p>
          <Button
            onClick={handleBack}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="text-slate-600 hover:text-blue-600 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <div className="text-sm text-slate-500">
            <span>All Medicines</span>
            <span className="mx-2">›</span>
            <span className="text-slate-800">{medicine.name}</span>
          </div>
        </div>
      </div>

      {/* Medicine Header */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Pill className="h-16 w-16 text-white" />
            </div>
            <div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  {medicine.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Clock className="h-4 w-4" />
                    Fast Delivery
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Shield className="h-4 w-4" />
                    Verified & Safe
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Star className="h-4 w-4 text-yellow-500" />
                    Top Rated
                  </div>
                </div>
              </div>
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
                    className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`}
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
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left column */}
            <div className="lg:col-span-3">
              {/* Description */}
              <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Info className="h-6 w-6 text-blue-600" /> About This Medicine
                  Category
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: medicine.content }}
                  className="text-slate-700 leading-relaxed"
                />
              </div>

              {/* Available Medicines */}
              <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
                <div className="flex justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <Package className="h-6 w-6 text-blue-600" />
                    Available Medicines ({categoryMedicines.length})
                  </h2>
                  <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                    {/* <button
                      onClick={() => setViewMode("grid")}
                      className={`px-3 py-2 text-sm flex items-center gap-2 ${
                        viewMode === "grid"
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {/* <Grid className="h-4 w-4" /> Grid */}
                    {/* </button>  */}

                    {/* <button
                      onClick={() => setViewMode("list")}
                      className={`px-3 py-2 text-sm flex items-center gap-2 ${
                        viewMode === "list"
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    > */}
                    {/* <List className="h-4 w-4" /> List
                    </button> */}
                  </div>
                </div>

                {medicinesLoading ? (
                  <p className="text-slate-600 text-center py-8">
                    Loading medicines...
                  </p>
                ) : medicinesError ? (
                  <p className="text-red-500 text-center py-8">
                    Error: {medicinesError}
                  </p>
                ) : categoryMedicines.length === 0 ? (
                  <p className="text-slate-600 text-center py-8">
                    No medicines available.
                  </p>
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
                        className={`border border-slate-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition ${
                          viewMode === "list" ? "flex items-start gap-4" : ""
                        }`}
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                            <Pill className="h-5 w-5 text-white" />
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-2">
                          <h3
                            onClick={(e) => handleProductClick(med._id, e)}
                            className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer"
                          >
                            {med.name}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {med.strength} • {med.type}
                          </p>
                          <p className="text-slate-600 text-sm line-clamp-2">
                            {med.description}
                          </p>

                          <div className="pt-2">
                            <button
                              onClick={(e) => handleProductClick(med._id, e)}
                              className="mt-2 inline-flex items-center px-4 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium rounded-lg transition-all duration-200"
                            >
                              Know More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  Category Stats
                </h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <div>
                    Total Medicines: <strong>{categoryMedicines.length}</strong>
                  </div>
                  <div>
                    In Stock:{" "}
                    <strong className="text-green-600">
                      {
                        categoryMedicines.filter((med) => med.stockAvailable)
                          .length
                      }
                    </strong>
                  </div>
                  <div>
                    Out of Stock:{" "}
                    <strong className="text-red-600">
                      {
                        categoryMedicines.filter((med) => !med.stockAvailable)
                          .length
                      }
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomerTestimonials />
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800">
            Buy Our Other Medicines
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-slate-50 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-white rounded-lg p-4 mb-3 text-center">
                  <Pill className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  {relatedProduct.name}
                </h4>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-blue-600">
                    {relatedProduct.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-slate-600">
                      {relatedProduct.rating}
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedicineDetail;
