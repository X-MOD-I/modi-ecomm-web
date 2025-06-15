'use client'

import { MessageCircle, Phone } from 'lucide-react'

export default function WhatsAppFloat() {
  const whatsappNumber = "919414479697"
  const defaultMessage = "Hello! I&apos;m interested in your pipe fittings, C.P. fittings, tiles and sanitary products. Could you please help me?"

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Mobile-optimized WhatsApp Float */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-colors duration-200 will-change-transform"
          title="Chat with us on WhatsApp"
          style={{ minWidth: '56px', minHeight: '56px' }}
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Mobile-friendly Tooltip */}
        <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>

      {/* Mobile Call Button */}
      <div className="fixed bottom-4 left-4 sm:hidden z-40">
        <a
          href="tel:+919414479697"
          className="block bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-colors duration-200 will-change-transform"
          title="Call us directly"
          style={{ 
            minWidth: '56px', 
            minHeight: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  )
} 