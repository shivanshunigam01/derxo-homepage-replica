import { Card, CardContent } from "@/components/ui/card";

// Custom SVG Vector Components
const AwardVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <circle
      cx="50"
      cy="35"
      r="20"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M35 45L45 55L65 35"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 55L35 80L50 70L65 80L60 55"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.2"
    />
    <circle cx="50" cy="35" r="12" fill={color} fillOpacity="0.3" />
    <rect
      x="46"
      y="30"
      width="8"
      height="10"
      fill={color}
      fillOpacity="0.6"
      rx="2"
    />
  </svg>
);

const CreativeVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <path
      d="M20 30 Q30 20 40 30 Q50 40 60 30 Q70 20 80 30 L80 70 L20 70 Z"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <circle cx="35" cy="45" r="8" fill={color} fillOpacity="0.4" />
    <circle cx="65" cy="50" r="6" fill={color} fillOpacity="0.6" />
    <path
      d="M25 60L35 50L45 65L55 45L65 60L75 50"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="50" cy="25" r="4" fill={color} fillOpacity="0.8" />
  </svg>
);

const PriceVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <rect
      x="25"
      y="20"
      width="50"
      height="60"
      rx="8"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M45 35L55 35M45 45L60 45M45 55L55 55"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="50" cy="30" r="3" fill={color} />
    <path
      d="M40 15L60 15"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M35 85L65 85"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <text
      x="50"
      y="50"
      textAnchor="middle"
      fill={color}
      fontSize="20"
      fontWeight="bold"
    >
      $
    </text>
  </svg>
);

const QualityVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <path
      d="M50 15L60 35L80 35L65 50L70 70L50 60L30 70L35 50L20 35L40 35Z"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <circle
      cx="50"
      cy="45"
      r="15"
      stroke={color}
      strokeWidth="2"
      fill={color}
      fillOpacity="0.2"
    />
    <path
      d="M42 45L48 52L62 38"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="45" r="8" fill={color} fillOpacity="0.3" />
  </svg>
);

const SupportVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <circle
      cx="50"
      cy="40"
      r="25"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M35 50Q35 35 50 35Q65 35 65 50"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
    <circle cx="42" cy="38" r="3" fill={color} />
    <circle cx="58" cy="38" r="3" fill={color} />
    <path
      d="M25 65Q25 55 35 55L65 55Q75 55 75 65L75 75Q75 85 65 85L35 85Q25 85 25 75Z"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.2"
    />
    <path
      d="M45 70L55 70"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <path
      d="M50 15L70 25L70 50Q70 65 50 85Q30 65 30 50L30 25Z"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M40 45L47 52L65 34"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="45" r="20" fill={color} fillOpacity="0.1" />
    <path
      d="M50 20L65 28L65 50Q65 60 50 75Q35 60 35 50L35 28Z"
      stroke={color}
      strokeWidth="2"
      fill={color}
      fillOpacity="0.2"
    />
  </svg>
);

const PackageVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <rect
      x="25"
      y="35"
      width="50"
      height="40"
      rx="5"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M25 45L50 30L75 45"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.2"
    />
    <path d="M50 30L50 75" stroke={color} strokeWidth="3" />
    <circle cx="40" cy="55" r="3" fill={color} fillOpacity="0.6" />
    <circle cx="60" cy="60" r="3" fill={color} fillOpacity="0.6" />
    <path
      d="M35 25L65 25"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ClockVector = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <circle
      cx="50"
      cy="50"
      r="35"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.1"
    />
    <circle cx="50" cy="50" r="25" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M50 30L50 50L65 65"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="3" fill={color} />
    <path
      d="M50 20L50 25M80 50L75 50M50 80L50 75M20 50L25 50"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const benefits = [
  {
    title: "Advanced Degrees",
    description:
      "Our pharmacists hold advanced degrees and are licensed professionals with years of experience",
    vector: AwardVector,
    color: "#6366f1",
    bgGradient: "from-indigo-50 to-indigo-100",
  },
  {
    title: "Creative Solutions",
    description:
      "Innovative approaches and personalized solutions for your unique healthcare needs",
    vector: CreativeVector,
    color: "#3b82f6",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    title: "Affordable Pricing",
    description:
      "Save up to 90% on your prescription medications without compromising quality",
    vector: PriceVector,
    color: "#10b981",
    bgGradient: "from-emerald-50 to-emerald-100",
  },
  {
    title: "Quality Assurance",
    description:
      "All medications are FDA-approved, quality tested, and sourced from certified facilities",
    vector: QualityVector,
    color: "#8b5cf6",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer support and free medical consultations from our experts",
    vector: SupportVector,
    color: "#ef4444",
    bgGradient: "from-red-50 to-red-100",
  },
];

const trustIndicators = [
  {
    title: "FDA Approved",
    description:
      "All our medications are FDA approved and sourced from licensed pharmacies worldwide",
    vector: ShieldVector,
    color: "#6366f1",
    bgGradient: "from-indigo-50 to-indigo-100",
  },
  {
    title: "Discreet Packaging",
    description:
      "Your privacy is protected with discreet packaging and secure, confidential delivery",
    vector: PackageVector,
    color: "#10b981",
    bgGradient: "from-emerald-50 to-emerald-100",
  },
  {
    title: "Direct Service",
    description:
      "No middleman means better prices - direct from certified pharmacy to your doorstep",
    vector: ClockVector,
    color: "#3b82f6",
    bgGradient: "from-blue-50 to-blue-100",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Why Choose Derxo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing you with the best healthcare
              experience through innovation, quality, and personalized care
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const VectorComponent = benefit.vector;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg hover:scale-105 overflow-hidden"
                >
                  <CardContent className="p-8 text-center relative">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Vector Icon */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <VectorComponent
                          className="h-12 w-12"
                          color={benefit.color}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-indigo-900 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Trust Indicators Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-30 transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-full opacity-30 transform -translate-x-24 translate-y-24"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Generic Medicines Online Choose Derxo?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our commitment to excellence sets us apart in the healthcare
                  industry
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trustIndicators.map((indicator, index) => {
                  const VectorComponent = indicator.vector;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center group"
                    >
                      <div
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${indicator.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                      >
                        <VectorComponent
                          className="h-14 w-14"
                          color={indicator.color}
                        />
                      </div>
                      <h4 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-indigo-900 transition-colors duration-300">
                        {indicator.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {indicator.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "99.9%", label: "Delivery Success" },
              { number: "24/7", label: "Support Available" },
              { number: "FDA", label: "Approved Products" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
