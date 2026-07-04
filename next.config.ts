import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/san-pedro",
        destination: "/salsa-y-bachata-fuego",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
