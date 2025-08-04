import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2 pl-0">
            <img
              src="/lovable-uploads/73995caa-6ca7-43f2-ba48-8f29d96cc2fa.png"
              alt="Derxo"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </a>
          <Link
            to="/all-medicines"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            All Medicine
          </Link>
          <Link
            to="/blog"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Blog
          </Link>
          {/* <Link
            to="/product"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Products
          </Link> */}
          <Link
            to="/contact"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact us
          </Link>
        </nav>

        <Link to={"/contact"}>
          {/* CTA Button for desktop */}
          <Button variant="consultation" size="lg" className="hidden sm:flex">
            Free Consultation
          </Button>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-4 pb-4">
          <nav className="flex flex-col space-y-4 mt-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-medium"
            >
              Home
            </Link>
            <Link
              to="/all-medicines"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-medium"
            >
              All Medicine
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-medium"
            >
              Blog
            </Link>
            <Link
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-medium"
            >
              Products
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-medium"
            >
              Contact us
            </Link>
            <Button
              variant="consultation"
              size="sm"
              className="w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
