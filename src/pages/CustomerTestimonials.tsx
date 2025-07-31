import {
  Star,
  Quote,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  ExternalLink,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

const trustBadges = [
  {
    name: "TRUSTPILOT",
    rating: "4.8",
    icon: Award,
    color: "from-green-400 to-green-600",
  },
  {
    name: "GOOGLE",
    rating: "4.7",
    icon: TrendingUp,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "APP STORE",
    rating: "4.9",
    icon: Star,
    color: "from-purple-400 to-purple-600",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    text: "Outstanding service and quality! The team was incredibly responsive and delivered exactly what we needed. The entire process was smooth and professional from start to finish.",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    text: "Within just a few hours of reaching out, I had a complete solution. The support team was knowledgeable and friendly, making sure everything was perfect before delivery.",
    avatar: "MR",
  },
  {
    name: "Jennifer Park",
    role: "Marketing Director",
    text: "The whole experience exceeded my expectations. From the initial consultation to the final delivery, everything was handled with care and attention to detail.",
    avatar: "JP",
  },
  {
    name: "David Thompson",
    role: "Tech Lead",
    text: "Fantastic customer service! They went above and beyond to ensure I was completely satisfied. The quality of work is exceptional and the turnaround time was impressive.",
    avatar: "DT",
  },
  {
    name: "Lisa Williams",
    role: "Business Owner",
    text: "Simple, efficient, and professional. The team made the entire process hassle-free and delivered results that exceeded our expectations. Highly recommended!",
    avatar: "LW",
  },
  {
    name: "Robert Kim",
    role: "CTO",
    text: "Amazing experience from start to finish. The attention to detail and commitment to customer satisfaction is evident in every interaction. Will definitely use again!",
    avatar: "RK",
  },
  {
    name: "Amanda Foster",
    role: "Designer",
    text: "Quick response time and excellent quality. The team was professional and made sure all my requirements were met perfectly. Great communication throughout the process.",
    avatar: "AF",
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    text: "Best decision I made! The service is top-notch and the results speak for themselves. Professional, reliable, and incredibly efficient. Couldn't be happier!",
    avatar: "JW",
  },
  {
    name: "Rachel Green",
    role: "Operations Manager",
    text: "Exceptional service and support. The team was responsive, knowledgeable, and delivered exactly what was promised. The quality exceeded all my expectations.",
    avatar: "RG",
  },
];

const trustpilotReviews = [
  {
    name: "Alex Thompson",
    location: "United States",
    rating: 5,
    title: "Outstanding Service Quality",
    text: "Exceeded my expectations in every way. Professional, efficient, and delivered exactly what was promised. The support team was incredibly responsive.",
    date: "2 days ago",
    verified: true,
  },
  {
    name: "Emma Rodriguez",
    location: "United Kingdom",
    rating: 5,
    title: "Highly Recommend!",
    text: "Amazing experience from start to finish. The quality of work is top-notch and the team went above and beyond to ensure satisfaction.",
    date: "1 week ago",
    verified: true,
  },
  {
    name: "Marcus Chen",
    location: "Canada",
    rating: 5,
    title: "Perfect Solution",
    text: "Found exactly what I was looking for. The process was seamless and the results were delivered faster than expected. Will definitely use again!",
    date: "2 weeks ago",
    verified: true,
  },
];

const TrustpilotWidget = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-md mx-auto mb-12">
      {/* Trustpilot Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
            <div className="text-white font-bold text-sm">T</div>
          </div>
          <div>
            <div className="font-bold text-gray-900">Trustpilot</div>
            <div className="text-xs text-gray-500">Reviews</div>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400" />
      </div>

      {/* Overall Rating */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
            ))}
          </div>
          <span className="font-bold text-lg">4.8</span>
        </div>
        <div className="text-sm text-gray-600 mb-1">
          Based on <span className="font-semibold">2,847 reviews</span>
        </div>
        <div className="text-xs text-gray-500">
          Showing recent reviews from the past month
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="space-y-4">
        {trustpilotReviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-100 pb-4 last:border-0"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">
                {review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-gray-900">
                    {review.name}
                  </span>
                  {review.verified && (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? "fill-green-500 text-green-500"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {review.date}
                  </span>
                </div>
                <div className="font-semibold text-xs text-gray-900 mb-1">
                  {review.title}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  {review.text}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {review.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full text-xs text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
          View all reviews on Trustpilot
        </button>
      </div>
    </div>
  );
};

const CustomerTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const getVisibleTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Trusted by over 50,000 customers
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Join thousands of satisfied customers who have transformed their
            business with our solutions
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl px-8 py-6 text-center min-w-[200px] border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${badge.color} rounded-xl mb-3`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">
                      {badge.name}
                    </div>

                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="text-2xl font-bold text-gray-900">
                      {badge.rating}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trustpilot Summary Widget */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <div className="text-white font-bold text-sm">T</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900">Trustpilot</div>
                <div className="text-xs text-gray-500">
                  4.8 out of 5 based on 2,847 reviews
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-green-500 text-green-500"
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {getVisibleTestimonials().map((item, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5 -z-10"></div>

                <div className="relative z-10">
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    "{item.text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500">{item.role}</div>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Trustpilot Reviews Mixed In */}
            {currentSlide === 0 && (
              <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                {/* Trustpilot Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-sm">T</div>
                </div>

                {/* Trustpilot Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5 -z-10"></div>

                <div className="relative z-10">
                  {/* Trustpilot Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                      Trustpilot Review
                    </div>
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    "{trustpilotReviews[0].text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {trustpilotReviews[0].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {trustpilotReviews[0].name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {trustpilotReviews[0].location}
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-green-500 text-green-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSlide === 1 && (
              <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                {/* Trustpilot Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-sm">T</div>
                </div>

                {/* Trustpilot Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5 -z-10"></div>

                <div className="relative z-10">
                  {/* Trustpilot Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                      Trustpilot Review
                    </div>
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    "{trustpilotReviews[1].text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {trustpilotReviews[1].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {trustpilotReviews[1].name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {trustpilotReviews[1].location}
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-green-500 text-green-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSlide === 2 && (
              <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                {/* Trustpilot Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-sm">T</div>
                </div>

                {/* Trustpilot Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5 -z-10"></div>

                <div className="relative z-10">
                  {/* Trustpilot Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                      Trustpilot Review
                    </div>
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    "{trustpilotReviews[2].text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {trustpilotReviews[2].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {trustpilotReviews[2].name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {trustpilotReviews[2].location}
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-green-500 text-green-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
                )
              }
              className="ml-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600 text-lg">
            <span>Join our community of satisfied customers</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
