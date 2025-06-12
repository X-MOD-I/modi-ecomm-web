'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Search, Filter, Star, Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react'
import { featuredProducts, productCategories, productCollections, searchProducts, filterProductsByCategory, filterProductsByPriceRange, type Product } from '@/data/products'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000])
  const [showFilters, setShowFilters] = useState(false)

  // Handle search from URL parameters
  useEffect(() => {
    const urlSearch = searchParams.get('search')
    if (urlSearch) {
      setSearchQuery(urlSearch)
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let products = featuredProducts

    // Apply search filter
    if (searchQuery) {
      products = searchProducts(products, searchQuery)
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      products = filterProductsByCategory(products, selectedCategory)
    }

    // Apply price range filter
    products = filterProductsByPriceRange(products, priceRange[0], priceRange[1])

    return products
  }, [searchQuery, selectedCategory, priceRange])

  const generateWhatsAppMessage = (product: Product) => {
    return `Hi! I'm interested in the ${product.name} (₹${product.price.toLocaleString()}). Could you please provide more details about pricing, availability, and installation? Thank you!`
  }

  const generateWhatsAppURL = (product: Product) => {
    const message = generateWhatsAppMessage(product)
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ganga Bath Fittings Collection
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our complete range of premium bath fittings, sanitary ware, and shower systems. 
              Quality products backed by years of manufacturing excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-800 px-4 py-2 rounded-full">40+ Collections</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">5-15 Years Warranty</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">Pan India Delivery</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">Expert Installation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4 lg:px-8 xl:px-12 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-white rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {productCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>

                {/* Results Count */}
                <div className="flex items-end">
                  <span className="text-sm text-gray-600">
                    Showing {filteredProducts.length} products
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

                  {/* Product Collections Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Premium Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCollections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {collection.productCount} Products
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{collection.name}</h3>
                  <p className="text-gray-600 mb-3">{collection.description}</p>
                  <p className="text-lg font-semibold text-blue-600 mb-4">{collection.priceRange}</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all')
                      setSearchQuery(collection.name)
                    }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Collection <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Products</h2>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setPriceRange([0, 50000])
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        Save ₹{(product.originalPrice - product.price).toLocaleString()}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-blue-600 font-medium">{product.collection}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviewCount})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Buttons */}
                    <div className="space-y-2">
                      <a
                        href={generateWhatsAppURL(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Get Quote on WhatsApp
                      </a>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="tel:+919876543210"
                          className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          <Phone className="h-4 w-4" />
                          Call Now
                        </a>
                        <a
                          href="mailto:bathgallery@example.com?subject=Inquiry about ${product.name}"
                          className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                        >
                          <Mail className="h-4 w-4" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Products?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experts are here to help you select the perfect bath fittings for your space. 
            Get personalized recommendations and professional installation guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi! I need help choosing the right bath fittings for my bathroom. Could you please assist me with product recommendations?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Expert
            </a>
            <a
              href="tel:+919876543210"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call for Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 