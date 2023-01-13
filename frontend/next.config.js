/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BACKEND_URL: 'https://hts-backend-hgu5aotupq-as.a.run.app',
  },
};
