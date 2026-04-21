import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SplashScreen from '@/components/SplashScreen'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = "https://crypton-coral.vercel.app/" // 👈 update after deploying

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: { icon: '/icon.svg' },
  title: 'Crypton | Collective Intelligence OS',
  description: 'An operating system for collective intelligence',

  openGraph: {
    title: 'Crypton',
    description: 'The decentralized ecosystem for the next generation of financial intelligence. Explore the core of Web3 with high-performance tools and institutional-grade security.',
    url: BASE_URL,
    siteName: 'Crypton',
    images: [
      {
        url: '/images/og-image.png', // ✅ metadataBase makes this absolute automatically
        width: 1200,
        height: 630,
        alt: 'Crypton - Collective Intelligence OS',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Crypton',
    description: 'The decentralized ecosystem for the next generation of financial intelligence. Explore the core of Web3 with high-performance tools and institutional-grade security.',
    images: ['/images/og-image.png'], // ✅ same image, metadataBase handles it
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SplashScreen />
        {children}
      </body>
    </html>
  )
}