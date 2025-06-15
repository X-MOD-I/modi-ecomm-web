'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, Search, Phone, MessageCircle, ShoppingBag, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const whatsappNumber = "919414479697"
  const whatsappMessage = "Hello! I'm interested in pipe fittings, C.P. fittings, tiles and sanitary products from New Modi Iron. Could you please help me?"

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setIsMenuOpen(false)
    }
  }

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2.5 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <span className="flex items-center">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="font-medium text-xs sm:text-sm">+91 94144-79697</span>
              </span>
              <span className="hidden md:flex items-center text-blue-100">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">tanozmodi@gmail.com</span>
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-6 text-blue-100 text-xs">
              <span className="flex items-center">
                ✨ Quality Guaranteed Products
              </span>
              <span className="flex items-center">
                🏆 Trusted Since 1994
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 sm:p-3 rounded-xl mr-2 sm:mr-4 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200 shadow-md">
                <ShoppingBag className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors truncate">
                  New Modi Iron
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 font-medium hidden sm:block line-clamp-1">
                  न्यू मोदी आयरन • Pipe Fittings, C.P. Fittings, Tiles & Sanitary
                </p>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8 xl:mx-12">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pipe fittings, tiles, sanitary products..."
                className="w-full pl-12 pr-6 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white text-base"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 mr-6 xl:mr-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group py-2 px-1"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Get Quote Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center px-4 xl:px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg text-sm xl:text-base"
            >
              Get Quote
            </Link>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 sm:space-x-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 lg:px-6 py-2.5 rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg text-sm min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-6 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
              style={{ fontSize: '16px' }}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </form>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden mobile-menu-container relative z-50 transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      }`}>
        <div className="bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-6 space-y-1">
            {/* Mobile Navigation Links */}
            <nav className="space-y-1 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-200 rounded-xl text-lg min-h-[52px] flex items-center relative z-10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-colors shadow-md text-lg min-h-[52px] flex items-center justify-center relative z-10"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919414479697"
                  className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-medium transition-colors min-h-[52px] relative z-10"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-base">Call</span>
                </a>
                <a
                  href="mailto:tanozmodi@gmail.com"
                  className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-medium transition-colors min-h-[52px] relative z-10"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-base">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 