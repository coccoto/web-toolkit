/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material']
    }
}

module.exports = nextConfig