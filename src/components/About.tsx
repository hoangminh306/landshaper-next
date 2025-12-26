import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "Quality Landscape Design",
    "Expert Installation Team",
    "Sustainable Practices",
    "Customer Satisfaction",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={hero2}
                alt="About Landshaper"
                className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
              />
              {/* Experience Badge */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-primary p-4 md:p-6 lg:p-8 text-center">
                <span className="block font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">30+</span>
                <span className="text-primary-foreground/90 text-xs md:text-sm uppercase tracking-wider">Years Experience</span>
              </div>
              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary-foreground flex items-center justify-center group hover:bg-primary transition-colors">
                <Play className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary group-hover:text-primary-foreground fill-current transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-subtitle">Get to Know Us</p>
            <h2 className="section-title mb-6">
              We Are the Leader in Landscaping Industry
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Landshaper has been a trusted name in the landscaping industry for over three decades. 
              Our team of certified professionals brings creativity, expertise, and dedication to every project, 
              whether it's a small residential garden or a large commercial landscape.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe that a beautiful outdoor space enhances your quality of life. That's why we're committed 
              to delivering exceptional results that exceed your expectations while respecting your budget and timeline.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Our Services
              </a>
              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
