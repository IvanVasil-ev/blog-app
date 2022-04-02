// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const { env } = process;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_NAME: env.APP_NAME,
    BASE_URL: env.BASE_URL,
  },
};

module.exports = nextConfig;
