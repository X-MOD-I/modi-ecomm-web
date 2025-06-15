'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Mail, Phone } from 'lucide-react'

export default function ComingSoonPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || 'this page'
  
  const pageInfo = {
    shipping: {
      title: 'Shipping Information',
      description: 'Details about our delivery services and shipping policies',
      icon: '🚚'
    },
    returns: {
      title: 'Returns & Exchanges',
      description: 'Information about our return and exchange policies',
      icon: '↩️'
    },
    warranty: {
      title: 'Warranty Information',
      description: 'Details about product warranties and coverage',
      icon: '🛡️'
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Common questions and answers about our products and services',
      icon: '❓'
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'Information about how we handle your personal data',
      icon: '🔒'
    },
    terms: {
      title: 'Terms of Service',
      description: 'Terms and conditions for using our services',
      icon: '📋'
    },
    sitemap: {
      title: 'Sitemap',
      description: 'Complete overview of all pages on our website',
      icon: '🗺️'
    }
  }

  const currentPage = pageInfo[page as keyof typeof pageInfo] || {
    title: 'Page',
    description: 'This section',
    icon: '📄'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
          {/* Icon */}
          <div className="text-6xl mb-6">
            {currentPage.icon}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {currentPage.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8">
            {currentPage.description} is currently under development
          </p>
          
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Clock className="w-4 h-4 mr-2" />
            Coming Soon
          </div>
          
          {/* Description */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              We're working hard to bring you comprehensive information about our services. 
              In the meantime, feel free to contact us directly for any questions you may have 
              about our pipe fittings, C.P. fittings, tiles, and sanitary products.
            </p>
          </div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a 
              href="tel:+919414479697"
              className="flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </a>
            <a 
              href="mailto:tanozmodi@gmail.com"
              className="flex items-center justify-center bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
          
          {/* Back to Home */}
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Expected to be available soon. Thank you for your patience!
          </p>
        </div>
      </div>
    </div>
  )
} 