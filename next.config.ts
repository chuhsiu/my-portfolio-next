import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
