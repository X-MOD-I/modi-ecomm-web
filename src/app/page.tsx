'use client'

import Link from 'next/link'
import { MessageCircle, Star, Truck, Shield, Phone, Mail, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InquiryForm from '@/components/InquiryForm'
import { featuredProducts } from '@/data/products'

export default function HomePage() {
  const whatsappNumber = "919414479697"

  const handleProductInquiry = (productName: string, price: string) => {
    const message = `Hi! I'm interested in the ${productName} (${price}) from New Modi Iron. Could you please provide more details and a quote?`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white w-full">
        <div className="absolute inset-0">
          <img
            src="https://gangabathfittings.com/wp-content/uploads/2023/06/101-450x450.jpg"
            alt="Premium Bath Fittings"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                Premium <span className="text-accent-400">Bath Fittings</span> & Sanitary Products
              </h1>
              <p className="text-lg sm:text-xl mb-6 lg:mb-8 text-blue-100 leading-relaxed">
                Authorized dealer of Ganga Bath Fittings and TORA Showers.
                Premium quality products with 5-15 years warranty. Your trusted partner for pipe fittings, C.P. fittings, tiles, and sanitary products.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm mb-6 lg:mb-8">
                <span className="bg-blue-800 px-3 py-2 rounded-full">40+ Premium Collections</span>
                <span className="bg-blue-800 px-3 py-2 rounded-full">5-15 Years Warranty</span>
                <span className="bg-blue-800 px-3 py-2 rounded-full">Expert Installation</span>
                <span className="bg-blue-800 px-3 py-2 rounded-full">Quality Guaranteed</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/products" className="btn-primary text-center py-4 sm:py-3 text-lg sm:text-base font-semibold">
                  View Catalog
                </Link>
                <Link href="/contact" className="btn-secondary text-center bg-white/10 hover:bg-white/20 text-white border border-white/30 py-4 sm:py-3 text-lg sm:text-base font-semibold">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="card bg-white/10 backdrop-blur-sm p-4">
                <img
                  src="https://gangabathfittings.com/wp-content/uploads/2023/12/02-1.jpg"
                  alt="Premium Bath Fittings Collection"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Free Site Visit</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Complimentary site consultation and measurement for orders above ₹15,000</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">All products come with manufacturer warranty and quality assurance</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Professional installation service and post-installation support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 lg:py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">Ganga Bath Fittings Collection</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0 leading-relaxed">Premium quality bath fittings with 5-15 years warranty. Discover our exclusive range of 40+ collections.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.slice(0, 6).map((product) => (
              <div key={product.id} className="card hover:shadow-lg transition-shadow duration-300 relative flex flex-col h-full">
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 sm:h-64 object-contain bg-gray-50 p-2"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {product.warranty}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm text-blue-600 font-medium">{product.collection || product.subcategory}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 ml-2">({product.reviewCount})</span>
                  </div>
                  {/* Features */}
                  <ul className="text-xs sm:text-sm text-gray-600 mb-4 space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg sm:text-xl font-bold text-primary-600">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleProductInquiry(product.name, `₹${product.price.toLocaleString()}`)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 mt-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm sm:text-base">Get Quote on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Link href="/products" className="btn-primary px-8 py-4 text-lg font-semibold">
              View Complete Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-12 lg:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Get a Custom Quote</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Have specific requirements? Send us your details and we'll provide you with a customized quote
                within 24 hours. Our experts will help you choose the best products for your space and budget.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">Quick Response</h4>
                    <p className="text-gray-600 text-sm sm:text-base">We respond to all inquiries within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">Expert Consultation</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Free design consultation and product recommendations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">Complete Service</h4>
                    <p className="text-gray-600 text-sm sm:text-base">From selection to installation, we handle everything</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 