import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Get In Touch</p>
            <h2 className="section-title mb-6">Request An Estimate</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your outdoor space? Contact us today for a free consultation 
              and estimate. Our team of experts is ready to bring your landscaping vision to life.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1 text-sm md:text-base">Phone Number</h4>
                  <p className="text-muted-foreground text-sm md:text-base">+1 234 567 890</p>
                  <p className="text-muted-foreground text-sm md:text-base">+1 234 567 891</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1 text-sm md:text-base">Email Address</h4>
                  <p className="text-muted-foreground text-sm md:text-base">info@landshaper.com</p>
                  <p className="text-muted-foreground text-sm md:text-base">support@landshaper.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1 text-sm md:text-base">Office Address</h4>
                  <p className="text-muted-foreground text-sm md:text-base">123 Garden Street, Suite 100</p>
                  <p className="text-muted-foreground text-sm md:text-base">Portland, Oregon 97201</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1 text-sm md:text-base">Working Hours</h4>
                  <p className="text-muted-foreground text-sm md:text-base">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm md:text-base">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-secondary p-5 md:p-8 lg:p-10">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Get a Free Quote
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-3 md:py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-3 md:py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-3 md:py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-3 md:py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors text-muted-foreground text-sm md:text-base"
                >
                  <option value="">Select Service</option>
                  <option value="design">Design & Planting</option>
                  <option value="irrigation">Irrigation & Drainage</option>
                  <option value="snow">Snow & Ice Removal</option>
                  <option value="lawn">Lawn Care & Maintenance</option>
                  <option value="hardscape">Hardscape & Patios</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 md:px-4 py-3 md:py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors mb-4 md:mb-6 resize-none text-sm md:text-base"
              />

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
