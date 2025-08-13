import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Enhanced Category Icon Component with animations
const CategoryIcon = ({ type, isSelected }) => {
  const getIcon = () => {
    switch (type) {
      case "blood-pressure":
        return (
          <div className="w-20 h-20 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 transition-transform duration-300 hover:scale-110"
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
          <div className="w-20 h-20 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 transition-transform duration-300 hover:scale-110"
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
                  r="35"
                  fill="url(#cholesterolRadial)"
                  opacity="0.3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="url(#cholesterolGradient)"
                  className="transition-all duration-300"
                />
                <circle cx="42" cy="45" r="4" fill="#fed7aa" opacity="0.8" />
                <circle cx="58" cy="45" r="4" fill="#fed7aa" opacity="0.8" />
                <circle cx="50" cy="60" r="3" fill="#fed7aa" opacity="0.6" />
                <text
                  x="50"
                  y="58"
                  textAnchor="middle"
                  fontSize="12"
                  fill="white"
                  fontWeight="bold"
                >
                  C
                </text>
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-pulse"></div>
            )}
          </div>
        );
      case "diabetes":
        return (
          <div className="w-20 h-20 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 transition-transform duration-300 hover:scale-110"
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
                <circle cx="50" cy="55" r="12" fill="white" opacity="0.9" />
                <text
                  x="50"
                  y="62"
                  textAnchor="middle"
                  fontSize="14"
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
          <div className="w-20 h-20 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 transition-transform duration-300 hover:scale-110"
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
                <path
                  d="M50,75 C30,75 20,60 20,45 C20,35 25,25 35,20 C40,18 45,20 50,25 C55,20 60,18 65,20 C75,25 80,35 80,45 C80,60 70,75 50,75 Z"
                  fill="url(#brainGradient)"
                />
                <path
                  d="M35,35 Q30,30 35,25 Q40,20 45,25 Q50,20 55,25 Q60,20 65,25 Q70,30 65,35"
                  fill="url(#cloudGradient)"
                  className="animate-bounce"
                />
                <circle cx="40" cy="45" r="3" fill="white" opacity="0.8" />
                <circle cx="60" cy="45" r="3" fill="white" opacity="0.8" />
                <circle cx="45" cy="55" r="2" fill="#22d3ee" opacity="0.6" />
                <circle cx="55" cy="55" r="2" fill="#22d3ee" opacity="0.6" />
                <circle cx="50" cy="62" r="2" fill="#22d3ee" opacity="0.6" />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
            )}
          </div>
        );
      case "pain-inflammation":
        return (
          <div className="w-20 h-20 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 transition-transform duration-300 hover:scale-110"
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
                  cy="55"
                  rx="25"
                  ry="35"
                  fill="url(#bodyGradient)"
                  opacity="0.4"
                />
                <path
                  d="M40,25 L35,40 L42,40 L38,60 L50,40 L43,40 L48,25 Z"
                  fill="url(#painGradient)"
                  className="animate-pulse"
                />
                <path
                  d="M60,30 L55,45 L62,45 L58,65 L70,45 L63,45 L68,30 Z"
                  fill="url(#painGradient)"
                  className="animate-pulse"
                  opacity="0.7"
                />
                <circle
                  cx="45"
                  cy="30"
                  r="2"
                  fill="#34d399"
                  opacity="0.7"
                  className="animate-ping"
                />
                <circle cx="42" cy="50" r="1.5" fill="#34d399" opacity="0.7" />
                <circle cx="58" cy="45" r="1.5" fill="#34d399" opacity="0.7" />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
            )}
          </div>
        );
      case "acid-reflux":
        return (
          <div className="w-20 h-20 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 transition-transform duration-300 hover:scale-110"
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
                  d="M50,20 C35,20 25,30 25,45 C25,60 30,70 40,75 C45,77 55,77 60,75 C70,70 75,60 75,45 C75,30 65,20 50,20 Z"
                  fill="url(#stomachGradient)"
                />
                <path
                  d="M45,40 Q50,35 55,40 Q50,45 45,40"
                  fill="url(#acidGradient)"
                  className="animate-bounce"
                />
                <path
                  d="M42,50 Q47,45 52,50"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M48,55 Q53,50 58,55"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  fill="none"
                  className="animate-pulse"
                  opacity="0.7"
                />
                <circle cx="48" cy="33" r="2" fill="#fed7aa" opacity="0.8" />
                <circle cx="52" cy="33" r="2" fill="#fed7aa" opacity="0.8" />
              </g>
            </svg>
            {isSelected && (
              <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-20 animate-pulse"></div>
            )}
          </div>
        );
      default:
        return (
          <div className="w-20 h-20 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full animate-pulse"></div>
          </div>
        );
    }
  };

  return (
    <div className="transform transition-all duration-300 hover:scale-105 flex items-center justify-center">
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
    <div className="bg-white border-2 border-gray-200 hover:shadow-lg transition-all duration-300 w-full rounded-xl px-4 py-4  flex flex-col justify-between hover:transform hover:scale-105">
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

      <button
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-sm py-2.5 px-4 rounded-md transition-all duration-300 hover:shadow-md hover:transform hover:scale-105 mt-auto"
        onClick={() =>
          window.open(
            "https:/api.whatsapp.com/send/?phone=14074429820&text=Hi%21+I'm+interested+in+your+services.+Can+you+help+me%3F&type=phone_number&app_absent=0",
            "_blank"
          )
        }
      >
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
    api: "https://choir-anthony-warning-functioning.trycloudflare.com/api/medicines/67eef0080a8f6e6b9fe8484b",
  },
  {
    name: "High/Low Cholesterol",
    icon: "cholesterol",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
    hoverBorderColor: "hover:border-orange-400",
    api: "https://choir-anthony-warning-functioning.trycloudflare.com/api/medicines/67eef0080a8f6e6b9fe8484c",
  },
  {
    name: "High/Low Diabetes",
    icon: "diabetes",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
    hoverBorderColor: "hover:border-red-400",
    api: "https://choir-anthony-warning-functioning.trycloudflare.com/api/medicines/67eef0080a8f6e6b9fe8483c",
  },
  {
    name: "Mental Health",
    icon: "mental-health",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    hoverBorderColor: "hover:border-blue-400",
    api: "https://choir-anthony-warning-functioning.trycloudflare.com/api/medicines/67eef0080a8f6e6b9fe8485c",
  },
  {
    name: "Pain and Inflammation",
    icon: "pain-inflammation",
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
    hoverBorderColor: "hover:border-green-400",
    api: "https://choir-anthony-warning-functioning.trycloudflare.com/api/medicines/67eef0080a8f6e6b9fe84866",
  },
  {
    name: "Acid Reflux",
    icon: "acid-reflux",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
    hoverBorderColor: "hover:border-yellow-400",
    api: "https://choir-anthony-warning-functioning.trycloudflare.com/api/medicines/67eef0080a8f6e6b9fe84821",
  },
];

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [medicineData, setMedicineData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const defaultCategory = categories.find(
      (cat) => cat.name === "Blood Pressure"
    );
    if (defaultCategory) {
      fetchMedicines(defaultCategory);
    }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => fetchMedicines(category)}
                className={`flex flex-col items-center justify-center gap-4 px-4 py-4 rounded-xl border-2 transition-all duration-300 w-full  hover:shadow-lg hover:transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? `${category.bgColor} ${category.borderColor} shadow-lg transform scale-105 border-3`
                    : `bg-white border-gray-200 ${category.hoverBorderColor} hover:shadow-md`
                }`}
              >
                <div className="flex-1 flex items-center justify-center">
                  <CategoryIcon
                    type={category.icon}
                    isSelected={selectedCategory === category.name}
                  />
                </div>
                <span className="font-semibold text-gray-800 text-sm text-center leading-tight mt-2">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
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
