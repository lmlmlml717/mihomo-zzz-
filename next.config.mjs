/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/mihomo-zzz-/',
    assetPrefix: '/mihomo-zzz-/', // 确保所有静态资源(图片/JS/CSS)带前缀
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
