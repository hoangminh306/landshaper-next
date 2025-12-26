import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const categories = ["All", "Lawn Care", "Garden Care", "Snow Removal", "Planting"];

const projects = [
  { image: gallery1, title: "Modern Backyard Design", category: "Garden Care" },
  { image: gallery2, title: "Water Feature Installation", category: "Planting" },
  { image: gallery3, title: "Pool Landscaping", category: "Garden Care" },
  { image: gallery4, title: "Front Yard Makeover", category: "Lawn Care" },
  { image: gallery5, title: "Zen Garden Creation", category: "Garden Care" },
  { image: gallery6, title: "Retaining Wall Project", category: "Planting" },
  { image: gallery7, title: "Outdoor Fire Pit Area", category: "Garden Care" },
  { image: gallery8, title: "Cottage Garden Design", category: "Planting" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 md:py-20 lg:py-32 bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="section-subtitle">
            We invested our hard work for people just like you that insist on a great user experience.
          </p>
          <h2 className="section-title">
            Latest<span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/70 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary flex items-center justify-center mx-auto mb-2 md:mb-4">
                      <Plus className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-serif text-xs md:text-base lg:text-lg font-bold text-dark-foreground px-2 md:px-4">
                      {project.title}
                    </h4>
                    <p className="text-primary text-xs md:text-sm">{project.category}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
