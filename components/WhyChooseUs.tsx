import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  Shield,
  Heart,
  Trophy,
  CheckCircle,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ImageLightbox from "./ui/image-lightbox";
import useEmblaCarousel from "embla-carousel-react";
const features = [
  {
    icon: Award,
    title: "Nhiều năm kinh nghiệm",
    description:
      "Đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực thuốc bảo vệ thực vật.",
  },
  {
    icon: Users,
    title: "Chuyên gia nông nghiệp",
    description:
      "Đội ngũ kỹ sư nông nghiệp tư vấn giải pháp tối ưu cho cây trồng.",
  },
  {
    icon: Shield,
    title: "Chứng nhận chất lượng",
    description:
      "Sản phẩm đạt tiêu chuẩn kiểm định của QUATEST3 và các cơ quan uy tín.",
  },
  {
    icon: Heart,
    title: "Uy tín & Tận tâm",
    description:
      "Luôn đặt quyền lợi khách hàng lên hàng đầu, cam kết chất lượng.",
  },
  {
    icon: Trophy,
    title: "Thương hiệu hàng đầu",
    description:
      "Được tin dùng bởi hàng nghìn đại lý và nông dân trên cả nước.",
  },
  {
    icon: CheckCircle,
    title: "800+ Đại lý phân phối",
    description: "Mạng lưới phân phối rộng khắp các tỉnh thành.",
  },
];

const certificateImages = [
  {
    src: "/images/certificate.png",
    alt: "Giấy chứng nhận chất lượng - QUATEST3 1",
  },
  {
    src: "/images/certificate.png",
    alt: "Giấy chứng nhận chất lượng - QUATEST3 2",
  },
  {
    src: "/images/certificate.png",
    alt: "Giấy chứng nhận chất lượng - QUATEST3 3",
  },
  {
    src: "/images/certificate.png",
    alt: "Giấy chứng nhận chất lượng - QUATEST3 4",
  },
  {
    src: "/images/certificate.png",
    alt: "Giấy chứng nhận chất lượng - QUATEST3 5",
  },
  {
    src: "/images/certificate.png",
    alt: "Giấy chứng nhận chất lượng - QUATEST3 6",
  },
  // Bạn có thể thêm nhiều ảnh khác vào đây, nó sẽ tự thành slide
];

const stats = [
  { value: 800, suffix: "+", label: "Đại lý phân phối" },
  { value: 30, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 150, suffix: "+", label: "Sản phẩm" },
  { value: 100, suffix: "%", label: "Khách hàng hài lòng" },
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
    <span
      ref={ref}
      className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary"
    >
      {count}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const openLightboxAt = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

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
          <div>
            {/* Left - Stats */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider">
                Nhiều năm kinh nghiệm
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-foreground mb-8 leading-tight">
                Tại sao chọn chúng tôi
              </h2>
              <a href="#contact" className="btn-primary mb-12 inline-block">
                Liên hệ ngay
              </a>

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
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
              </div> */}
              {/* Right - Features + Certificate */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-3 md:mb-6"
              >
                <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
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
              </motion.div>
              {/* Certificate */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-dark-foreground/5 border border-dark-foreground/10 p-4 md:p-6"
              >
                <h4 className="font-serif text-lg md:text-xl font-bold text-dark-foreground mb-6 text-center">
                  Giấy Chứng Nhận Chất Lượng
                </h4>
                <div className="relative group/slider">
                  {/* 3. Thay đổi UI ảnh thành Thumbnail Grid, click để mở slide */}
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                      {/* Wrapper cho các slide */}
                      {certificateImages.map((image, index) => (
                        <div
                          key={index}
                          className="flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_25%] pl-8 min-w-0"
                        >
                          <motion.div
                            className="relative group cursor-pointer overflow-hidden border border-dark-foreground/10 hover:border-primary transition-all aspect-[3/4] bg-white p-2"
                            onClick={() => openLightboxAt(index)}
                            whileHover={{ y: -5 }}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Overlay kính lúp khi hover */}
                            <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Search className="w-8 h-8 text-primary-foreground" />
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Nút điều hướng Slider (Chỉ hiện khi hover vào vùng slider) */}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/80 hover:bg-primary text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-lg"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/80 hover:bg-primary text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-lg"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <ImageLightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={certificateImages}
        index={currentImageIndex}
      />
    </section>
  );
};

export default WhyChooseUs;
