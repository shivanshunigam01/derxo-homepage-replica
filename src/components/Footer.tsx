import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <img
              src="/favicon.png"
              alt="Derxo"
              className="h-10 w-10 rounded-lg shadow-md"
            /> */}
            <p className="text-primary-foreground/80 leading-relaxed">
              Derxo is your trusted online pharmacy providing affordable,
              FDA-approved medications with free consultations from licensed
              healthcare professionals.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-medicines"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  All Medicines
                </Link>
              </li>
              <li>
                <Link
                  to="/all-medicines"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Generic Medicines
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Health Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Health Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Health Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blood Pressure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Diabetes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Mental Health
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pain Relief
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Heart Health
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Certifications Section */}
        <div className="mt-8 py-6 border-t border-b border-primary-foreground/20">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-primary-foreground mb-2">
              Trusted & Certified
            </h4>
            <p className="text-primary-foreground/70 text-sm">
              Your safety and privacy are our top priorities
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12">
            {[
              {
                src: "/shared image.jpg",
                alt: "LegitScript Certified",
                link: "https://www.legitscript.com",
              },
              {
                src: "/shared image (1).jpg",
                alt: "NABP Accredited",
                link: "https://nabp.pharmacy/programs/accreditations/digital-pharmacy/accredited-digital-pharmacies/",
              },
              { src: "/shared image (2).jpg", alt: "Best Seller", link: "#" },
              {
                src: "/shared image (3).jpg",
                alt: "HIPAA Seal of Compliance",
                link: "https://www.hhs.gov/hipaa/for-professionals/index.html",
              },
              {
                src: "/shared image (4).jpg",
                alt: "NCQA Accredited",
                link: "https://www.ncqa.org",
              },
              {
                src: "/shared image (5).jpg",
                alt: "URAC Accredited",
                link: "https://www.urac.org",
              },
              {
                src: "/shared image (6).jpg",
                alt: "BBB Accredited",
                link: "https://www.bbb.org",
              },
              {
                src: "/shared image (7).jpg",
                alt: "Comodo Secure",
                link: "https://www.comodo.com",
              },
              {
                src: "/shared image (8).jpg",
                alt: "ACHC Accredited",
                link: "https://www.achc.org",
              },
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                title={cert.alt}
              >
                <div className="flex flex-col items-center group hover:shadow-md transition-shadow">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="h-24 max-w-[100px] object-contain transition-transform group-hover:scale-105 bg-white/10 p-2 rounded-lg"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80">
              <p>&copy; 2024 Derxo. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80">Country:</span>
              <select className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded px-3 py-1">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-primary-foreground/60">
            <p>
              Trusted by over 1,000,000 customers | FDA Approved Medications |
              Licensed Healthcare Professionals | Secure & Confidential
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
