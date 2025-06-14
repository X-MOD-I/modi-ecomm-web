import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Modi Iron - Premium Pipe Fittings, C.P. Fittings, Tiles & Sanitary Products',
  description: 'Quality pipe fittings, C.P. fittings, tiles and sanitary products in Sri Ganganagar. Authorized dealer of Ganga Bath Fittings and TORA Showers with 30+ years experience.',
  keywords: ['pipe fittings', 'cp fittings', 'bathroom fittings', 'tiles', 'sanitary products', 'sri ganganagar', 'new modi iron'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
          {children}
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  )
} 