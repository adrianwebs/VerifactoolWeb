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
      // Nuevas Redirecciones para Arquitectura Sitemap v2
      {
        source: "/software-verifactu",
        destination: "/software-facturacion/verifactu",
        permanent: true,
      },
      {
        source: "/mejor-software-verifactu",
        destination: "/comparativas/mejor-software-facturacion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
