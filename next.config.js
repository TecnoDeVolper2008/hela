const path = require('path');

module.exports = {
  reactStrictMode: true,

  // To allow serving static videos from the "public/videos" directory
  staticPageGenerationTimeout: 60,

  // Configure custom paths for public assets
  webpack(config) {
    config.resolve.alias['@videos'] = path.join(__dirname, 'public/videos');
    return config;
  },

  // For handling videos and other large files
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
