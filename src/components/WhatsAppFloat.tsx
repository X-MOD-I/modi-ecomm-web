'use client'

import { useState } from 'react'
import { MessageCircle, Phone } from 'lucide-react'

export default function WhatsAppFloat() {
  const whatsappNumber = "919414479697"
  const defaultMessage = "Hello! I'm interested in your pipe fittings, C.P. fittings, tiles and sanitary products. Could you please help me?"

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Smart Floating Contact Hub */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Main Hub Container */}
        <div className="space-y-3">
          
          {/* WhatsApp Button - Always Visible */}
          <div className="group relative">
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center z-10 animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 will-change-transform backdrop-blur-sm bg-opacity-90 group-hover:scale-105 animate-float hover:animate-breathe focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 active:scale-95"
              title="Chat with us on WhatsApp"
              style={{ 
                minWidth: '64px', 
                minHeight: '64px'
              }}
              aria-label="Contact us via WhatsApp - Usually replies instantly"
              role="button"
              tabIndex={0}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 drop-shadow-sm" />
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/30 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              {/* Pulse Ring for Attention */}
              <div className="absolute inset-0 rounded-2xl border-2 border-green-300 animate-ping opacity-20"></div>
            </button>

            {/* Enhanced Tooltip */}
            <div className="hidden lg:block absolute bottom-full right-0 mb-3 px-4 py-3 bg-gray-900/90 backdrop-blur-md text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-2xl border border-white/10 transform -translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Chat with us on WhatsApp</span>
              </div>
              <div className="text-xs text-gray-300 mt-1">Usually replies instantly</div>
              
              {/* Modern Arrow */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900/90"></div>
            </div>
          </div>

          {/* Phone Button for Desktop */}
          <div className="hidden sm:block group relative">
            <a
              href="tel:+919414479697"
              className="relative block bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white p-3 sm:p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 will-change-transform backdrop-blur-sm bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 active:scale-95"
              title="Call us directly"
              style={{ 
                minWidth: '56px', 
                minHeight: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Call us directly - Phone: +91 94144-79697"
              role="link"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <Phone className="w-6 h-6 relative z-10 drop-shadow-sm" />
              
              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-300 animate-ping opacity-20"></div>
            </a>
            
            {/* Phone Tooltip */}
            <div className="hidden lg:block absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900/90 backdrop-blur-md text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
              Call: +91 94144-79697
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Only Call Button */}
      <div className="fixed bottom-4 left-4 sm:hidden z-40">
        <a
          href="tel:+919414479697"
          className="relative block bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 will-change-transform backdrop-blur-sm bg-opacity-90 hover:scale-105 animate-gentle-bounce focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 active:scale-95"
          title="Call us directly"
          style={{ 
            minWidth: '64px', 
            minHeight: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Call us directly - Phone: +91 94144-79697"
          role="link"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
          
          <Phone className="w-7 h-7 relative z-10 drop-shadow-sm" />
          
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-blue-300 animate-ping opacity-20"></div>
        </a>
      </div>
    </>
  )
} 