import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SplashScreen from '@/components/SplashScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/icon.svg',
  },

  title: 'Crypton  Collective Intelligence OS',
  description: 'An operating system for collective intelligence',

  openGraph: {
    title: 'Crypton',
    description: 'The decentralized ecosystem for the next generation of financial intelligence. Explore the core of Web3 with high-performance tools and institutional-grade security.',
    url: 'https://yourwebsite.com',  // ✅ your actual domain
    siteName: 'Crypton',
    images: [
      {
        url: '/images/og-image.png',  // ✅ must be absolute URL
        width: 1200,
        height: 630,
        alt: 'Crypton',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypton',
    description: 'Your description here',
    images: ['https://yourwebsite.com/og-image.png'],  // ✅ must be absolute URL
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