import Head from "next/head";
import { useRouter } from "next/router";
import ProductDetailView, { product } from "@/lib/product-detail-view";

export default function ProductDetailPage() {
  const router = useRouter();
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const productUrl = `${baseUrl}/products/${router.query.slug}`;
  const ogImage = product.images[0];

  return (
    <>
      <Head>
        <title>{product.name} - Dong A - Crop Protection</title>
        <meta name="description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={productUrl} />
        <meta property="product:price:amount" content={String(product.price)} />
        <meta property="product:price:currency" content="VND" />
      </Head>
      <ProductDetailView />
    </>
  );
}
