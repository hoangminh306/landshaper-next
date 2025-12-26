import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "A Complete Solution for",
    title: "Your Landscaping Vision.",
    description: "We provide cost-effective residential and commercial landscaping solutions and specialize in water conservation and drought-tolerant landscapes.",
  },
  {
    image: hero2,
    subtitle: "We Providing landscaping",
    title: "Services Since 1982",
    description: "Over 40 years of experience creating beautiful outdoor spaces for homes and businesses across the nation.",
  },
  {
    image: hero3,
    subtitle: "We Provide Cost-effective",
    title: "Landscaping Solutions",
    description: "Save your time and money with us. By creating an outdoor environment, you're essentially building rooms that are functional, unique and fun.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] lg:h-[100vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-dark/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container-custom flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-16 md:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-primary text-lg md:text-xl font-medium mb-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-dark-foreground mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-base md:text-lg lg:text-xl text-dark-foreground/80 mb-6 md:mb-8 max-w-xl"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#about" className="btn-primary">
                  About Us
                </a>
                <a href="#contact" className="btn-outline border-dark-foreground text-dark-foreground hover:bg-dark-foreground hover:text-dark">
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-dark-foreground/20 hover:bg-primary text-dark-foreground flex items-center justify-center transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-dark-foreground/20 hover:bg-primary text-dark-foreground flex items-center justify-center transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-dark-foreground/50 hover:bg-dark-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
