import type { Metadata } from 'next'
import { Cinzel, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: '--font-cinzel'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Kuldeep Yadav | Personal Portfolio',
  description: 'Digital Creator & AI Concept Artist - Ram Ram bhaiyo! Main Kuldeep Yadav, ek digital content creator aur AI artist hoon.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${poppins.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
