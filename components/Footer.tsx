import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-foreground">
      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif text-2xl font-bold">
                    L
                  </span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold">
                    Landshaper
                  </span>
                </div>
              </div>
              <p className="text-dark-foreground/70 mb-6 leading-relaxed">
                Creating beautiful outdoor spaces since 1982. We provide
                professional landscaping services for residential and commercial
                properties.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-dark-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-dark-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-dark-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-dark-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Projects",
                  "Testimonials",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-dark-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            {/* <div>
              <h4 className="font-serif text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Design & Planting",
                  "Irrigation Systems",
                  "Snow Removal",
                  "Lawn Care",
                  "Hardscaping",
                  "Tree Services",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-dark-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-dark-foreground/70">
                    123 Garden Street, Suite 100
                    <br />
                    Portland, Oregon 97201
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    +1 234 567 890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@landshaper.com"
                    className="text-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    info@landshaper.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-foreground/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-foreground/60 text-sm">
            © {currentYear} Landshaper. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-dark-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-dark-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
