/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "*" },
                ]
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/server/:path*',
                destination: 'http://127.0.0.1:5328/:path*',
            },
        ];
    },
    redirects() {
        return [
            {
                source: '/sign-in',
                destination: '/api/auth/login',
                permanent: true
            },
            {
                source: '/sign-up',
                destination: '/api/auth/register',
                permanent: true
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn1.koinbazar.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'koinbx.com',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
