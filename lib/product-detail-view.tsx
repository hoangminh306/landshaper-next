import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import RelatedProducts from "@/components/RelatedProducts";
import { Breadcrumb } from "@/components/breadcrumb";

export const product = {
  name: "Thuốc trừ sâu",
  price: 125000,
  inStock: true,
  description:
    "Know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues desires to occasionally circumstances. Professional landscaping equipment designed for precision trimming and garden maintenance.",
  images: [
    "/images/sample-product.png",
    "/images/service-2.jpg",
    "/images/service-3.jpg",
    "/images/service-4.jpg",
  ],
};

const relatedProducts = [
  {
    slug: "drainage-cleaner-1",
    name: "Drainage Cleaner",
    price: 19000,
    originalPrice: 29000,
    image: "/images/gallery-1.jpg",
    badge: "Sale",
  },
  {
    slug: "drainage-cleaner-2",
    name: "Drainage Cleaner",
    price: 19000,
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "drainage-cleaner-3",
    name: "Drainage Cleaner",
    price: 19000,
    originalPrice: 40000,
    image: "/images/gallery-3.jpg",
    badge: "50%",
  },
  {
    slug: "drainage-cleaner-4",
    name: "Drainage Cleaner",
    price: 19000,
    image: "/images/gallery-4.jpg",
  },
];

const ProductDetailView = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Breadcrumb
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/products" },
            { label: product.name },
          ]}
        />
        <ProductDetail product={product} />
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailView;
