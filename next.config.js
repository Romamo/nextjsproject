// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

const moduleExports = {
  unstable_runtimeJS: false,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = moduleExports;
