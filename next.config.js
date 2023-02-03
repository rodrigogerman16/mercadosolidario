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
      },
      { 
        protocol: 'https',
        hostname: 'th.bing.com',
        port: '',
        pathname: '*/**'
      },
      { 
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '*/**'
      },
      { 
        protocol: 'https',
        hostname: 'res.cloudinary.com',
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


module.exports = nextConfig;
