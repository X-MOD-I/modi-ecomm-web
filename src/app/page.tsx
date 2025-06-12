'use client'

import Link from 'next/link'
import { MessageCircle, Star, Truck, Shield, Phone, Mail, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InquiryForm from '@/components/InquiryForm'

const featuredProducts = [
  {
    id: 1,
    name: 'Kubix Prime Gold Basin Mixer',
    price: '₹8,999',
    originalPrice: '₹12,999',
    image: 'https://picsum.photos/300/300?random=20',
    rating: 4.8,
    reviews: 156,
    collection: 'Kubix Prime Gold',
    warranty: '10 Years',
    features: ['24K Gold Plated', '5 Lakh Operations', 'Water Saving']
  },
  {
    id: 2,
    name: 'Flort Prime Jet Black Shower Mixer',
    price: '₹7,999',
    originalPrice: '₹11,999',
    image: 'https://picsum.photos/300/300?random=27',
    rating: 4.7,
    reviews: 203,
    collection: 'Flort Prime Jet Black',
    warranty: '7 Years',
    features: ['Matt Black Finish', 'Anti-Scald Tech', 'Pressure Balance']
  },
  {
    id: 3,
    name: 'Italian Sensor Basin Tap',
    price: '₹12,999',
    originalPrice: '₹17,999',
    image: 'https://picsum.photos/300/300?random=29',
    rating: 4.6,
    reviews: 124,
    collection: 'Italian Collection',
    warranty: '5 Years',
    features: ['Infrared Sensor', 'Battery Operated', 'Touchless']
  },
  {
    id: 4,
    name: 'Tora SS Rain Shower 200mm',
    price: '₹4,999',
    originalPrice: '₹7,499',
    image: 'https://picsum.photos/300/300?random=37',
    rating: 4.8,
    reviews: 267,
    collection: 'Tora SS',
    warranty: '15 Years',
    features: ['304 Grade Steel', 'Anti-Rust', 'Ultra-Thin']
  },
  {
    id: 5,
    name: 'LEXOR 3D Smart Toilet',
    price: '₹18,999',
    originalPrice: '₹24,999',
    image: 'https://picsum.photos/300/300?random=41',
    rating: 4.7,
    reviews: 98,
    collection: 'LEXOR 3D',
    warranty: '10 Years',
    features: ['3D Flushing', 'Rimless Design', 'Soft Close Seat']
  },
  {
    id: 6,
    name: 'Elegance Thermostatic Divertor',
    price: '₹15,999',
    originalPrice: '₹21,999',
    image: 'https://picsum.photos/300/300?random=33',
    rating: 4.9,
    reviews: 89,
    collection: 'Elegance',
    warranty: '12 Years',
    features: ['Thermostatic Control', 'Anti-Scald Safety', '3-Way Divertor']
  }
]

export default function HomePage() {
  const whatsappNumber = "919876543210"
  
  const handleProductInquiry = (productName: string, price: string) => {
    const message = `Hi! I'm interested in the ${productName} (${price}). Could you please provide more details and a quote?`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative w-full px-4 lg:px-8 xl:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your <span className="text-accent-400">Bathroom</span> Experience
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Authorized dealer of Ganga Bath Fittings - India's largest bath fittings manufacturer. 
                Premium quality products with 5-15 years warranty. Your trusted partner since 1995.
              </p>
              <div className="flex flex-wrap gap-4 text-sm mb-8">
                <span className="bg-blue-800 px-4 py-2 rounded-full">40+ Premium Collections</span>
                <span className="bg-blue-800 px-4 py-2 rounded-full">5-15 Years Warranty</span>
                <span className="bg-blue-800 px-4 py-2 rounded-full">Pan India Delivery</span>
                <span className="bg-blue-800 px-4 py-2 rounded-full">Expert Installation</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-center">
                  View Catalog
                </Link>
                <Link href="/contact" className="btn-secondary text-center bg-white/10 hover:bg-white/20 text-white border border-white/30">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="card">
                <img 
                  src="https://picsum.photos/500/400?random=4" 
                  alt="Luxury bathroom showcase" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Site Visit</h3>
              <p className="text-gray-600">Complimentary site consultation and measurement for orders above ₹15,000</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All products come with manufacturer warranty and quality assurance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional installation service and post-installation support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ganga Bath Fittings Collection</h2>
            <p className="text-xl text-gray-600">Premium quality bath fittings with 5-15 years warranty. Discover our exclusive range of 40+ collections.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card hover:shadow-lg transition-shadow duration-300 relative">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save ₹{parseInt(product.originalPrice.replace(/[₹,]/g, '')) - parseInt(product.price.replace(/[₹,]/g, ''))}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {product.warranty} Warranty
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-medium">{product.collection}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <span className="text-xl font-bold text-primary-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => handleProductInquiry(product.name, product.price)}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Quote on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View Complete Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get a Custom Quote</h2>
              <p className="text-lg text-gray-600 mb-6">
                Have specific requirements? Send us your details and we'll provide you with a customized quote 
                within 24 hours. Our experts will help you choose the best products for your space and budget.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Quick Response</h4>
                    <p className="text-gray-600">We respond to all inquiries within 2-4 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Expert Consultation</h4>
                    <p className="text-gray-600">Free design consultation and product recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Complete Service</h4>
                    <p className="text-gray-600">From selection to installation, we handle everything</p>
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

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/600/400?random=5" 
                alt="Our showroom" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Bath Gallery Store</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 25 years of experience in the bathroom fittings industry, we've been helping homeowners 
                and contractors create beautiful, functional bathrooms across India.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our extensive showroom features the latest in bath technology, from traditional fixtures to 
                modern smart bathroom solutions. We pride ourselves on quality products and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I'd like to schedule a showroom visit. When are you available?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Schedule Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 