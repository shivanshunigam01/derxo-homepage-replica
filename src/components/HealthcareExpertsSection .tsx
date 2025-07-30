import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  Award,
  Building2,
  GraduationCap,
} from "lucide-react";

const experts = [
  {
    name: "Dr. Melynda Barnes, MD",
    title: "Chief Medical Officer",
    specialization:
      "Triple board-certified Obesity Medicine, Facial Plastic and Reconstructive Surgeon, and Otolaryngologist",
    university: "Stanford University",
    affiliation: "Yale Medical Group's Board of Directors",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face",
    universityLogo: "🏛️",
    affiliationLogo: "🏥",
  },
  {
    name: "Dr. Raoul Manalac, MD",
    title: "Senior Director, Clinical Strategy",
    specialization: "Board-certified Internal Medicine Physician",
    university: "Johns Hopkins University",
    affiliation: "American Board of Obesity Medicine",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face",
    universityLogo: "🏛️",
    affiliationLogo: "⚕️",
  },
  {
    name: "Dr. Nitin Vaswani, MD MPH MBA",
    title: "Director, Clinical Strategy",
    specialization: "General Surgeon and Clinical Pathologist trainee",
    university: "Johns Hopkins University",
    affiliation: "University of Pennsylvania",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face",
    universityLogo: "🏛️",
    affiliationLogo: "🎓",
  },
];

const credentials = [
  {
    icon: CheckCircle,
    title: "Board-certified",
    description: "20+ years experience in speciality medicine",
  },
  {
    icon: Award,
    title: "Industry innovations",
    description: "100s of published studies in top medical journals",
  },
  {
    icon: Building2,
    title: "Policy leaders",
    description: "Former Surgeon General and Head of the DEA",
  },
];

const HealthcareExpertsSection = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Backed by the country's leading health experts
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Ro's world-leading experts and advisors enable us to deliver
                high-quality healthcare at scale. Their combined clinical
                expertise guides innovative treatment plans and care delivery
                that make it easier for millions of patients achieve their
                health goals.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {credential.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group">
              <span>Meet our advisors</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Expert Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experts.map((expert, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <CardContent className="p-0">
                    {/* Expert Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Expert Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-gray-900 text-lg">
                            {expert.name}
                          </h3>
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        </div>
                        <p className="text-blue-600 font-medium text-sm">
                          {expert.title}
                        </p>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {expert.specialization}
                      </p>

                      {/* University & Affiliation */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="text-sm text-gray-600">
                            {expert.university}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="text-sm text-gray-600">
                            {expert.affiliation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareExpertsSection;
