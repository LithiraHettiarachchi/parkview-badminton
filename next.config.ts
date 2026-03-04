/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dashify.aurbyn.com',
            },
        ],
    },
};

export default nextConfig;
