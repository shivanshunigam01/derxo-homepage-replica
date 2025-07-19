import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Activity, Zap, Shield, Pill } from "lucide-react";

const categories = [
  {
    name: "Blood Pressure",
    icon: Heart,
    color: "text-medical-red",
    bgColor: "bg-medical-red/10",
  },
  {
    name: "Cholesterol",
    icon: Activity,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    name: "Diabetes",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Mental Health",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    name: "Pain & Inflammation",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    name: "Acid Reflux",
    icon: Pill,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Search by Medical Conditions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the right medication for your specific health condition quickly and easily
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base text-foreground leading-tight">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;