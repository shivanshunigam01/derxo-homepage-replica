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
    bgColor: "bg-blue-100",
    shopBgColor: "bg-gray-200",
    brandBgColor: "bg-red-100",
    savingsBgColor: "bg-green-100",
  },
  {
    category: "ED Meds",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-50",
    shopBgColor: "bg-gray-100",
    brandBgColor: "bg-red-50",
    savingsBgColor: "bg-green-50",
  },
  {
    category: "Mental Health",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-100",
    shopBgColor: "bg-gray-200",
    brandBgColor: "bg-red-100",
    savingsBgColor: "bg-green-100",
  },
  {
    category: "Acid Reflux",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-50",
    shopBgColor: "bg-gray-100",
    brandBgColor: "bg-red-50",
    savingsBgColor: "bg-green-50",
  },
  {
    category: "Cancer Meds",
    derxoPrice: "$2",
    shopPrice: "$20",
    brandPrice: "$20",
    savings: "Save 80%",
    bgColor: "bg-blue-100",
    shopBgColor: "bg-gray-200",
    brandBgColor: "bg-red-100",
    savingsBgColor: "bg-green-100",
  },
];

const PriceComparisonSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-25 to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
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
              <div className="bg-slate-100 border border-slate-200 rounded-t-2xl h-12 md:h-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-gray-50"></div>
                <div className="relative z-10 flex items-center space-x-1 md:space-x-2">
                  <div className="w-4 h-4 md:w-8 md:h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <img
                      src="/lovable-uploads/73995caa-6ca7-43f2-ba48-8f29d96cc2fa.png"
                      alt="Derxo"
                      className="h-10 w-50"
                    />
                  </div>
                  <span className="font-bold text-gray-700 text-xs md:text-base">
                    DERXO
                  </span>
                </div>
              </div>
            </div>
            {/* Shop Price Header */}
            <div className="relative">
              <div className="bg-gray-200 border border-gray-300 rounded-t-2xl h-12 md:h-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100"></div>
                <span className="relative z-10 font-bold text-gray-700 text-xs md:text-lg">
                  Shop Price
                </span>
              </div>
            </div>
            {/* Brand Price Header */}
            <div className="relative">
              <div className="bg-red-100 border border-red-200 rounded-t-2xl h-12 md:h-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50"></div>
                <span className="relative z-10 font-bold text-gray-700 text-xs md:text-lg">
                  Brand Price
                </span>
              </div>
            </div>
            {/* Savings Header with icon */}
            <div className="h-12 md:h-16 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="text-sm md:text-xl">💰</div>
                <span className="font-bold text-green-600 text-xs md:text-sm -rotate-6">
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
                <div className="bg-slate-50 border border-slate-200 rounded-l-xl h-14 md:h-20 flex items-center justify-center group-hover:bg-slate-100 transition-colors duration-300">
                  <span className="font-bold text-gray-700 text-xs md:text-lg px-1 md:px-4 text-center leading-tight">
                    {item.category}
                  </span>
                </div>

                {/* DERXO Price */}
                <div
                  className={`${item.bgColor} border border-blue-200 h-14 md:h-20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-90"></div>
                  <span className="relative z-10 font-bold text-xs md:text-xl text-center leading-tight text-blue-700">
                    Starts {item.derxoPrice}
                  </span>
                </div>

                {/* Shop Price */}
                <div
                  className={`${item.shopBgColor} border border-gray-300 h-14 md:h-20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 opacity-90"></div>
                  <span className="relative z-10 font-bold text-xs md:text-xl text-center leading-tight text-gray-700">
                    Starts {item.shopPrice}
                  </span>
                </div>

                {/* Brand Price */}
                <div
                  className={`${item.brandBgColor} border border-red-200 h-14 md:h-20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 opacity-90"></div>
                  <span className="relative z-10 font-bold text-xs md:text-xl text-center leading-tight text-red-700">
                    Starts {item.brandPrice}
                  </span>
                </div>

                {/* SAVE Cell */}
                <div className="bg-green-100 border border-green-200 h-14 md:h-20 flex items-center justify-center font-bold rounded-r-xl group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-1">
                    <div className="text-sm md:text-xl">💰</div>
                    <span className="text-xs md:text-base text-green-700">
                      SAVE
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparisonSection;
