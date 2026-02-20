import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-dark text-dark-foreground py-3">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 234 567 890</span>
            </a>
            <a
              href="mailto:info@landshaper.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>info@landshaper.com</span>
            </a>
            {/* <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-lg py-3" : "bg-background/95 py-4"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-2xl font-bold">
                L
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground">
                Landshaper
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Landscaping
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground font-medium hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <a href="#contact" className="btn-primary">
              Get a Quote
            </a>
          </div> */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <img src="/icon-zalo.png" alt="Zalo" className="w-10 h-w-10" />
            </a>
            {/* <a href="#" className="hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <nav className="container-custom py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground font-medium hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a href="#contact" className="btn-primary text-center mt-4">
                  Get a Quote
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
