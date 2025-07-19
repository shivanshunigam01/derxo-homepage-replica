import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/73995caa-6ca7-43f2-ba48-8f29d96cc2fa.png" 
            alt="Derxo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            All Medicine
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Blog
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact Us
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="consultation" size="lg" className="hidden sm:flex">
          Free Consultation
        </Button>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;