import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Transform your outdoor space with Landshaper. We provide cost-effective residential and commercial landscaping solutions including design, planting, irrigation, and lawn care services."
        />
        <meta
          name="keywords"
          content="landscaping, garden design, lawn care, irrigation, snow removal, outdoor living"
        />
        <meta name="author" content="Landshaper" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Landshaper - Professional Landscaping Services"
        />
        <meta
          property="og:description"
          content="Transform your outdoor space with over 30 years of landscaping excellence."
        />
        <meta
          property="og:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Landshaper - Professional Landscaping Services"
        />
        <meta
          name="twitter:description"
          content="Transform your outdoor space with over 30 years of landscaping excellence."
        />
        <meta
          name="twitter:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
