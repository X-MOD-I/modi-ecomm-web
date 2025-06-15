'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Star, Truck, Shield, Phone, Mail, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InquiryForm from '@/components/InquiryForm'
import { allProducts } from '@/data/products'

export default function HomePage() {
  const whatsappNumber = "919414479697"

  const handleProductInquiry = (productName: string, price: string) => {
    const message = `Hi! I'm interested in the ${productName} (${price}) from New Modi Iron. Could you please provide more details and a quote?`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Get 8 products with variety from different categories
  const getVariedProducts = () => {
    // Get unique subcategories
    const categories = Array.from(new Set(
      allProducts
        .map(p => p.subcategory)
        .filter(Boolean)
    ))

    const selectedProducts = []
    
    // Try to get one product from each category
    for (const category of categories) {
      if (selectedProducts.length >= 8) break
      
      const categoryProducts = allProducts.filter(p => p.subcategory === category)
      if (categoryProducts.length > 0) {
        // Get the first product from this category (you could randomize this)
        selectedProducts.push(categoryProducts[0])
      }
    }
    
    // If we still need more products, fill with remaining products
    if (selectedProducts.length < 8) {
      const usedIds = new Set(selectedProducts.map(p => p.id))
      const remainingProducts = allProducts.filter(p => !usedIds.has(p.id))
      
      for (const product of remainingProducts) {
        if (selectedProducts.length >= 8) break
        selectedProducts.push(product)
      }
    }
    
    return selectedProducts.slice(0, 8)
  }

  const featuredProducts = getVariedProducts()

  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://gangabathfittings.com/wp-content/uploads/2023/06/101-450x450.jpg"
            alt="Premium Bath Fittings"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative w-full mobile-px py-12 sm:py-16 lg:py-24 xl:py-32">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="hero-title mb-4 sm:mb-6 leading-tight">
                Premium <span className="text-accent-400">Bath Fittings</span> & Sanitary Products
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100 leading-relaxed">
                Authorized dealer of Ganga Bath Fittings and TORA Showers.
                Premium quality products with 5-15 years warranty. Your trusted partner for pipe fittings, C.P. fittings, tiles, and sanitary products.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm mb-6 lg:mb-8">
                <span className="bg-primary-800 px-3 py-2 rounded-full whitespace-nowrap">40+ Premium Collections</span>
                <span className="bg-primary-800 px-3 py-2 rounded-full whitespace-nowrap">5-15 Years Warranty</span>
                <span className="bg-primary-800 px-3 py-2 rounded-full whitespace-nowrap">Expert Installation</span>
                <span className="bg-primary-800 px-3 py-2 rounded-full whitespace-nowrap">Quality Guaranteed</span>
              </div>
              <div className="mobile-flex-row">
                <Link href="/products" className="btn-primary text-center min-h-[52px] flex items-center justify-center text-base sm:text-lg font-semibold flex-1 sm:flex-none sm:px-8">
                  View Catalog
                </Link>
                <Link href="/contact" className="btn-secondary text-center bg-white/10 hover:bg-white/20 text-white border border-white/30 min-h-[52px] flex items-center justify-center text-base sm:text-lg font-semibold flex-1 sm:flex-none sm:px-8">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 hidden sm:block">
              <div className="card bg-white/10 backdrop-blur-sm p-3 sm:p-4">
                <Image
                  src="https://gangabathfittings.com/wp-content/uploads/2023/12/02-1.jpg"
                  alt="Premium Bath Fittings Collection"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-mobile bg-white w-full">
        <div className="w-full mobile-px">
          <div className="feature-grid">
            <div className="text-center card-mobile-compact">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <h3 className="text-mobile-lg font-semibold mb-2">Free Site Visit</h3>
              <p className="text-gray-600 responsive-text leading-relaxed">Complimentary site consultation and measurement for orders above ₹15,000</p>
            </div>
            <div className="text-center card-mobile-compact">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <h3 className="text-mobile-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 responsive-text leading-relaxed">All products come with manufacturer warranty and quality assurance</p>
            </div>
            <div className="text-center card-mobile-compact">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <h3 className="text-mobile-lg font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-600 responsive-text leading-relaxed">Professional installation service and post-installation support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-mobile bg-gray-50 w-full">
        <div className="w-full mobile-px">
          <div className="text-center mobile-mb">
            <h2 className="section-title">Ganga Bath Fittings Collection</h2>
            <p className="section-subtitle mobile-px sm:px-0">Premium quality bath fittings with 5-15 years warranty. Discover our diverse range across all categories.</p>
          </div>

          <div className="product-grid-mobile">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card hover:shadow-xl transition-all duration-300 relative flex flex-col h-full group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-56 lg:h-64 object-contain bg-gray-50 p-2 sm:p-3 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {product.warranty}
                  </div>
                </div>
                <div className="flex flex-col flex-1 mobile-p">
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm text-blue-600 font-medium">{product.collection || product.subcategory}</span>
                  </div>
                  <h3 className="text-mobile-base font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
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
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                        <span className="line-clamp-1 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-mobile-lg font-bold text-primary-600">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleProductInquiry(product.name, `₹${product.price.toLocaleString()}`)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-3.5 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 mt-auto hover:shadow-lg min-h-[48px] text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Get Quote on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mobile-mt">
            <Link href="/products" className="btn-primary px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold inline-flex items-center justify-center min-h-[52px]">
              View Complete Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-mobile bg-white w-full">
        <div className="w-full mobile-px">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="section-title">Get a Custom Quote</h2>
              <p className="section-subtitle">
                Have specific requirements? Send us your details and we'll provide you with a customized quote
                within 24 hours. Our experts will help you choose the best products for your space and budget.
              </p>

              <div className="mobile-spacing-y">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mobile-base">Quick Response</h4>
                    <p className="responsive-text text-gray-600">Get instant quotes via WhatsApp or call for immediate assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mobile-base">Expert Consultation</h4>
                    <p className="responsive-text text-gray-600">Professional advice on product selection and installation requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mobile-base">Site Visit</h4>
                    <p className="responsive-text text-gray-600">Free site measurement and consultation for orders above ₹15,000</p>
                  </div>
                </div>
              </div>

              <div className="mobile-flex-row mobile-mt">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I need a custom quote for bath fittings and sanitary products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center min-h-[52px] flex items-center justify-center gap-2 text-base font-semibold flex-1 sm:flex-none sm:px-8"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </a>
                <a
                  href="tel:+919414479697"
                  className="btn-secondary text-center min-h-[52px] flex items-center justify-center gap-2 text-base font-semibold flex-1 sm:flex-none sm:px-8"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="lg:pl-6">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 