import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const services = [
  {
    image: service1,
    title: "Design & Planting",
    description: "Environmental problems result when exotic plants are placed in the landscape",
  },
  {
    image: service2,
    title: "Irrigation and Drainage",
    description: "Environmental problems result when exotic plants are placed in the landscape",
  },
  {
    image: service3,
    title: "Snow & Ice Removal",
    description: "Environmental problems result when exotic plants are placed in the landscape",
  },
  {
    image: service4,
    title: "Lawn Care & Maintenance",
    description: "Environmental problems result when exotic plants are placed in the landscape",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Welcome to our Company</p>
            <h2 className="section-title mb-6">Services We Do.</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We provide ongoing property maintenance which includes lawn mowing, fertilizing, 
              spring and fall cleanups, de-thatching, aerating, seeding, mulching, edging, 
              herbicide application, plant health care, snow plowing, pruning, and tree care and removal.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We also provide the design and installation of many landscape construction projects 
              including walkways, steps, retaining walls, patios, veneer stone, planting, trans-planting, 
              drainage systems, lawn renovation and installation, paver driveways, cobblestone edging, and excavation.
            </p>
            <a href="#services" className="btn-primary inline-flex items-center gap-2">
              Go to All Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
