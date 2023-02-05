/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  reactStrictMode: true,
  images: {
    remotePatterns:[
      { 
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '*/**'
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/railway-backend/:path*',
        destination: 'https://pf-backend-mercadosolidario-production.up.railway.app/:path*' // Proxy to Backend
      }
    ]
  }
}


module.exports = nextConfig;
