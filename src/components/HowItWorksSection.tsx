import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart, Phone, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Select Category",
    description: "Choose your medical condition or search by medicine name",
    icon: Search,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    step: 2,
    title: "Choose Meds",
    description: "Browse through available medications and compare prices",
    icon: ShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    step: 3,
    title: "Order",
    description: "Place your order securely with our encrypted checkout",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    step: 4,
    title: "Get Free Callback",
    description: "Our healthcare experts will contact you for consultation",
    icon: Phone,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    step: 5,
    title: "Delivery at Doorstep",
    description: "Receive your medication with discreet, secure packaging",
    icon: Truck,
    color: "text-medical-red",
    bgColor: "bg-medical-red/10"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Derxo Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your medication is simple and secure with our 5-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 group relative"
              >
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 mt-4 rounded-full ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block relative -mt-20 mb-16">
          <div className="flex justify-between items-center px-16">
            {[1, 2, 3, 4].map((_, index) => (
              <div 
                key={index}
                className="flex-1 h-px bg-gradient-to-r from-primary/30 to-primary-light/30 mx-4"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;