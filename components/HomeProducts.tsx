import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import ShopProductCard, { Product } from "./ShopProductCard";
import { formatCurrency, ZALO_PHONE_DEFAULT } from "../utils";

const featuredProduct = {
  slug: "thuoc-tru-sau-1",
  name: "Thuốc trừ sâu Aragon 40WG",
  price: 125000,
  description:
    "Sản phẩm thuốc bảo vệ thực vật chất lượng cao, giúp phòng trừ sâu bệnh hiệu quả. Được kiểm định bởi các cơ quan chức năng, đảm bảo an toàn cho cây trồng và môi trường canh tác.",
  images: [
    "/images/sample-product.png",
    "/images/sample-1.png",
    "/images/sample-2.png",
    "/images/sample-3.png",
  ],
};

const otherProducts: Product[] = [
  {
    slug: "thuoc-tru-sau-2",
    name: "Thuốc trừ sâu",
    price: 150000,
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "thuoc-tru-sau-4",
    name: "Thuốc trừ sâu",
    price: 200000,
    image: "/images/gallery-4.jpg",
  },
  {
    slug: "thuoc-tru-sau-6",
    name: "Thuốc trừ sâu",
    price: 175000,
    image: "/images/gallery-6.jpg",
  },
  {
    slug: "thuoc-tru-sau-7",
    name: "Thuốc trừ sâu",
    price: 130000,
    image: "/images/gallery-7.jpg",
  },
];

export const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          {/* <p className="section-subtitle">Sản phẩm bán chạy</p> */}
          <h2 className="section-title">
            Sản Phẩm <span className="text-primary">Nổi Bật</span>
          </h2>
        </motion.div>

        {/* Product Detail Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden mb-4 bg-background">
              <img
                src={featuredProduct.images[selectedImage]}
                alt={featuredProduct.name}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-scale-down transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {featuredProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${featuredProduct.name} ${index + 1}`}
                    className="w-full h-[60px] md:h-[80px] lg:h-[100px] object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-start"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              {featuredProduct.name}
            </h3>

            {/* <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-bold text-primary">
                {formatCurrency(featuredProduct.price)}đ
              </span>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                Mô tả sản phẩm
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {featuredProduct.description}
              </p>
            </div> */}

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={async () => {
                  const productUrl = `${window.location.origin}/products/${featuredProduct.slug}`;
                  try {
                    await navigator.clipboard.writeText(productUrl);
                    toast.success("Đã copy link sản phẩm!");
                  } catch {
                    toast.error("Không thể copy link");
                  }
                  window.open(
                    `https://zalo.me/${ZALO_PHONE_DEFAULT}`,
                    "_blank"
                  );
                }}
                className="btn-primary flex items-center gap-2 cursor-pointer"
              >
                <img src="/icon-zalo.png" alt="Zalo" className="w-5 h-5" />
                Liên hệ Zalo
              </button>

              <Link
                href={`/products/${featuredProduct.slug}`}
                className="btn-outline flex items-center gap-2"
              >
                Xem chi tiết
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const OtherProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          {/* <p className="section-subtitle">Khám phá thêm</p> */}
          <h2 className="section-title">
            Sản Phẩm <span className="text-primary">Khác</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ShopProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/products"
            className="btn-primary inline-flex items-center gap-2 mt-10"
          >
            Xem tất cả sản phẩm
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
