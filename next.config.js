/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      { 
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '*/**'
      }
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

module.exports = nextConfig
