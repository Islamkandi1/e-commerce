import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cndbtgaifheduxginlre.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    formats: ["image/avif", "image/webp"], 
  },
};

export default nextConfig;
