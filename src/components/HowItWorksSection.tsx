import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Custom SVG Vector Components
const SearchVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <circle cx="35" cy="35" r="25" stroke={color} strokeWidth="4" fill="none" />
    <path
      d="m55 55 20 20"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="35" cy="35" r="8" fill={color} fillOpacity="0.3" />
    <circle cx="30" cy="28" r="3" fill={color} fillOpacity="0.6" />
  </svg>
);

const ShoppingCartVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <path
      d="M20 20L25 30L75 30L70 70L30 70L25 30"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <circle cx="35" cy="80" r="4" fill={color} />
    <circle cx="65" cy="80" r="4" fill={color} />
    <path
      d="M15 15L20 20L25 30"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="40"
      y="40"
      width="8"
      height="15"
      fill={color}
      fillOpacity="0.6"
      rx="2"
    />
    <rect
      x="52"
      y="35"
      width="8"
      height="20"
      fill={color}
      fillOpacity="0.6"
      rx="2"
    />
  </svg>
);

const CheckCircleVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <circle
      cx="50"
      cy="50"
      r="35"
      stroke={color}
      strokeWidth="4"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M30 50L45 65L70 35"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="25" fill={color} fillOpacity="0.05" />
  </svg>
);

const PhoneVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <rect
      x="30"
      y="15"
      width="40"
      height="70"
      rx="8"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <rect
      x="35"
      y="25"
      width="30"
      height="45"
      fill={color}
      fillOpacity="0.2"
      rx="2"
    />
    <circle cx="50" cy="78" r="3" fill={color} />
    <rect x="42" y="18" width="16" height="3" fill={color} rx="1.5" />
    <path
      d="M40 35L45 40L55 30"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M40 45L60 45"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M40 52L55 52"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const TruckVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <rect
      x="15"
      y="40"
      width="35"
      height="25"
      fill={color}
      fillOpacity="0.2"
      stroke={color}
      strokeWidth="2"
      rx="3"
    />
    <rect
      x="50"
      y="30"
      width="25"
      height="35"
      fill={color}
      fillOpacity="0.1"
      stroke={color}
      strokeWidth="2"
      rx="3"
    />
    <circle
      cx="30"
      cy="75"
      r="6"
      stroke={color}
      strokeWidth="2"
      fill={color}
      fillOpacity="0.3"
    />
    <circle
      cx="65"
      cy="75"
      r="6"
      stroke={color}
      strokeWidth="2"
      fill={color}
      fillOpacity="0.3"
    />
    <rect
      x="20"
      y="45"
      width="8"
      height="6"
      fill={color}
      fillOpacity="0.6"
      rx="1"
    />
    <rect
      x="55"
      y="38"
      width="6"
      height="4"
      fill={color}
      fillOpacity="0.8"
      rx="1"
    />
    <path
      d="M75 45L82 45L85 50L82 55L75 55"
      stroke={color}
      strokeWidth="2"
      fill={color}
      fillOpacity="0.2"
    />
  </svg>
);

// Arrow Component
const Arrow = ({ className }) => (
  <svg viewBox="0 0 60 20" className={className} fill="none">
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <path
      d="M5 10 L45 10"
      stroke="url(#arrowGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
    <path
      d="M40 6 L50 10 L40 14"
      stroke="url(#arrowGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const steps = [
  {
    step: 1,
    title: "Select Category",
    description: "Choose your medical condition or search by medicine name",
    vector: SearchVector,
    color: "#6366f1",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    step: 2,
    title: "Choose Meds",
    description: "Browse through available medications and compare prices",
    vector: ShoppingCartVector,
    color: "#3b82f6",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    step: 3,
    title: "Order",
    description: "Place your order securely with our encrypted checkout",
    vector: CheckCircleVector,
    color: "#10b981",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    step: 4,
    title: "Get Free Callback",
    description: "Our healthcare experts will contact you for consultation",
    vector: PhoneVector,
    color: "#8b5cf6",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    step: 5,
    title: "Delivery at Doorstep",
    description: "Receive your medication with discreet, secure packaging",
    vector: TruckVector,
    color: "#ef4444",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            How Derxo Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting your medication is simple and secure with our streamlined
            5-step process designed for your convenience
          </p>
        </div>

        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const VectorComponent = step.vector;
              return (
                <div key={index} className="relative">
                  <Card
                    className={`hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ${step.borderColor} border-2 hover:scale-105`}
                  >
                    <CardContent className="p-10 pt-12 text-center relative">
                      {/* Background Decoration */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Step Number */}
                      <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-20">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.step}
                        </div>
                      </div>

                      {/* Vector Icon */}
                      <div
                        className={`w-20 h-20 mx-auto mb-6 mt-8 rounded-2xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner`}
                      >
                        <VectorComponent
                          className="h-12 w-12"
                          color={step.color}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-indigo-900 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Arrow for desktop - only show between steps, not after last */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                      <Arrow className="w-16 h-8 animate-pulse" />
                    </div>
                  )}

                  {/* Vertical Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <svg
                        viewBox="0 0 20 40"
                        className="w-6 h-8 animate-bounce"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="verticalArrowGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#6366f1"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="100%"
                              stopColor="#8b5cf6"
                              stopOpacity="0.6"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M10 5 L10 30"
                          stroke="url(#verticalArrowGradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="2 2"
                        />
                        <path
                          d="M6 26 L10 35 L14 26"
                          stroke="url(#verticalArrowGradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-indigo-100 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <Link to={"/all-medicines"}>
              <span>Start Your Order Now</span>
            </Link>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
