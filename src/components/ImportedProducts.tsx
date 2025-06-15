'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { csvImportedProducts } from '@/data/tora-products'
import { Search, Filter, Phone, MessageCircle, ChevronDown } from 'lucide-react'

interface Product {
    id: string
    name: string
    category: string
    subcategory?: string
    collection?: string
    price: number
    originalPrice?: number
    description: string
    features: string[]
    specifications: Record<string, string>
    images: string[]
    inStock: boolean
    rating: number
    reviewCount: number
    tags: string[]
    warranty: string
}

const ImportedProducts = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [displayCount, setDisplayCount] = useState(12)

    // Filter products based on search and category
    const filteredProducts = csvImportedProducts.filter((product: Product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || product.subcategory === selectedCategory
        return matchesSearch && matchesCategory
    })

    const displayedProducts = filteredProducts.slice(0, displayCount)

    // Get unique subcategories for filter
    const subcategories = [...new Set(csvImportedProducts.map((p: Product) => p.subcategory))]

    // WhatsApp message generator
    const generateWhatsAppMessage = (product: Product) => {
        const message = `Hi! I'm interested in ${product.name} (₹${product.price}). Can you provide more details and availability?`
        return `https://wa.me/919414479697?text=${encodeURIComponent(message)}`
    }

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center mobile-mb mobile-px">
                <h1 className="section-title">
                    Imported Product Catalog
                </h1>
                <p className="section-subtitle">
                    Browse our extensive collection of {csvImportedProducts.length} premium bathroom fittings,
                    imported from partner catalogs with real-time pricing and availability.
                </p>
            </div>

            {/* Search and Filter */}
            <div className="mobile-mb mobile-px">
                <div className="mobile-flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="mobile-search pl-12"
                        />
                    </div>

                    <div className="relative flex-1 sm:flex-none sm:min-w-[200px]">
                        <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="mobile-select pl-12 pr-12"
                        >
                            <option value="all">All Categories</option>
                            {subcategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Results Summary */}
            <div className="mobile-mb mobile-px">
                <div className="responsive-text text-gray-600">
                    Showing <span className="font-semibold">{displayedProducts.length}</span> of <span className="font-semibold">{filteredProducts.length}</span> products
                    {searchTerm && (
                        <>
                            {' '}for "<span className="font-semibold text-blue-600">{searchTerm}</span>"
                        </>
                    )}
                    {selectedCategory !== 'all' && (
                        <>
                            {' '}in "<span className="font-semibold text-blue-600">{selectedCategory}</span>"
                        </>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            <div className="mobile-px mobile-mb">
                <div className="product-grid-mobile">
                    {displayedProducts.map((product: Product) => (
                        <div key={product.id} className="card hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    onError={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        img.src = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;
                                    }}
                                />
                                {!product.inStock && (
                                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                        Out of Stock
                                    </div>
                                )}
                                {product.collection && (
                                    <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                                        {product.collection}
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col flex-1 mobile-p">
                                <h3 className="text-mobile-base font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {product.name}
                                </h3>

                                <p className="responsive-text text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Price */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-mobile-lg font-bold text-green-600">
                                        ₹{product.price.toLocaleString()}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-sm text-gray-500 line-through">
                                            ₹{product.originalPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className={`text-sm sm:text-base ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                                    }`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="responsive-text text-gray-500">
                                        ({product.reviewCount})
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1">
                                        {product.features.slice(0, 2).map((feature, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded line-clamp-1"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mobile-flex-row mt-auto">
                                    <a
                                        href={generateWhatsAppMessage(product)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3.5 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg min-h-[48px] text-sm sm:text-base"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Get Quote</span>
                                    </a>
                                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3.5 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg min-h-[48px] text-sm sm:text-base">
                                        <Phone className="w-4 h-4" />
                                        <span>Call</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Load More Button */}
            {displayedProducts.length < filteredProducts.length && (
                <div className="text-center mobile-px mobile-mb">
                    <button
                        onClick={() => setDisplayCount(prev => prev + 12)}
                        className="btn-primary px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold inline-flex items-center justify-center min-h-[52px]"
                    >
                        Load More Products ({filteredProducts.length - displayedProducts.length} remaining)
                    </button>
                </div>
            )}

            {/* No Products Found */}
            {filteredProducts.length === 0 && (
                <div className="text-center mobile-py mobile-px">
                    <div className="max-w-md mx-auto">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-mobile-lg font-semibold mb-2">No products found</h3>
                        <p className="responsive-text text-gray-600 mb-4">
                            Try adjusting your search terms or category filter to find what you're looking for.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('')
                                setSelectedCategory('all')
                            }}
                            className="btn-secondary px-6 py-3 text-base font-semibold inline-flex items-center justify-center min-h-[48px]"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImportedProducts