import { useState, useEffect, useCallback } from "react";
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
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Đánh giá", href: "#testimonials" },
    // { name: "Liên hệ", href: "#contact" },
  ];

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // External page link (no hash) — let default behavior happen
      if (!href.startsWith("#")) return;

      e.preventDefault();
      const sectionId = href.slice(1);
      const isHome = router.pathname === "/";

      if (isHome) {
        // Already on home — just scroll
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // Navigate to home with hash — scroll after page loads
        router.push(`/${href}`);
      }
    },
    [router]
  );

  // After navigating to home with hash, scroll to the section
  useEffect(() => {
    if (router.pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      // Small delay to let the page render
      const timer = setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [router.pathname, router.asPath]);

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
          <Link
            href="/"
            onClick={(e) => {
              if (router.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground">
                Dong A
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Crop Protection
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
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
            <a href="#" className="hover:text-primary transition-colors">
              <img
                src="/icon-facebook.png"
                alt="Facebook"
                className="w-9 h-w-9"
              />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <img src="/icon-tiktok.png" alt="Tiktok" className="w-9 h-w-9" />
            </a>
            {/* <a href="#" className="hover:text-primary transition-colors">
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
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(e, link.href);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-primary text-center mt-4"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, "#contact");
                  }}
                >
                  Liên hệ
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
