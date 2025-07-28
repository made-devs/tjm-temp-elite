import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'TJM Auto Care',
  description: 'Bengkel Nomor 1 di Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jakarta.variable} text-gray-100`}>
      <body>
        {/* SmoothScroll hanya dipanggil untuk aktivasi, tidak membungkus */}
        <SmoothScroll />
        <Header />
        <main>{children}</main>{' '}
        {/* Praktik terbaik adalah membungkus konten utama dengan <main> */}
        <Footer />
      </body>
    </html>
  );
}
