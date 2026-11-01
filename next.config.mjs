/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/mihomo-zzz-',
    assetPrefix: '/mihomo-zzz-', 
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
