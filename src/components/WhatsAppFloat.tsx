'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const whatsappNumber = "919414479697"
  const defaultMessage = "Hello! I'm interested in your pipe fittings, C.P. fittings, tiles and sanitary products. Could you please help me?"

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Mobile-optimized WhatsApp Float */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
          title="Chat with us on WhatsApp"
          style={{ minWidth: '56px', minHeight: '56px' }} // Better touch targets
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Mobile-friendly Tooltip */}
        <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>

      {/* Mobile Call Button */}
      <div className="fixed bottom-4 left-4 sm:hidden z-50">
        <a
          href="tel:+919414479697"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          title="Call us directly"
          style={{ minWidth: '56px', minHeight: '56px' }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>
      </div>
    </>
  )
} 