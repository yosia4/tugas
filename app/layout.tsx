import '@/app/ui/global.css';
<<<<<<< HEAD
import { inter } from '@/app/ui/fonts';
=======
import { Inter } from 'next/font/google';
import { inter } from './ui/fonts';
>>>>>>> 6ee1da485abf7df8017e0952223ab801b134751a

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} antialiased`}>{children}</body>
=======
      <body className= {`${inter.className} antialiased`}>{children}</body>
>>>>>>> 6ee1da485abf7df8017e0952223ab801b134751a
    </html>
  );
}
