import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Stop paying too much for prescriptions
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12">
            Compare prices and save up to 80%
          </p>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter a medication" 
                className="flex-1 h-14 text-base bg-white border-0 rounded-full px-6 shadow-lg"
              />
              <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-medium">
                Find the lowest prices
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="text-left max-w-2xl mx-auto">
            <h3 className="text-lg font-medium text-slate-700 mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-3">
              {["Ozempic", "Atorvastatin", "Wegovy", "Tadalafil (Cialis)", "Eliquis"].map((med) => (
                <Button
                  key={med}
                  variant="outline"
                  className="rounded-full bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:shadow-md"
                >
                  {med}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;