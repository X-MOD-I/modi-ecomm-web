/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'gangabathfittings.com',  // For your real product images
      'picsum.photos'           // For fallback placeholder images
    ],
  },
}

module.exports = nextConfig 