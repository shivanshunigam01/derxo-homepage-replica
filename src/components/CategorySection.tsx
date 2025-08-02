import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Category Icon Component
const CategoryIcon = ({ type, isSelected }) => {
  const getIcon = () => {
    switch (type) {
      case "blood-pressure":
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <path
                d="M50,85 C50,85 20,65 20,45 C20,35 30,25 40,25 C45,25 50,30 50,30 C50,30 55,25 60,25 C70,25 80,35 80,45 C80,65 50,85 50,85 Z"
                fill="#ef4444"
              />
              <path
                d="M15,50 L25,50 L30,40 L35,60 L40,30 L45,70 L50,45 L55,55 L60,45 L65,50 L85,50"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        );
      case "cholesterol":
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <path
                d="M50,75 C50,75 25,60 25,45 C25,35 35,25 45,25 C47,25 50,28 50,28 C50,28 53,25 55,25 C65,25 75,35 75,45 C75,60 50,75 50,75 Z"
                fill="#f97316"
              />
            </svg>
          </div>
        );
      case "diabetes":
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <path
                d="M50,80 C35,80 25,65 25,50 C25,35 50,15 50,15 C50,15 75,35 75,50 C75,65 65,80 50,80 Z"
                fill="#ef4444"
              />
            </svg>
          </div>
        );
      case "mental-health":
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <ellipse cx="50" cy="55" rx="25" ry="30" fill="#3b82f6" />
              <path
                d="M35,40 Q30,35 35,30 Q40,25 45,30 Q50,25 55,30 Q60,25 65,30 Q70,35 65,40"
                fill="#22d3ee"
              />
            </svg>
          </div>
        );
      case "pain-inflammation":
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <ellipse
                cx="50"
                cy="60"
                rx="20"
                ry="35"
                fill="#6b7280"
                opacity="0.3"
              />
              <path
                d="M40,30 L35,45 L42,45 L38,65 L50,45 L43,45 L48,30 Z"
                fill="#10b981"
              />
            </svg>
          </div>
        );
      case "acid-reflux":
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <path
                d="M50,25 C35,25 25,35 25,50 C25,65 30,75 40,80 C45,82 55,82 60,80 C70,75 75,65 75,50 C75,35 65,25 50,25 Z"
                fill="#fbbf24"
              />
            </svg>
          </div>
        );
      default:
        return <div className="w-12 h-12 bg-gray-200 rounded-full"></div>;
    }
  };

  return getIcon();
};

// Medicine Card Component
const MedicineCard = ({ medicine, index }) => {
  const originalPrice = (Math.random() * 50 + 30).toFixed(2);
  const discountedPrice = (
    Number(originalPrice) *
    (0.3 + Math.random() * 0.4)
  ).toFixed(2);

  return (
    <div className="bg-white border-2 border-gray-200 hover:shadow-lg transition-all duration-300 w-full rounded-xl px-4 py-6 min-h-[240px] flex flex-col justify-between">
      <div className="text-center flex-1">
        <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight min-h-[40px] flex items-center justify-center">
          {medicine.name || `Medicine ${index + 1}`}
        </h3>
        <p className="text-xs text-gray-600 mb-4 min-h-[32px] line-clamp-2">
          {medicine.description ||
            medicine.generic ||
            `Generic, ${Math.floor(Math.random() * 90 + 10)} mg, ${Math.floor(
              Math.random() * 90 + 10
            )} Tablets`}
        </p>

        <div className="mb-4">
          <div className="text-xs text-gray-500 line-through mb-1">
            ${originalPrice}
          </div>
          <div className="text-xl font-bold text-gray-900 mb-1">
            ${discountedPrice}
          </div>
          <div className="text-xs text-gray-600">Price as low as</div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-sm py-2.5 px-4 rounded-md transition-all duration-300 hover:shadow-md mt-auto">
        GET COUPON
      </button>
    </div>
  );
};

const categories = [
  {
    name: "Blood Pressure",
    icon: "blood-pressure",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
    hoverBorderColor: "hover:border-red-400",
    api: "https://derxo-backend-working.onrender.com/api/medicines/67eef0080a8f6e6b9fe8484b",
  },
  {
    name: "High/Low Cholesterol",
    icon: "cholesterol",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
    hoverBorderColor: "hover:border-orange-400",
    api: "https://derxo-backend-working.onrender.com/api/medicines/67eef0080a8f6e6b9fe8484c",
  },
  {
    name: "High/Low Diabetes",
    icon: "diabetes",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
    hoverBorderColor: "hover:border-red-400",
    api: "https://derxo-backend-working.onrender.com/api/medicines/67eef0080a8f6e6b9fe8483c",
  },
  {
    name: "Mental Health",
    icon: "mental-health",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    hoverBorderColor: "hover:border-blue-400",
    api: "https://derxo-backend-working.onrender.com/api/medicines/67eef0080a8f6e6b9fe8485c",
  },
  {
    name: "Pain and Inflammation",
    icon: "pain-inflammation",
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
    hoverBorderColor: "hover:border-green-400",
    api: "https://derxo-backend-working.onrender.com/api/medicines/67eef0080a8f6e6b9fe84866",
  },
  {
    name: "Acid Reflux",
    icon: "acid-reflux",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
    hoverBorderColor: "hover:border-yellow-400",
    api: "https://derxo-backend-working.onrender.com/api/medicines/67eef0080a8f6e6b9fe84821",
  },
];

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [medicineData, setMedicineData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const random = categories[Math.floor(Math.random() * categories.length)];
    fetchMedicines(random);
  }, []);

  const getRandomItems = (array, count = 6) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const fetchMedicines = async (category) => {
    setSelectedCategory(category.name);
    setLoading(true);
    try {
      const response = await fetch(category.api);
      const data = await response.json();
      const allMedicines = data || [];
      const randomMedicines = getRandomItems(allMedicines, 6);
      setMedicineData(randomMedicines);
    } catch (err) {
      console.error(err);
      setMedicineData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Search by medical conditions
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => fetchMedicines(category)}
                className={`flex flex-col items-center justify-center gap-3 px-4 py-6 rounded-xl border-2 transition-all duration-300 w-full min-h-[120px] ${
                  selectedCategory === category.name
                    ? `${category.bgColor} ${category.borderColor} shadow-md transform scale-105`
                    : `bg-white border-gray-200 ${category.hoverBorderColor} hover:shadow-md hover:transform hover:scale-102`
                }`}
              >
                <CategoryIcon
                  type={category.icon}
                  isSelected={selectedCategory === category.name}
                />
                <span className="font-semibold text-gray-800 text-sm text-center leading-tight">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Medicine Cards Grid */}
        <div>
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              <p className="mt-2 text-purple-500 font-medium text-sm">
                Loading medicines...
              </p>
            </div>
          ) : medicineData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {medicineData.map((medicine, index) => (
                <MedicineCard key={index} medicine={medicine} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">
                No medicines available for this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
