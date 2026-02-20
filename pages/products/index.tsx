import Head from "next/head";
import ShopView from "@/lib/shop-view";

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Shop - Landshaper</title>
      </Head>
      <ShopView />
    </>
  );
}
