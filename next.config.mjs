/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      // Tambahkan domain Imgur di sini agar bisa dioptimasi
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Tidak perlu konfigurasi tambahan untuk favicon karena sudah diatur di metadata
};

export default nextConfig;
