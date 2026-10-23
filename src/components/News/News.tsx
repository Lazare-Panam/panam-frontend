import NewsCards from "./components/NewsCards"
import { blogs } from "./components/blogData"
const News = () => {
  return (
    <>
      <title>Technical Insights & Industry News | Panam Valves Blog</title>
      <meta name="description" content="Explore expert articles on high-pressure instrumentation, valve maintenance, hydrogen safety standards, and the latest innovations from Panam Valves." />
      {/* Social Media Preview Tags (Open Graph) */}
      <meta property="og:title" content="Engineering the Future of Flow Control | Panam Valves" />
      <meta property="og:description" content="Stay informed on technical breakthroughs and regulatory shifts in the valve industry." />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/blog/andrew-neel-cckf4TsHAuw-unsplash.jpg" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.panamvalve.com/blog" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Technical Insights & Industry News | Panam Valves Blog",
          description: "Explore expert articles on high-pressure instrumentation, valve maintenance, hydrogen safety standards, and the latest innovations from Panam Valves.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: blogs.map((post, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: post.title,
              url: `https://www.panamvalve.com/blog/${post.slug}`,
            })),
          },
        })}
      </script>
      <NewsCards
        hero={{
          overline: "INSIGHTS & INNOVATION",
          titleMain: "Engineering the",
          titleAccent: "Future",
          titleEnd: "of Flow Control.",
          description: "Stay informed on the latest technical breakthroughs, regulatory shifts, and Panam Valves' ongoing commitment to extreme-pressure safety.",
        }}
      />
    </>
  )
}
export default News
