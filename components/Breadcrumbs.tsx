import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-cover bg-center">
      <div className="relative container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <nav className="flex items-center justify-center gap-2 text-dark-foreground/80">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-4 h-4 text-primary" />}
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

export default Breadcrumbs;
