import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'PT. Tropical Agro Nusantara | Premium Cassava Products from Indonesia',
  description: 'Trusted Indonesian exporter of premium cassava-based products including Mocaf Flour and Tiwul. Quality ingredients for food manufacturers, importers, and distributors worldwide.',
  generator: 'Codex',
  icons: {
    icon: [
      {
        url: '/branding/logo-company.jpeg',
      },
    ],
    apple: '/branding/logo-company.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
