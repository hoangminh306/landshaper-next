import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    image: "/images/testimonial-1.jpg",
    name: "Anh Nguyễn Văn H.",
    role: "Đại lý cấp 1 - An Giang",
    // company: "Portland, OR",
    text: "Sản phẩm ổn định, hiệu quả rõ rệt qua từng vụ mùa. Đội ngũ kỹ thuật hỗ trợ rất sát, giúp đại lý tự tin tư vấn cho nông dân.",
    rating: 5,
  },
  {
    image: "/images/testimonial-2.jpg",
    name: "Chị Trần Thị M.",
    role: "Chủ cửa hàng VTNN – Đồng Tháp",
    // company: "Chen Properties LLC",
    text: "Chúng tôi hợp tác hơn 3 năm và luôn đánh giá cao chất lượng cũng như tính nhất quán của sản phẩm. Tỷ lệ khách quay lại rất tốt.",
    rating: 5,
  },
  {
    image: "/images/testimonial-3.jpg",
    name: "Anh Lê Quang T.",
    role: "Nhà phân phối – Bình Dương",
    // company: "Seattle, WA",
    text: "Danh mục sản phẩm đa dạng, dễ bán, phù hợp nhiều loại cây trồng. Chính sách cho đại lý rõ ràng và minh bạch.",
    rating: 5,
  },
  {
    image: "/images/testimonial-3.jpg",
    name: "Chị Phạm Ngọc L.",
    role: "Đại lý VTNN – Long An",
    // company: "Seattle, WA",
    text: "Điểm cộng lớn là tài liệu kỹ thuật đầy đủ, dễ hiểu. Nhân viên hỗ trợ nhanh, giúp đại lý mới triển khai rất thuận lợi.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-secondary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <p className="section-subtitle">What Our Clients Say</p> */}
          <h2 className="section-title">Đánh giá từ khách hàng</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full bg-primary/5 border border-primary/10 p-6 md:p-10 relative"
              >
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/20 absolute top-4 right-4" />
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary"
                        />
                      )
                    )}
                  </div>

                  <p className="text-lg md:text-xl lg:text-2xl text-foreground italic mb-6 md:mb-8 leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-foreground text-base md:text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
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
                    index === currentIndex
                      ? "bg-primary w-6 md:w-8"
                      : "bg-muted hover:bg-primary/50"
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
