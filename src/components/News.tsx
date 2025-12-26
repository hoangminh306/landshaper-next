import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, User, ArrowRight, MessageSquare } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const news = [
  {
    image: gallery1,
    date: "Dec 20, 2024",
    author: "Admin",
    comments: 3,
    title: "10 Tips for a Beautiful Winter Garden",
    excerpt: "Learn how to keep your garden looking great even during the coldest months of the year...",
  },
  {
    image: gallery2,
    date: "Dec 15, 2024",
    author: "Admin",
    comments: 5,
    title: "The Benefits of Professional Landscaping",
    excerpt: "Discover why investing in professional landscaping services can transform your property...",
  },
  {
    image: gallery3,
    date: "Dec 10, 2024",
    author: "Admin",
    comments: 2,
    title: "Water Conservation in Your Landscape",
    excerpt: "Explore sustainable irrigation practices that save water while keeping your garden thriving...",
  },
];

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="section-subtitle">Latest Updates</p>
          <h2 className="section-title">News & Articles</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-background border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {item.comments} Comments
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
