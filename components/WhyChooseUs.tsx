import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Shield, Heart, Trophy, CheckCircle } from "lucide-react";

const features = [
  { icon: Award, title: "30 Years of Experience", description: "We have a range of water fountain specialists can design the better solution for you." },
  { icon: Users, title: "True Lawn Specialists", description: "We have a range of water fountain specialists can design the better solution for you." },
  { icon: Shield, title: "Licensed & Insured", description: "We have a range of water fountain specialists can design the better solution for you." },
  { icon: Heart, title: "Honest and Dependable", description: "We have a range of water fountain specialists can design the better solution for you." },
  { icon: Trophy, title: "Award Winning Company", description: "We have a range of water fountain specialists can design the better solution for you." },
  { icon: CheckCircle, title: "800+ Successful Projects", description: "We have a range of water fountain specialists can design the better solution for you." },
];

const stats = [
  { value: 800, suffix: "+", label: "Successful Projects" },
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Expert Team Members" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("/images/why-choose-bg.jpg")` }}
      >
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Stats */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider">30 Years of Experience</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-foreground mb-8 leading-tight">
                Why Choosing Landshaper
              </h2>
              <a href="#contact" className="btn-primary mb-12 inline-block">
                Contact Us
              </a>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-center p-3 md:p-4 lg:p-6 bg-dark-foreground/5 border border-dark-foreground/10"
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <p className="text-dark-foreground/70 mt-1 md:mt-2 text-xs md:text-sm lg:text-base">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Features + Certificate */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 lg:gap-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group p-3 md:p-4 lg:p-6 bg-dark-foreground/5 border border-dark-foreground/10 hover:bg-primary transition-all duration-300 cursor-pointer"
                  >
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary group-hover:text-primary-foreground transition-colors mb-2 md:mb-3 lg:mb-4" />
                    <h4 className="font-serif text-sm md:text-base lg:text-lg font-bold text-dark-foreground group-hover:text-primary-foreground transition-colors mb-1 md:mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-dark-foreground/70 group-hover:text-primary-foreground/80 text-xs md:text-sm transition-colors hidden md:block">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Certificate */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-dark-foreground/5 border border-dark-foreground/10 p-4 md:p-6"
              >
                <h4 className="font-serif text-lg md:text-xl font-bold text-dark-foreground mb-4 text-center">
                  Giấy Chứng Nhận Chất Lượng
                </h4>
                <div className="flex justify-center">
                  <img
                    src="/images/certificate.png"
                    alt="Giấy chứng nhận chất lượng - QUATEST3"
                    className="max-w-full h-auto max-h-[400px] object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
