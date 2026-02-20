import { Eye, Heart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { formatCurrency, ZALO_PHONE_DEFAULT } from "../utils";

export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

interface ShopProductCardProps {
  product: Product;
  zaloPhone?: string;
}

const ShopProductCard = ({
  product,
  zaloPhone = ZALO_PHONE_DEFAULT,
}: ShopProductCardProps) => {
  return (
    <div className="group mb-[50px] border border-border bg-background">
      {/* Image Box */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[220px] md:h-[260px] object-cover"
        />

        {/* Badge - Triangle corner */}
        {product.badge && (
          <div className="absolute top-[10px] left-[10px] z-10">
            <div className="relative">
              <div
                className="w-0 h-0"
                style={{
                  borderTop: "35px solid hsl(var(--primary))",
                  borderLeft: "35px solid hsl(var(--primary))",
                  borderRight: "35px solid transparent",
                  borderBottom: "35px solid transparent",
                }}
              />
              <span
                className="absolute top-0 left-0 text-white text-[16px] font-serif font-bold -rotate-45"
                style={{ transformOrigin: "70% 35%" }}
              >
                {product.badge}
              </span>
            </div>
          </div>
        )}

        {/* Hover Overlay - white overlay like original */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/90 transition-colors duration-400 flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full border-2 border-transparent group-hover:border-secondary transition-colors duration-400">
            <div className="flex items-center gap-3">
              <Link
                href={`/products/${product.slug}`}
                className="w-[50px] h-[50px] rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 translate-y-[53px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-in-out hover:bg-dark"
              >
                <Eye className="w-4 h-4" />
              </Link>
              {/* <button className="w-[50px] h-[50px] rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 translate-y-[53px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-in-out delay-75 hover:bg-dark">
                <Heart className="w-4 h-4" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Text Box */}
      <div className="text-center p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-[18px] leading-[42px] font-bold text-foreground hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center font-serif text-[20px] leading-[24px] font-bold">
          <span className="text-primary">{formatCurrency(product.price)}đ</span>
          {product.originalPrice && (
            <del className="text-muted-foreground text-[14px] font-normal align-super ml-2">
              {formatCurrency(product.originalPrice)}đ
            </del>
          )}
        </div>

        {/* "Liên hệ Zalo" button */}
        <button
          onClick={async () => {
            const productUrl = `${window.location.origin}/products/${product.slug}`;
            try {
              await navigator.clipboard.writeText(productUrl);
              toast.success("Đã copy link sản phẩm!");
            } catch {
              toast.error("Không thể copy link");
            }
            window.open(`https://zalo.me/${zaloPhone}`, "_blank");
          }}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-semibold uppercase tracking-wider text-sm leading-[45px] border border-secondary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer"
        >
          <img src="/icon-zalo.png" alt="Zalo" className="w-5 h-5" />
          Liên hệ Zalo
        </button>
      </div>
    </div>
  );
};

export default ShopProductCard;
