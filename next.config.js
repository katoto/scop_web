const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // experimental: {
  //   turbopack: {},
  // }
};

module.exports = withNextIntl(nextConfig); 