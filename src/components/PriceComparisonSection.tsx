import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const priceData = [
  {
    category: "Blood Pressure",
    startPrice: "$2.54",
    originalPrice: "$17.95",
    savings: "Save 86%",
    color: "text-medical-red",
    bgColor: "bg-medical-red/10"
  },
  {
    category: "Cholesterol",
    startPrice: "$2.54",
    originalPrice: "$15.95",
    savings: "Save 84%",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    category: "Diabetes",
    startPrice: "$9.17",
    originalPrice: "$45.99",
    savings: "Save 80%",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    category: "Mental Health",
    startPrice: "$5.48",
    originalPrice: "$29.99",
    savings: "Save 82%",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    category: "Pain Relief",
    startPrice: "$1.24",
    originalPrice: "$12.99",
    savings: "Save 90%",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    category: "Acid Reflux",
    startPrice: "$9.79",
    originalPrice: "$48.99",
    savings: "Save 80%",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  }
];

const PriceComparisonSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Price Comparison
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare prices and save up to 90% on your medications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceData.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-foreground">
                    {item.category}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className={`${item.bgColor} ${item.color} border-0 font-semibold`}
                  >
                    {item.savings}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      Starts {item.startPrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {item.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Price per month with subscription
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceComparisonSection;