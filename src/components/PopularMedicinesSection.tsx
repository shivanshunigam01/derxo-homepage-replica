import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const medicines = [
  {
    name: "Metformin",
    condition: "Diabetes",
    price: "$2.54",
    originalPrice: "$15.99",
    rating: 4.8,
    reviews: 1240,
    inStock: true
  },
  {
    name: "Lisinopril",
    condition: "Blood Pressure",
    price: "$3.21",
    originalPrice: "$18.99",
    rating: 4.7,
    reviews: 987,
    inStock: true
  },
  {
    name: "Atorvastatin",
    condition: "Cholesterol",
    price: "$4.67",
    originalPrice: "$24.99",
    rating: 4.6,
    reviews: 756,
    inStock: true
  },
  {
    name: "Omeprazole",
    condition: "Acid Reflux",
    price: "$5.89",
    originalPrice: "$28.99",
    rating: 4.9,
    reviews: 2100,
    inStock: false
  },
  {
    name: "Sertraline",
    condition: "Mental Health",
    price: "$6.45",
    originalPrice: "$32.99",
    rating: 4.5,
    reviews: 543,
    inStock: true
  },
  {
    name: "Ibuprofen",
    condition: "Pain Relief",
    price: "$1.99",
    originalPrice: "$9.99",
    rating: 4.8,
    reviews: 3200,
    inStock: true
  }
];

const PopularMedicinesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Popular Medicines
          </h2>
          <p className="text-lg text-muted-foreground">
            Most searched medications by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((medicine, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-1">
                      {medicine.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      for {medicine.condition}
                    </p>
                  </div>
                  <Badge 
                    variant={medicine.inStock ? "default" : "secondary"}
                    className={medicine.inStock ? "bg-green-100 text-green-800" : ""}
                  >
                    {medicine.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-2xl font-bold text-primary">
                      {medicine.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {medicine.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium ml-1">{medicine.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({medicine.reviews} reviews)
                    </span>
                  </div>
                </div>

                <Button 
                  variant={medicine.inStock ? "default" : "secondary"} 
                  className="w-full"
                  disabled={!medicine.inStock}
                >
                  {medicine.inStock ? "Add to Cart" : "Notify When Available"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMedicinesSection;