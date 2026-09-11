import React from "react";
import HeroSection from "../Common/HeroSection";
import AllCategories2 from "./AllCategories2";
import { CATEGORIES2 } from "./components/CategoryData2";
const ProductPage2 = () => {
  return (
    <div style={containerStyle}>
      <title>Instrumentation Valves & Fittings Catalog | Panam Valves</title>
      <meta
        name="description"
        content="Browse our comprehensive range of high-performance instrumentation valves and fittings designed for critical flow control and absolute integrity."
      />

      {/* Open Graph for Social Sharing */}
      <meta
        property="og:title"
        content="Engineering Excellence: Valve & Fitting Solutions | Panam Valves"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769772200/encata-pd-SRqJ3eli-4I-unsplash_jgpfgl.jpg"
      />
      <link rel="canonical" href="https://www.panamvalve.com/products" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Instrumentation Valves & Fittings Catalog | Panam Valves",
          description: "Browse our comprehensive range of high-performance instrumentation valves and fittings designed for critical flow control and absolute integrity.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: CATEGORIES2.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.title,
              url: `https://www.panamvalve.com${c.products[0]?.link ?? `/products/${c.id}`}`,
            })),
          },
        })}
      </script>

      <div style={watermarkStyle} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroSection
          overline="COMPREHENSIVE SOLUTIONS"
          titleMain="Engineered"
          titleAccent="Integrity"
          titleEnd="Across Applications."
          description="Explore our full range of high-performance instrumentation valves and fittings. Designed for absolute integrity, Panam components are the backbone of critical flow control systems worldwide."
          backgroundImage="https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/website-media/banners/danil-shostak-AChwtt3tBPU-unsplash.jpg"
        />

        <AllCategories2 />
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#ffffff",
};

const watermarkStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  backgroundImage: `url("https://res.cloudinary.com/dm9rmmemx/image/upload/v1770828489/3e23e20e-56fd-4194-87f9-318349186f1d_xxoxyc.jpg")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "brightness(1.1) contrast(0.8) grayscale(1) blur(11px)",
  opacity: 0.07,
  mixBlendMode: "multiply",
  pointerEvents: "none",
};

export default ProductPage2;