import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatCurrency } from "../utils";
// import { Minus, Plus, ShoppingCart, Share2 } from "lucide-react";

interface ProductDetailProps {
  product: {
    name: string;
    price: number;
    originalPrice?: number;
    inStock: boolean;
    description: string;
    images: string[];
  };
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const ref = useRef(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollThumbs = useCallback((direction: "left" | "right") => {
    if (!thumbRef.current) return;
    const scrollAmount = thumbRef.current.clientWidth * 0.6;
    thumbRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!thumbRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollLeft.current = thumbRef.current.scrollLeft;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !thumbRef.current) return;
    const walk = e.clientX - startX.current;
    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
      thumbRef.current.style.cursor = "grabbing";
    }
    if (hasDragged.current) {
      e.preventDefault();
      thumbRef.current.scrollLeft = scrollLeft.current - walk;
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
    if (thumbRef.current) thumbRef.current.style.cursor = "grab";
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="relative overflow-hidden mb-4 bg-secondary">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-scale-down transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            <div className="relative group/thumbs">
              {product.images.length > 4 && (
                <>
                  <button
                    onClick={() => scrollThumbs("left")}
                    className="absolute left-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover/thumbs:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollThumbs("right")}
                    className="absolute right-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover/thumbs:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
              <div
                ref={thumbRef}
                className="flex gap-3 overflow-x-auto scrollbar-hide select-none"
                style={{ cursor: "grab" }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              >
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (hasDragged.current) return;
                      setSelectedImage(index);
                    }}
                    className={`relative overflow-hidden transition-all duration-300 flex-shrink-0 w-[calc(25%-9px)] ${
                      selectedImage === index
                        ? "ring-2 ring-primary"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-[60px] md:h-[80px] lg:h-[100px] object-cover"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              {product.name}
            </h2>

            {/* Stock Status */}
            {/* <div className="mb-4">
              {product.inStock ? (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
                  Còn hàng
                </span>
              ) : (
                <span className="inline-block px-3 py-1 bg-destructive/10 text-destructive text-sm font-semibold uppercase tracking-wider">
                  Hết hàng
                </span>
              )}
            </div> */}

            {/* Price */}
            {/* <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-bold text-primary">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div> */}

            {/* Description */}
            {/* <div className="mb-8">
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                Mô tả sản phẩm
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div> */}

            <button className="btn-primary flex items-center gap-2">
              {/* <ShoppingCart className="w-5 h-5" /> */}
              Liên hệ Zalo
            </button>

            {/* Separator */}
            {/* <div className="border-t border-border mb-8" /> */}

            {/* Quantity & Add to Cart */}
            {/* <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-12 flex items-center justify-center border-x border-border font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button className="btn-primary flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add To Cart
              </button>
            </div> */}

            {/* Share */}
            {/* <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider">
                <Share2 className="w-4 h-4" />
                Share Now
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <img src="/icon-zalo.png" alt="Zalo" className="w-5 h-5" />
                </a>
              </div>
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-2 w-10/12 mx-auto"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-3">
                Mô tả sản phẩm
              </h3>
              <div
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
