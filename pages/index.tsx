import Head from "next/head";
import HomeView from "@/lib/home-view";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Landshaper - Professional Landscaping Services Since 1982</title>
      </Head>
      <HomeView />
    </>
  );
}
