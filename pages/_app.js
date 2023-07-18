import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';

const font = localFont({src: './iwata.otf'})

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}