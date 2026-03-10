import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, User, ArrowRight, MessageSquare } from "lucide-react";

const news = [
  {
    image: "/images/gallery-1.jpg",
    date: "20/12/2024",
    author: "Admin",
    comments: 3,
    title: "10 mẹo chăm sóc vườn cây mùa đông",
    excerpt:
      "Tìm hiểu cách giữ cho vườn cây luôn xanh tốt ngay cả trong những tháng lạnh nhất trong năm...",
  },
  {
    image: "/images/gallery-2.jpg",
    date: "15/12/2024",
    author: "Admin",
    comments: 5,
    title: "Lợi ích của thuốc bảo vệ thực vật chất lượng",
    excerpt:
      "Khám phá lý do tại sao đầu tư vào sản phẩm chất lượng cao giúp nâng cao năng suất cây trồng...",
  },
  {
    image: "/images/gallery-3.jpg",
    date: "10/12/2024",
    author: "Admin",
    comments: 2,
    title: "Tiết kiệm nước trong canh tác nông nghiệp",
    excerpt:
      "Khám phá các phương pháp tưới tiêu bền vững giúp tiết kiệm nước mà vẫn đảm bảo cây trồng phát triển tốt...",
  },
];

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          {/* <p className="section-subtitle">Latest Updates</p> */}
          <h2 className="section-title">Hoạt động</h2>
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
                    {item.comments} Bình luận
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
                  Xem thêm
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
