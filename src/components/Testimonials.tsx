import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    image: testimonial1,
    name: "Sarah Johnson",
    role: "Homeowner",
    company: "Portland, OR",
    text: "Landshaper transformed our backyard into a stunning oasis. Their attention to detail and professional approach exceeded our expectations. The team was punctual, respectful, and delivered exactly what they promised.",
    rating: 5,
  },
  {
    image: testimonial2,
    name: "Michael Chen",
    role: "Business Owner",
    company: "Chen Properties LLC",
    text: "We've been using Landshaper for all our commercial properties for over 5 years. Their consistent quality and reliable service have made them an invaluable partner. Highly recommend for any landscaping needs!",
    rating: 5,
  },
  {
    image: testimonial3,
    name: "Emily & David Martinez",
    role: "Homeowners",
    company: "Seattle, WA",
    text: "From the initial consultation to the final walkthrough, the entire experience was fantastic. Our garden is now the envy of the neighborhood. The irrigation system they installed has saved us so much time and water.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-32 bg-secondary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">What Our Clients Say</p>
          <h2 className="section-title">Testimonials</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background p-5 md:p-8 lg:p-12"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover"
                    />
                    <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-primary flex items-center justify-center">
                      <Quote className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-3 md:mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <h4 className="font-serif text-lg md:text-xl font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary font-medium text-sm md:text-base">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-2 md:gap-4 mt-6 md:mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <div className="flex items-center gap-1.5 md:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-6 md:w-8" : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
