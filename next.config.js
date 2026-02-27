/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    minimumCacheTTL: 60,
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/produse", destination: "/lucrari", permanent: true },
      { source: "/produse/:path*", destination: "/lucrari", permanent: true },
      { source: "/categorii", destination: "/lucrari", permanent: true },
      { source: "/categorii/:slug", destination: "/lucrari?categorie=:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
