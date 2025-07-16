import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

// Konfigurasi font Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta', // Gunakan CSS Variable
});

export const metadata = {
  title: 'TJM Auto Care',
  description: 'Bengkel Nomor 1 di Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jakarta.variable} bg-gray-900 text-gray-100`}>
      <body>{children}</body>
    </html>
  );
}
