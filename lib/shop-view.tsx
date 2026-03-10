import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopProductCard, { Product } from "@/components/ShopProductCard";
import { Breadcrumb } from "../components/breadcrumb";

const allProducts: Product[] = [
  {
    slug: "thuoc-tru-sau-1",
    name: "Thuốc trừ sâu",
    price: 125000,
    originalPrice: 190000,
    image: "/images/gallery-1.jpg",
    badge: "Sale",
  },
  {
    slug: "thuoc-tru-sau-2",
    name: "Thuốc trừ sâu",
    price: 150000,
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "thuoc-tru-sau-3",
    name: "Thuốc trừ sâu",
    price: 95000,
    originalPrice: 190000,
    image: "/images/gallery-3.jpg",
    badge: "50%",
  },
  {
    slug: "thuoc-tru-sau-4",
    name: "Thuốc trừ sâu",
    price: 200000,
    image: "/images/gallery-4.jpg",
  },
  {
    slug: "thuoc-tru-sau-5",
    name: "Thuốc trừ sâu",
    price: 60000,
    originalPrice: 200000,
    image: "/images/gallery-5.jpg",
    badge: "70%",
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
  {
    slug: "thuoc-tru-sau-8",
    name: "Thuốc trừ sâu",
    price: 145000,
    originalPrice: 220000,
    image: "/images/gallery-8.jpg",
    badge: "Sale",
  },
  {
    slug: "thuoc-tru-sau-9",
    name: "Thuốc trừ sâu",
    price: 110000,
    image: "/images/service-1.jpg",
  },
  {
    slug: "thuoc-tru-sau-10",
    name: "Thuốc trừ sâu",
    price: 185000,
    image: "/images/service-2.jpg",
  },
  {
    slug: "thuoc-tru-sau-11",
    name: "Thuốc trừ sâu",
    price: 99000,
    originalPrice: 150000,
    image: "/images/service-3.jpg",
    badge: "Sale",
  },
  {
    slug: "thuoc-tru-sau-12",
    name: "Thuốc trừ sâu",
    price: 210000,
    image: "/images/service-4.jpg",
  },
];

const ITEMS_PER_PAGE = 12;

const ShopView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const sortedProducts = useMemo(() => {
    const sorted = [...allProducts];
    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sorted;
  }, [sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Breadcrumb
          breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]}
        />

        <section className="py-12 md:py-20">
          <div className="container-custom">
            {/* Sorting Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <p className="text-muted-foreground text-sm">
                Hiển thị {startIndex + 1}-
                {Math.min(endIndex, sortedProducts.length)} trên{" "}
                {sortedProducts.length} sản phẩm
              </p>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-border bg-background text-foreground text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
                <option value="name">Theo tên</option>
              </select>
            </div>

            {/* Product Grid */}
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {currentProducts.map((product, index) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <ShopProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 flex items-center justify-center border text-sm font-semibold transition-all duration-300 ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </nav>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopView;
