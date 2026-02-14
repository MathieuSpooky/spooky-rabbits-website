import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/links/7a68",
        destination:
          "https://store.steampowered.com/app/4040060/Model_Kit_Studio/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
