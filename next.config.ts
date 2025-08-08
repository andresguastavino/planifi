import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'en'
    }
};

export default nextConfig;
