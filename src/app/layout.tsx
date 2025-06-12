import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bath Gallery Store - Premium Bath Fittings & Accessories',
  description: 'Discover premium bath fittings, accessories, and fixtures at Bath Gallery Store. Quality products for your bathroom renovation needs.',
  keywords: ['bath fittings', 'bathroom accessories', 'bathroom fixtures', 'bath gallery'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  )
} 