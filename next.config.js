/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath : '/board',
  env: {
    GQL_API_URL: process.env.GQL_API_URL || 'http://localhost:8080/graphql',
    API_URL: process.env.API_URL || 'http://localhost:8080/'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      }
    ]
  }
};

module.exports = nextConfig;
