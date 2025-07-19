import { Card, CardContent } from "@/components/ui/card";
import { Shield, Package, Headphones, Truck, Award, Clock } from "lucide-react";

const benefits = [
  {
    title: "Advanced Degrees",
    description: "Our pharmacists hold advanced degrees and are licensed professionals",
    icon: Award,
    color: "text-primary"
  },
  {
    title: "Creative Team",
    description: "Innovative solutions for your healthcare needs",
    icon: Shield,
    color: "text-blue-600"
  },
  {
    title: "Affordable Price",
    description: "Save up to 90% on your prescription medications",
    icon: Package,
    color: "text-green-600"
  },
  {
    title: "Quality Assurance",
    description: "All medications are FDA-approved and quality tested",
    icon: Shield,
    color: "text-purple-600"
  },
  {
    title: "Quick Support",
    description: "24/7 customer support and free medical consultations",
    icon: Headphones,
    color: "text-medical-red"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Derxo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the best healthcare experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-card transition-all duration-300 group border-0 shadow-sm"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    
                    <h3 className="font-bold text-xl text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Why Say Generics Medicines Online are Derxo?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">FDA Approved</h4>
                <p className="text-muted-foreground text-sm">All our medications are FDA approved and sourced from licensed pharmacies</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Package className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Discreet Packaging</h4>
                <p className="text-muted-foreground text-sm">Your privacy is protected with discreet packaging and secure delivery</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">No Middleman</h4>
                <p className="text-muted-foreground text-sm">Direct from pharmacy to your door, cutting out unnecessary costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;