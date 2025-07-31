import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const priceData = [
  {
    category: "Blood Pressure",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-500",
    shopBgColor: "bg-green-500",
    brandBgColor: "bg-orange-500",
    savingsBgColor: "bg-red-500",
  },
  {
    category: "ED Meds",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-400",
    shopBgColor: "bg-green-400",
    brandBgColor: "bg-orange-400",
    savingsBgColor: "bg-red-400",
  },
  {
    category: "Mental Health",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-500",
    shopBgColor: "bg-green-500",
    brandBgColor: "bg-orange-500",
    savingsBgColor: "bg-red-500",
  },
  {
    category: "Acid Reflux",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-400",
    shopBgColor: "bg-green-400",
    brandBgColor: "bg-orange-400",
    savingsBgColor: "bg-red-400",
  },
  {
    category: "Cancer Meds",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-500",
    shopBgColor: "bg-green-500",
    brandBgColor: "bg-orange-500",
    savingsBgColor: "bg-red-500",
  },
];

const PriceComparisonSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Price Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare prices and save up to 90% on your medications with our
            transparent pricing
          </p>
        </div>

        {/* Table-style comparison */}
        <div className="max-w-6xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-5 gap-1 md:gap-2 mb-4">
            <div className="h-12 md:h-16"></div>{" "}
            {/* Empty space for category column */}
            {/* DERXO Header */}
            <div className="relative">
              <div className="bg-gray-300 rounded-t-2xl h-12 md:h-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300"></div>
                <div className="relative z-10 flex items-center space-x-1 md:space-x-2">
                  <div className="w-4 h-4 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <img
                      src="/lovable-uploads/73995caa-6ca7-43f2-ba48-8f29d96cc2fa.png"
                      alt="Derxo"
                      className="h-10 w-50"
                    />
                  </div>
                  <span className="font-bold text-gray-800 text-xs md:text-base">
                    DERXO
                  </span>
                </div>
              </div>
            </div>
            {/* Shop Price Header */}
            <div className="relative">
              <div className="bg-green-500 rounded-t-2xl h-12 md:h-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400"></div>
                <span className="relative z-10 font-bold text-white text-xs md:text-lg">
                  Shop Price
                </span>
              </div>
            </div>
            {/* Brand Price Header */}
            <div className="relative">
              <div className="bg-orange-500 rounded-t-2xl h-12 md:h-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400"></div>
                <span className="relative z-10 font-bold text-white text-xs md:text-lg">
                  Brand Price
                </span>
              </div>
            </div>
            {/* Savings Header with icon */}
            <div className="h-12 md:h-16 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="text-sm md:text-xl">💰</div>
                <span className="font-bold text-blue-600 text-xs md:text-sm -rotate-6">
                  SAVE
                </span>
              </div>
            </div>
          </div>

          {/* Data Rows */}
          <div className="space-y-1 md:space-y-2">
            {priceData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-1 md:gap-2 group"
              >
                {/* Category */}
                <div className="bg-gray-100 rounded-l-xl h-14 md:h-20 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <span className="font-bold text-gray-800 text-xs md:text-lg px-1 md:px-4 text-center leading-tight">
                    {item.category}
                  </span>
                </div>

                {/* DERXO Price */}
                <div
                  className={`${item.bgColor} h-14 md:h-20 flex items-center justify-center text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
                  <span className="relative z-10 font-bold text-xs md:text-xl text-center leading-tight">
                    Starts {item.derxoPrice}
                  </span>
                </div>

                {/* Shop Price */}
                <div
                  className={`${item.shopBgColor} h-14 md:h-20 flex items-center justify-center text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-90"></div>
                  <span className="relative z-10 font-bold text-xs md:text-xl text-center leading-tight">
                    Starts {item.shopPrice}
                  </span>
                </div>

                {/* Brand Price */}
                <div
                  className={`${item.brandBgColor} h-14 md:h-20 flex items-center justify-center text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>
                  <span className="relative z-10 font-bold text-xs md:text-xl text-center leading-tight">
                    Starts {item.brandPrice}
                  </span>
                </div>

                {/* SAVE Cell */}
                <div className="bg-red-500 h-14 md:h-20 flex items-center justify-center text-white font-bold rounded-r-xl group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-1">
                    <div className="text-sm md:text-xl">💰</div>
                    <span className="text-xs md:text-base">SAVE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100 hover:border-blue-200">
            <span className="text-base md:text-lg font-semibold text-gray-800">
              Start saving today with DERXO
            </span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <span className="text-white font-bold text-sm md:text-base">
                →
              </span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 md:mt-8 text-center px-4">
          <p className="text-gray-500 text-xs md:text-sm">
            * Prices shown are estimated. Actual prices may vary based on
            location and insurance coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceComparisonSection;
