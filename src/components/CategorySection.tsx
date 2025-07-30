import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// Animated SVG Icon Component
const AnimatedIcon = ({ type, isHovered }) => {
  const getIcon = () => {
    switch (type) {
      case "blood-pressure":
        return (
          <div className="w-20 h-20 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Heart */}
              <path
                d="M50,85 C50,85 20,65 20,45 C20,35 30,25 40,25 C45,25 50,30 50,30 C50,30 55,25 60,25 C70,25 80,35 80,45 C80,65 50,85 50,85 Z"
                fill="#ef4444"
                className={`transition-all duration-500 ${
                  isHovered ? "animate-pulse" : ""
                }`}
              />
              {/* Pulse line */}
              <g className={`${isHovered ? "animate-bounce" : ""}`}>
                <path
                  d="M15,50 L25,50 L30,40 L35,60 L40,30 L45,70 L50,45 L55,55 L60,45 L65,50 L85,50"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              </g>
              {/* Stethoscope */}
              <circle cx="70" cy="35" r="8" fill="#374151" opacity="0.8" />
              <path
                d="M70,27 Q75,20 85,25"
                stroke="#374151"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        );

      case "cholesterol":
        return (
          <div className="w-20 h-20 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Heart character */}
              <path
                d="M50,75 C50,75 25,60 25,45 C25,35 35,25 45,25 C47,25 50,28 50,28 C50,28 53,25 55,25 C65,25 75,35 75,45 C75,60 50,75 50,75 Z"
                fill="#ef4444"
                className={`transition-all duration-300 ${
                  isHovered ? "scale-110" : ""
                }`}
              />
              {/* Eyes */}
              <circle cx="42" cy="40" r="3" fill="white" />
              <circle cx="58" cy="40" r="3" fill="white" />
              <circle cx="42" cy="40" r="1.5" fill="black" />
              <circle cx="58" cy="40" r="1.5" fill="black" />
              {/* Mouth */}
              <path
                d="M45,48 Q50,53 55,48"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />

              {/* Cholesterol molecules */}
              <g
                className={`${isHovered ? "animate-spin" : ""}`}
                style={{ transformOrigin: "20px 25px" }}
              >
                <circle cx="20" cy="25" r="4" fill="#fbbf24" opacity="0.8" />
                <circle cx="25" cy="20" r="3" fill="#f59e0b" opacity="0.6" />
                <circle cx="15" cy="20" r="3" fill="#f59e0b" opacity="0.6" />
              </g>

              <g
                className={`${isHovered ? "animate-spin" : ""}`}
                style={{ transformOrigin: "80px 30px" }}
              >
                <circle cx="80" cy="30" r="4" fill="#fbbf24" opacity="0.8" />
                <circle cx="85" cy="25" r="3" fill="#f59e0b" opacity="0.6" />
                <circle cx="75" cy="25" r="3" fill="#f59e0b" opacity="0.6" />
              </g>
            </svg>
          </div>
        );

      case "diabetes":
        return (
          <div className="w-20 h-20 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Blood drop character */}
              <path
                d="M50,80 C35,80 25,65 25,50 C25,35 50,15 50,15 C50,15 75,35 75,50 C75,65 65,80 50,80 Z"
                fill="#ef4444"
                className={`transition-all duration-300 ${
                  isHovered ? "animate-bounce" : ""
                }`}
              />
              {/* Face */}
              <circle cx="42" cy="45" r="3" fill="white" />
              <circle cx="58" cy="45" r="3" fill="white" />
              <circle cx="42" cy="45" r="1.5" fill="black" />
              <circle cx="58" cy="45" r="1.5" fill="black" />
              <path
                d="M45,55 Q50,60 55,55"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />

              {/* Glucose meter */}
              <rect
                x="65"
                y="25"
                width="15"
                height="20"
                rx="2"
                fill="#374151"
              />
              <rect x="67" y="27" width="11" height="8" fill="#22d3ee" />
              <text
                x="72.5"
                y="32"
                textAnchor="middle"
                fontSize="4"
                fill="white"
              >
                120
              </text>

              {/* Test strip */}
              <rect
                x="70"
                y="45"
                width="5"
                height="8"
                fill="#fbbf24"
                className={`${isHovered ? "animate-pulse" : ""}`}
              />
            </svg>
          </div>
        );

      case "mental-health":
        return (
          <div className="w-20 h-20 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Head silhouette */}
              <ellipse cx="50" cy="55" rx="25" ry="30" fill="#3b82f6" />

              {/* Brain */}
              <g className={`${isHovered ? "animate-pulse" : ""}`}>
                <path
                  d="M35,40 Q30,35 35,30 Q40,25 45,30 Q50,25 55,30 Q60,25 65,30 Q70,35 65,40 Q70,45 65,50 Q60,55 55,50 Q50,55 45,50 Q40,55 35,50 Q30,45 35,40 Z"
                  fill="#22d3ee"
                />
                {/* Brain details */}
                <path
                  d="M40,35 Q45,32 50,35 Q55,32 60,35"
                  stroke="#0891b2"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M38,42 Q43,39 48,42 Q53,39 58,42"
                  stroke="#0891b2"
                  strokeWidth="1"
                  fill="none"
                />
              </g>

              {/* Positive thoughts */}
              <g className={`${isHovered ? "animate-bounce" : ""}`}>
                <circle cx="25" cy="25" r="3" fill="#10b981" opacity="0.8" />
                <text
                  x="25"
                  y="27"
                  textAnchor="middle"
                  fontSize="6"
                  fill="white"
                >
                  +
                </text>
                <circle cx="75" cy="20" r="3" fill="#10b981" opacity="0.8" />
                <text
                  x="75"
                  y="22"
                  textAnchor="middle"
                  fontSize="6"
                  fill="white"
                >
                  +
                </text>
              </g>
            </svg>
          </div>
        );

      case "pain-inflammation":
        return (
          <div className="w-20 h-20 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Body silhouette */}
              <ellipse
                cx="50"
                cy="60"
                rx="20"
                ry="35"
                fill="#6b7280"
                opacity="0.3"
              />

              {/* Pain indicators */}
              <g className={`${isHovered ? "animate-pulse" : ""}`}>
                {/* Lightning bolt pain */}
                <path
                  d="M40,30 L35,45 L42,45 L38,65 L50,45 L43,45 L48,30 Z"
                  fill="#ef4444"
                  className="animate-pulse"
                />
                <path
                  d="M60,35 L55,50 L62,50 L58,70 L70,50 L63,50 L68,35 Z"
                  fill="#f97316"
                  className="animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </g>

              {/* Shield protection */}
              <g
                className={`transition-all duration-500 ${
                  isHovered ? "scale-110" : ""
                }`}
              >
                <path
                  d="M20,20 Q20,15 25,15 L35,15 Q40,15 40,20 L40,35 Q32.5,40 25,35 Q17.5,40 10,35 L10,20 Q10,15 15,15 L25,15 Q30,15 30,20"
                  fill="#10b981"
                  opacity="0.8"
                />
                <text
                  x="25"
                  y="25"
                  textAnchor="middle"
                  fontSize="8"
                  fill="white"
                >
                  +
                </text>
              </g>
            </svg>
          </div>
        );

      case "acid-reflux":
        return (
          <div className="w-20 h-20 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Stomach */}
              <path
                d="M50,25 C35,25 25,35 25,50 C25,65 30,75 40,80 C45,82 55,82 60,80 C70,75 75,65 75,50 C75,35 65,25 50,25 Z"
                fill="#fbbf24"
                className={`transition-all duration-300 ${
                  isHovered ? "animate-pulse" : ""
                }`}
              />

              {/* Person silhouette */}
              <ellipse
                cx="50"
                cy="45"
                rx="18"
                ry="25"
                fill="#f59e0b"
                opacity="0.3"
              />

              {/* Acid bubbles rising */}
              <g className={`${isHovered ? "animate-bounce" : ""}`}>
                <circle
                  cx="45"
                  cy="70"
                  r="2"
                  fill="#ef4444"
                  opacity="0.8"
                  className="animate-ping"
                />
                <circle
                  cx="55"
                  cy="65"
                  r="2"
                  fill="#ef4444"
                  opacity="0.6"
                  className="animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle
                  cx="50"
                  cy="58"
                  r="1.5"
                  fill="#ef4444"
                  opacity="0.4"
                  className="animate-ping"
                  style={{ animationDelay: "1s" }}
                />
              </g>

              {/* Pills */}
              <g
                className={`transition-all duration-500 ${
                  isHovered ? "scale-110" : ""
                }`}
              >
                <ellipse cx="20" cy="30" rx="6" ry="3" fill="#10b981" />
                <ellipse cx="80" cy="25" rx="6" ry="3" fill="#3b82f6" />
                <ellipse cx="15" cy="50" rx="6" ry="3" fill="#8b5cf6" />
              </g>

              {/* Relief arrow */}
              <path
                d="M30,15 L35,10 L30,5"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                className={`${isHovered ? "animate-bounce" : ""}`}
              />
            </svg>
          </div>
        );

      default:
        return <div className="w-20 h-20 bg-gray-200 rounded-full"></div>;
    }
  };

  return getIcon();
};

const categories = [
  {
    name: "Blood Pressure",
    icon: "blood-pressure",
    bgColor: "bg-red-50",
    borderColor: "hover:border-red-200",
    textColor: "text-red-600",
  },
  {
    name: "Cholesterol",
    icon: "cholesterol",
    bgColor: "bg-orange-50",
    borderColor: "hover:border-orange-200",
    textColor: "text-orange-600",
  },
  {
    name: "Diabetes",
    icon: "diabetes",
    bgColor: "bg-blue-50",
    borderColor: "hover:border-blue-200",
    textColor: "text-blue-600",
  },
  {
    name: "Mental Health",
    icon: "mental-health",
    bgColor: "bg-blue-50",
    borderColor: "hover:border-blue-200",
    textColor: "text-blue-600",
  },
  {
    name: "Pain & Inflammation",
    icon: "pain-inflammation",
    bgColor: "bg-green-50",
    borderColor: "hover:border-green-200",
    textColor: "text-green-600",
  },
  {
    name: "Acid Reflux",
    icon: "acid-reflux",
    bgColor: "bg-yellow-50",
    borderColor: "hover:border-yellow-200",
    textColor: "text-yellow-600",
  },
];

const CategorySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
 const navigate = useNavigate(); 
  const handleCategoryClick = (name) => {
    // Mo const encodedQuery = encodeURIComponent(name);
        const encodedQuery = encodeURIComponent(name);
    navigate(`/all-medicines?query=${encodedQuery}`);
    
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Search by Medical Conditions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right medication for your specific health condition quickly
            and easily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`hover:shadow-2xl transition-all duration-500 cursor-pointer group border-2 ${category.borderColor} ${category.bgColor} transform hover:-translate-y-2 hover:scale-105`}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full blur-xl"></div>
                  <AnimatedIcon
                    type={category.icon}
                    isHovered={hoveredIndex === index}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold ${category.textColor} group-hover:scale-105 transition-transform duration-300`}
                >
                  {category.name}
                </h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
