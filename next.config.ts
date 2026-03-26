import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/que-es-verifactu-para-que-sirve",
        destination: "/verifactu/que-es",
        permanent: true,
      },
      {
        source: "/que-es-verifactu-para-que-sirve/",
        destination: "/verifactu/que-es",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
