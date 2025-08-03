import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Enhanced Category Icon Component with animations
const CategoryIcon = ({ type, isSelected }) => {
  const getIcon = () => {
    switch (type) {
      case "blood-pressure":
        return (
          <div className="w-16 h-16 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            >
              <defs>
                <linearGradient
                  id="heartGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g className={isSelected ? "animate-pulse" : ""}>
                <path
                  d="M50,85 C50,85 20,65 20,45 C20,35 30,25 40,25 C45,25 50,30 50,30 C50,30 55,25 60,25 C70,25 80,35 80,45 C80,65 50,85 50,85 Z"
                  fill="url(#heartGradient)"
                  filter={isSelected ? "url(#glow)" : ""}
                  className="transition-all duration-300"
                />
                <path
                  d="M15,50 L25,50 L30,40 L35,60 L40,30 L45,70 L50,45 L55,55 L60,45 L65,50 L85,50"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  className="animate-pulse"
                />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping"></div>
            )}
          </div>
        );
      case "cholesterol":
        return (
          <div className="w-16 h-16 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            >
              <defs>
                <linearGradient
                  id="cholesterolGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <radialGradient id="cholesterolRadial">
                  <stop offset="0%" stopColor="#fed7aa" />
                  <stop offset="100%" stopColor="#f97316" />
                </radialGradient>
              </defs>
              <g className={isSelected ? "animate-bounce" : ""}>
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="url(#cholesterolRadial)"
                  opacity="0.3"
                />
                <path
                  d="M50,75 C50,75 25,60 25,45 C25,35 35,25 45,25 C47,25 50,28 50,28 C50,28 53,25 55,25 C65,25 75,35 75,45 C75,60 50,75 50,75 Z"
                  fill="url(#cholesterolGradient)"
                  className="transition-all duration-300"
                />
                <circle cx="42" cy="45" r="3" fill="#fed7aa" opacity="0.8" />
                <circle cx="58" cy="45" r="3" fill="#fed7aa" opacity="0.8" />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-pulse"></div>
            )}
          </div>
        );
      case "diabetes":
        return (
          <div className="w-16 h-16 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            >
              <defs>
                <linearGradient
                  id="diabetesGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
                <filter id="dropShadow">
                  <feDropShadow
                    dx="2"
                    dy="2"
                    stdDeviation="2"
                    floodColor="#000"
                    floodOpacity="0.3"
                  />
                </filter>
              </defs>
              <g className={isSelected ? "animate-bounce" : ""}>
                <path
                  d="M50,80 C35,80 25,65 25,50 C25,35 50,15 50,15 C50,15 75,35 75,50 C75,65 65,80 50,80 Z"
                  fill="url(#diabetesGradient)"
                  filter="url(#dropShadow)"
                  className="transition-all duration-300"
                />
                <circle cx="50" cy="55" r="8" fill="white" opacity="0.9" />
                <text
                  x="50"
                  y="60"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#3b82f6"
                  fontWeight="bold"
                >
                  +
                </text>
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
            )}
          </div>
        );
      case "mental-health":
        return (
          <div className="w-16 h-16 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            >
              <defs>
                <linearGradient
                  id="brainGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient
                  id="cloudGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>
              <g className={isSelected ? "animate-pulse" : ""}>
                <ellipse
                  cx="50"
                  cy="55"
                  rx="25"
                  ry="30"
                  fill="url(#brainGradient)"
                />
                <path
                  d="M35,40 Q30,35 35,30 Q40,25 45,30 Q50,25 55,30 Q60,25 65,30 Q70,35 65,40"
                  fill="url(#cloudGradient)"
                  className="animate-bounce"
                />
                <circle cx="40" cy="45" r="2" fill="white" opacity="0.8" />
                <circle cx="60" cy="45" r="2" fill="white" opacity="0.8" />
                <circle cx="45" cy="55" r="1.5" fill="#22d3ee" opacity="0.6" />
                <circle cx="55" cy="55" r="1.5" fill="#22d3ee" opacity="0.6" />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
            )}
          </div>
        );
      case "pain-inflammation":
        return (
          <div className="w-16 h-16 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            >
              <defs>
                <linearGradient
                  id="painGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <radialGradient id="bodyGradient">
                  <stop offset="0%" stopColor="#9ca3af" />
                  <stop offset="100%" stopColor="#6b7280" />
                </radialGradient>
              </defs>
              <g className={isSelected ? "animate-bounce" : ""}>
                <ellipse
                  cx="50"
                  cy="60"
                  rx="22"
                  ry="35"
                  fill="url(#bodyGradient)"
                  opacity="0.4"
                />
                <path
                  d="M40,30 L35,45 L42,45 L38,65 L50,45 L43,45 L48,30 Z"
                  fill="url(#painGradient)"
                  className="animate-pulse"
                />
                <circle
                  cx="45"
                  cy="35"
                  r="2"
                  fill="#34d399"
                  opacity="0.7"
                  className="animate-ping"
                />
                <circle cx="42" cy="50" r="1.5" fill="#34d399" opacity="0.7" />
                <circle cx="48" cy="45" r="1.5" fill="#34d399" opacity="0.7" />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
            )}
          </div>
        );
      case "acid-reflux":
        return (
          <div className="w-16 h-16 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            >
              <defs>
                <linearGradient
                  id="stomachGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="acidGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
              <g className={isSelected ? "animate-pulse" : ""}>
                <path
                  d="M50,25 C35,25 25,35 25,50 C25,65 30,75 40,80 C45,82 55,82 60,80 C70,75 75,65 75,50 C75,35 65,25 50,25 Z"
                  fill="url(#stomachGradient)"
                />
                <path
                  d="M45,45 Q50,40 55,45 Q50,50 45,45"
                  fill="url(#acidGradient)"
                  className="animate-bounce"
                />
                <path
                  d="M42,55 Q47,50 52,55"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <circle cx="48" cy="38" r="1.5" fill="#fed7aa" opacity="0.8" />
                <circle cx="52" cy="38" r="1.5" fill="#fed7aa" opacity="0.8" />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-20 animate-pulse"></div>
            )}
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full animate-pulse"></div>
          </div>
        );
    }
  };

  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      {getIcon()}
    </div>
  );
};

// Medicine Card Component
const MedicineCard = ({ medicine, index }) => {
  const originalPrice = (Math.random() * 50 + 30).toFixed(2);
  const discountedPrice = (
    Number(originalPrice) *
    (0.3 + Math.random() * 0.4)
  ).toFixed(2);

  return (
    <div className="bg-white border-2 border-gray-200 hover:shadow-lg transition-all duration-300 w-full rounded-xl px-4 py-6 min-h-[240px] flex flex-col justify-between hover:transform hover:scale-105">
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

      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-sm py-2.5 px-4 rounded-md transition-all duration-300 hover:shadow-md hover:transform hover:scale-105 mt-auto">
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
                className={`flex flex-col items-center justify-center gap-3 px-4 py-6 rounded-xl border-2 transition-all duration-300 w-full min-h-[140px] hover:shadow-xl hover:transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? `${category.bgColor} ${category.borderColor} shadow-lg transform scale-105 border-3`
                    : `bg-white border-gray-200 ${category.hoverBorderColor} hover:shadow-md`
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
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              <p className="mt-4 text-purple-500 font-medium text-sm">
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
