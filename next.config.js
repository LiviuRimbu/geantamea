const createNextIntlPlugin = require("next-intl/plugin");

const nextConfig = {
  experimental: {
    turbo: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "15ad4da5370805cc9bb75182ec31fd6a.r2.cloudflarestorage.com",
      },
      {
        protocol: "https",
        hostname: "pub-e117fadd7c40493c9c7e744eea4b12a6.r2.dev",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);
