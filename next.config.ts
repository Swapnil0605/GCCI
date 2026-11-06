import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/services/tpm-platform",
        destination: "/service4",
        permanent: true,
      },
      {
        source: "/services/iot-solutions",
        destination: "/service3",
        permanent: true,
      },
      {
        source: "/services/industrial-automation",
        destination: "/service2",
        permanent: true,
      },
      {
        source: "/services/fabrication-hub",
        destination: "/service2",
        permanent: true,
      },
      {
        source: "/services/assessments",
        destination: "/service1",
        permanent: true,
      },
      {
        source: "/services/faculty-development",
        destination: "/service1",
        permanent: true,
      },
      {
        source: "/services/custom-solutions",
        destination: "/service3",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/presence",
        destination: "/#alliances",
        permanent: true,
      },
      {
        source: "/training-portal",
        destination: "/training-program",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
