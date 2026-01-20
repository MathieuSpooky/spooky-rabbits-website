import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/links/7a68",
        destination: "https://store.steampowered.com/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
