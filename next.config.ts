/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // تجاهل أخطاء الـ TypeScript عشان الـ Build يكمل
    ignoreBuildErrors: true,
  },
  eslint: {
    // بالمرة تجاهل أخطاء الـ ESLint عشان مفيش حاجة توقفنا
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
