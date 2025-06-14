'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { csvImportedProducts } from '@/data/tora-products'
import { Search, Filter, Phone, MessageCircle } from 'lucide-react'

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
        const message = `Hi! I&apos;m interested in ${product.name} (₹${product.price}). Can you provide more details and availability?`
        return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Imported Product Catalog
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Browse our extensive collection of {csvImportedProducts.length} premium bathroom fittings,
                    imported from partner catalogs with real-time pricing and availability.
                </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="relative">
                    <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
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

            {/* Results Summary */}
            <div className="mb-6 text-sm text-gray-600">
                Showing {displayedProducts.length} of {filteredProducts.length} products
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'all' && ` in "${selectedCategory}"`}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {displayedProducts.map((product: Product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                        {/* Product Image */}
                        <div className="relative h-48 bg-gray-100">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                onError={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    img.src = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;
                                }}
                            />
                            {!product.inStock && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                                    Out of Stock
                                </div>
                            )}
                            {product.collection && (
                                <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                                    {product.collection}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col flex-1 p-4">
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                {product.name}
                            </h3>

                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                {product.description}
                            </p>

                            {/* Price */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-lg font-bold text-green-600">
                                    ₹{product.price.toLocaleString()}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-sm text-gray-500 line-through">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-sm ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500">
                                    ({product.reviewCount})
                                </span>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-1">
                                    {product.features.slice(0, 2).map((feature, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-auto">
                                <a
                                    href={generateWhatsAppMessage(product)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Get Quote
                                </a>
                                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Call
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {displayCount < filteredProducts.length && (
                <div className="text-center">
                    <button
                        onClick={() => setDisplayCount(prev => prev + 12)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                        Load More Products ({filteredProducts.length - displayCount} remaining)
                    </button>
                </div>
            )}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <Search className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No products found
                    </h3>
                    <p className="text-gray-600">
                        Try adjusting your search terms or filter settings
                    </p>
                </div>
            )}
        </div>
    )
}

export default ImportedProducts