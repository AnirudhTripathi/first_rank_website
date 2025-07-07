/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Ensure static files in the public directory are served
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|mp4|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
