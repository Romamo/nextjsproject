// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

const moduleExports = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = moduleExports;
