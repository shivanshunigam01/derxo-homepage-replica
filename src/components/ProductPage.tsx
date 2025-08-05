import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  XCircle,
  Pill,
  Package,
  Info,
  ShoppingCart,
  Star,
  Clock,
  Shield,
  Users,
  AlertTriangle,
  Leaf,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Mock data for demonstration
  const productDetails = {
    price: "$24.99",
    originalPrice: "$34.99",
    discount: "28% OFF",
    rating: 4.2,
    reviews: 127,
    howItWorks:
      "This medicine works by targeting specific receptors in the body to provide effective relief. The active ingredients are absorbed into the bloodstream and begin working within 30-60 minutes of administration.",
    dosage:
      "Adults: Take 1-2 tablets every 6-8 hours as needed. Do not exceed 8 tablets in 24 hours. Children under 12: Consult physician.",
    storage:
      "Store in a cool, dry place below 25°C. Keep away from direct sunlight and moisture. Keep out of reach of children.",
    interactions: {
      medicines: ["Warfarin", "Aspirin", "ACE inhibitors", "Diuretics"],
      food: ["Alcohol", "High-fat meals", "Grapefruit juice"],
    },
    directions:
      "Take with food to reduce stomach irritation. Swallow whole with plenty of water. Do not crush or chew.",
    rda: "This product provides 100% of the recommended daily allowance of essential vitamins and minerals when taken as directed.",
    sideEffects: [
      "Nausea",
      "Dizziness",
      "Headache",
      "Stomach upset",
      "Drowsiness",
    ],
    naturalSources:
      "Contains natural extracts from Ginseng root, Turmeric, and Green Tea leaves, sourced from certified organic farms.",
    competitors: [
      { name: "Brand A", price: "$29.99", rating: 3.8 },
      { name: "Brand B", price: "$32.99", rating: 4.0 },
      { name: "Brand C", price: "$27.99", rating: 3.9 },
    ],
  };

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most patients begin to see improvement within 2-3 days of starting treatment. Full benefits are typically observed after 1-2 weeks of consistent use.",
    },
    {
      question: "Can I take this with other medications?",
      answer:
        "Always consult your healthcare provider before combining medications. Some interactions may occur with blood thinners and certain heart medications.",
    },
    {
      question: "Is this safe for long-term use?",
      answer:
        "This medication is generally safe for long-term use when taken as directed. Regular monitoring by your healthcare provider is recommended.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "Take the missed dose as soon as you remember. If it's almost time for your next dose, skip the missed dose and continue with your regular schedule.",
    },
  ];

  const relatedProducts = [
    { id: 1, name: "Similar Medicine A", price: "$19.99", rating: 4.1 },
    { id: 2, name: "Alternative Treatment B", price: "$22.99", rating: 4.3 },
    { id: 3, name: "Complementary Product C", price: "$16.99", rating: 4.0 },
    { id: 4, name: "Enhanced Formula D", price: "$28.99", rating: 4.4 },
  ];

  const tabs = [
    { id: "details", label: "Details", shortLabel: "Details", icon: Info },
    { id: "usage", label: "How It Works", shortLabel: "Usage", icon: Pill },
    {
      id: "dosage",
      label: "Dosage & Storage",
      shortLabel: "Dosage",
      icon: Clock,
    },
    {
      id: "safety",
      label: "Safety & Interactions",
      shortLabel: "Safety",
      icon: Shield,
    },
    {
      id: "comparison",
      label: "Price Comparison",
      shortLabel: "Price",
      icon: DollarSign,
    },
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      if (!product) {
        try {
          const res = await fetch(
            `https://derxo-backend-working.onrender.com/api/medicines/${id}`
          );
          if (!res.ok) throw new Error("Failed to fetch product");
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProduct();
  }, [id, product]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin h-12 w-12 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full mb-6"></div>
            <div className="absolute inset-0 h-12 w-12 mx-auto border-4 border-transparent border-t-blue-300 rounded-full animate-ping"></div>
          </div>
          <p className="text-lg text-slate-600 font-medium">
            Loading product details...
          </p>
        </div>
      </div>
    );

  if (error || !product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white px-4">
        <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-red-100 max-w-md w-full">
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-2">Oops!</h2>
          <p className="text-red-500">{error || "Product not found."}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-white order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/30 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-4 backdrop-blur-sm">
                <Package className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Medicine Details</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                {product.metaDescription}
              </p>

              {/* Rating and Reviews */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        i < Math.floor(productDetails.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-blue-300"
                      }`}
                    />
                  ))}
                  <span className="text-white font-semibold ml-2 text-sm sm:text-base">
                    {productDetails.rating}
                  </span>
                </div>
                <span className="text-blue-200 text-sm">
                  ({productDetails.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {productDetails.price}
                </span>
                <span className="text-blue-200 line-through text-lg sm:text-xl">
                  {productDetails.originalPrice}
                </span>
                <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {productDetails.discount}
                </span>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact" className="flex-1 sm:flex-none">
                  <Button
                    disabled={!product.stockAvailable}
                    className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base"
                  >
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Order Now
                  </Button>
                </Link>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none bg-white text-blue-600 hover:bg-blue-50 font-semibold px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-base"
                  >
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Wishlist</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-4 py-3 rounded-xl"
                  >
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Image Placeholder */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-sm lg:max-w-md">
                <div className="bg-white rounded-xl p-6 sm:p-8 text-center">
                  <Pill className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-slate-600 text-sm sm:text-base">
                    Product Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-12 -mt-4 sm:-mt-8 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar - Quick Info - Mobile: Bottom, Desktop: Left */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden lg:sticky lg:top-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    Quick Info
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Essential Details
                  </p>
                </div>

                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      Type
                    </span>
                    <span className="text-slate-800 font-semibold text-sm sm:text-base">
                      {product.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      Strength
                    </span>
                    <span className="text-slate-800 font-semibold text-sm sm:text-base">
                      {product.strength}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      Stock
                    </span>
                    <span
                      className={`font-semibold px-2 py-1 rounded text-xs sm:text-sm ${
                        product.stockAvailable
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stockAvailable ? "Available" : "Out of Stock"}
                    </span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t p-4 sm:p-6">
                  <h4 className="font-bold text-slate-800 mb-4 text-sm sm:text-base">
                    Contact Us
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 break-all">
                        hello@derxo.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        123 Anywhere St., Any City
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Tab Navigation */}
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-6 sm:mb-8">
                {/* Desktop Tab Navigation */}
                <div className="border-b border-slate-200 hidden sm:block">
                  <nav className="flex space-x-4 lg:space-x-8 px-4 sm:px-6 overflow-x-auto">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                            activeTab === tab.id
                              ? "border-blue-600 text-blue-600"
                              : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="hidden md:inline">{tab.label}</span>
                          <span className="md:hidden">{tab.shortLabel}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Mobile Tab Navigation */}
                <div className="sm:hidden border-b border-slate-200">
                  <div className="relative">
                    <button
                      onClick={() => setShowMobileNav(!showMobileNav)}
                      className="w-full flex items-center justify-between p-4 font-medium text-slate-700"
                    >
                      <div className="flex items-center gap-2">
                        {tabs.find((tab) => tab.id === activeTab)?.icon &&
                          React.createElement(
                            tabs.find((tab) => tab.id === activeTab).icon,
                            { className: "h-4 w-4" }
                          )}
                        <span>
                          {tabs.find((tab) => tab.id === activeTab)?.shortLabel}
                        </span>
                      </div>
                      {showMobileNav ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>

                    {showMobileNav && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-b-lg shadow-lg z-20">
                        {tabs.map((tab) => {
                          const Icon = tab.icon;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => {
                                setActiveTab(tab.id);
                                setShowMobileNav(false);
                              }}
                              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                                activeTab === tab.id
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              <span>{tab.shortLabel}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {activeTab === "details" && (
                    <div className="space-y-6 sm:space-y-8">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <Info className="text-blue-600 h-5 w-5 sm:h-6 sm:w-6" />
                          Detailed Description
                        </h3>
                        <div
                          className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base"
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                            Natural Sources
                          </h4>
                          <p className="text-slate-700 text-xs sm:text-sm">
                            {productDetails.naturalSources}
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 sm:p-6 rounded-xl">
                          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                            RDA Information
                          </h4>
                          <p className="text-slate-700 text-xs sm:text-sm">
                            {productDetails.rda}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "usage" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                          How It Works
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                          {productDetails.howItWorks}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
                          Directions for Use
                        </h4>
                        <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                          <p className="text-slate-700 text-sm sm:text-base">
                            {productDetails.directions}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "dosage" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                          Dosage Information
                        </h3>
                        <div className="bg-slate-50 p-4 sm:p-6 rounded-xl">
                          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                            {productDetails.dosage}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
                          Storage Instructions
                        </h4>
                        <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                          <p className="text-slate-700 text-sm sm:text-base">
                            {productDetails.storage}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "safety" && (
                    <div className="space-y-6 sm:space-y-8">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                          Medicine Interactions
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="bg-red-50 p-4 sm:p-6 rounded-xl">
                            <h5 className="font-semibold text-red-800 mb-3 text-sm sm:text-base">
                              Avoid with Medicines:
                            </h5>
                            <ul className="space-y-2">
                              {productDetails.interactions.medicines.map(
                                (med, index) => (
                                  <li
                                    key={index}
                                    className="text-red-700 text-xs sm:text-sm flex items-center gap-2"
                                  >
                                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                                    {med}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="bg-orange-50 p-4 sm:p-6 rounded-xl">
                            <h5 className="font-semibold text-orange-800 mb-3 text-sm sm:text-base">
                              Avoid with Foods:
                            </h5>
                            <ul className="space-y-2">
                              {productDetails.interactions.food.map(
                                (food, index) => (
                                  <li
                                    key={index}
                                    className="text-orange-700 text-xs sm:text-sm flex items-center gap-2"
                                  >
                                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                                    {food}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                          Possible Side Effects
                        </h4>
                        <div className="bg-yellow-50 p-4 sm:p-6 rounded-xl">
                          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                            {productDetails.sideEffects.map((effect, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-yellow-800"
                              >
                                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                                <span className="text-xs sm:text-sm">
                                  {effect}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "comparison" && (
                    <div className="space-y-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                        Price Comparison
                      </h3>

                      {/* Desktop Table */}
                      <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full bg-white rounded-lg overflow-hidden">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-4 lg:px-6 py-4 text-left font-semibold text-slate-800 text-sm lg:text-base">
                                Brand
                              </th>
                              <th className="px-4 lg:px-6 py-4 text-left font-semibold text-slate-800 text-sm lg:text-base">
                                Price
                              </th>
                              <th className="px-4 lg:px-6 py-4 text-left font-semibold text-slate-800 text-sm lg:text-base">
                                Rating
                              </th>
                              <th className="px-4 lg:px-6 py-4 text-left font-semibold text-slate-800 text-sm lg:text-base">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-slate-100 bg-blue-50">
                              <td className="px-4 lg:px-6 py-4 font-semibold text-blue-600 text-sm lg:text-base">
                                {product.name}
                              </td>
                              <td className="px-4 lg:px-6 py-4 font-bold text-green-600 text-sm lg:text-base">
                                {productDetails.price}
                              </td>
                              <td className="px-4 lg:px-6 py-4">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="font-semibold text-sm lg:text-base">
                                    {productDetails.rating}
                                  </span>
                                </div>
                              </td>
                              <td className="px-4 lg:px-6 py-4">
                                <span className="bg-blue-100 text-blue-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold">
                                  Best Value
                                </span>
                              </td>
                            </tr>
                            {productDetails.competitors.map(
                              (competitor, index) => (
                                <tr
                                  key={index}
                                  className="border-b border-slate-100"
                                >
                                  <td className="px-4 lg:px-6 py-4 text-slate-700 text-sm lg:text-base">
                                    {competitor.name}
                                  </td>
                                  <td className="px-4 lg:px-6 py-4 font-semibold text-slate-800 text-sm lg:text-base">
                                    {competitor.price}
                                  </td>
                                  <td className="px-4 lg:px-6 py-4">
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                      <span className="text-sm lg:text-base">
                                        {competitor.rating}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="px-4 lg:px-6 py-4">
                                    <span className="text-slate-500 text-xs lg:text-sm">
                                      Alternative
                                    </span>
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Mobile Cards */}
                      <div className="sm:hidden space-y-4">
                        {/* Current Product */}
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-semibold text-blue-600 text-sm">
                              {product.name}
                            </h4>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                              Best Value
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-green-600 text-lg">
                              {productDetails.price}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="font-semibold text-sm">
                                {productDetails.rating}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Competitors */}
                        {productDetails.competitors.map((competitor, index) => (
                          <div
                            key={index}
                            className="bg-white border border-slate-200 rounded-xl p-4"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-medium text-slate-700 text-sm">
                                {competitor.name}
                              </h4>
                              <span className="text-slate-500 text-xs">
                                Alternative
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-slate-800 text-lg">
                                {competitor.price}
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-sm">
                                  {competitor.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-6 sm:mb-8">
                <div className="p-4 sm:p-6 border-b border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 rounded-lg"
                      >
                        <button
                          className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                          onClick={() =>
                            setExpandedFAQ(expandedFAQ === index ? null : index)
                          }
                        >
                          <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4">
                            {faq.question}
                          </span>
                          {expandedFAQ === index ? (
                            <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                          )}
                        </button>
                        {expandedFAQ === index && (
                          <div className="px-4 sm:px-6 pb-4">
                            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Products */}
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100">
                <div className="p-4 sm:p-6 border-b border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                    Buy Our Other Medicines
                  </h3>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {relatedProducts.map((relatedProduct) => (
                      <div
                        key={relatedProduct.id}
                        className="bg-slate-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="bg-white rounded-lg p-4 mb-3 text-center">
                          <Pill className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto" />
                        </div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">
                          {relatedProduct.name}
                        </h4>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-bold text-blue-600 text-sm sm:text-base">
                            {relatedProduct.price}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                            <span className="text-xs sm:text-sm text-slate-600">
                              {relatedProduct.rating}
                            </span>
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-3">
                          View Details
                        </Button>
                      </div>
                    ))}
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

export default ProductPage;
