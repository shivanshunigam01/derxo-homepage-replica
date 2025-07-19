import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-primary-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Stop paying too much for prescriptions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Free consultation with health experts
          </p>

          {/* Search Tabs */}
          <Card className="p-6 shadow-medical max-w-2xl mx-auto">
            <Tabs defaultValue="disease" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="disease">Meds by Disease</TabsTrigger>
                <TabsTrigger value="name">Meds by Name</TabsTrigger>
                <TabsTrigger value="generic">Meds by Generic</TabsTrigger>
              </TabsList>
              
              <TabsContent value="disease" className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Search by medical condition..." 
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button variant="consultation" size="lg" className="w-full">
                  Search Medicine
                </Button>
              </TabsContent>
              
              <TabsContent value="name" className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Search by medicine name..." 
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button variant="consultation" size="lg" className="w-full">
                  Find Medicine
                </Button>
              </TabsContent>
              
              <TabsContent value="generic" className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Search by generic name..." 
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button variant="consultation" size="lg" className="w-full">
                  Search Generic
                </Button>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;