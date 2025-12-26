import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-20 lg:py-28 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${hero3})` }}
    >
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="relative container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Contact us today for a free consultation and let our experts bring your landscaping vision to life.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-dark-foreground font-semibold uppercase tracking-wider text-sm hover:bg-dark-foreground hover:text-dark transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Call: +1 234 567 890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
