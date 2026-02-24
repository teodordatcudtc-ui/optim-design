/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      { source: "/categorii", destination: "/produse", permanent: true },
      { source: "/categorii/:slug", destination: "/produse?categorie=:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
