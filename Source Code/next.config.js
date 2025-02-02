// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack(config) {
//         config.infrastructureLogging = { debug: /PackFileCache/ }
//         return config;
//     }
// }

// module.exports = nextConfig

module.exports = {
    webpack: (config) => {
      config.resolve.fallback = { fs: false, path: false };

      return config;
    },
  };