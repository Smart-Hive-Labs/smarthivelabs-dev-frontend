import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/developers",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/hire-us",
        destination: "/quote",
        permanent: true,
      },
      {
        source: "/merchandise",
        destination: "/",
        permanent: true,
      },
      {
        source: "/merchandise/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/open-source",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/open-source",
        permanent: true,
      },
      {
        source: "/hivedemia",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/hivedemia-privacy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hivedemia-termsofuse",
        destination: "/",
        permanent: true,
      },
      {
        source: "/account-deletion",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/careers/internships",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/careers/entry-level",
        destination: "/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
