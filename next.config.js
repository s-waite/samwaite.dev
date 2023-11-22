/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/skills',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
