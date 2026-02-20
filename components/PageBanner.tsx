import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageBanner = ({
  title,
  breadcrumbs,
  backgroundImage = "/images/hero-1.jpg",
}: PageBannerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-foreground mb-4">
            {title}
          </h1>
          <nav className="flex items-center justify-center gap-2 text-dark-foreground/80">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-primary" />
                )}
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-primary">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
