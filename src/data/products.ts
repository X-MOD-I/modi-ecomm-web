// Ganga Bath Fittings Product Catalog for Bath Gallery Store
// Real product data imported from CSV files

export interface Product {
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

export interface ProductCategory {
    id: string
    name: string
    description: string
    image: string
    subcategories: string[]
}

export const productCategories: ProductCategory[] = [
    {
        id: 'cp-fittings',
        name: 'Chrome Plated Bath Fittings',
        description: 'Premium chrome plated faucets and mixers with superior durability',
        image: 'https://gangabathfittings.com/wp-content/uploads/2023/06/101-450x450.jpg',
        subcategories: ['Basin Mixers', 'Shower Mixers', 'Health Faucets', 'Kitchen Taps', 'Stop Cocks', 'Flush Systems']
    },
    {
        id: 'shower-systems',
        name: 'Shower Systems',
        description: 'Complete shower solutions from basic to luxury',
        image: 'https://gangabathfittings.com/wp-content/uploads/2023/12/02-1.jpg',
        subcategories: ['Overhead Showers', 'Hand Showers', 'Shower Sets', 'Shower Systems']
    }
]

// Import your real CSV data
import { csvImportedProducts as gangaProducts } from './ganga-products'
import { csvImportedProducts as toraProducts } from './tora-products'

// All your real product data from CSV files
export const allProducts: Product[] = [
    ...gangaProducts,
    ...toraProducts
]

// Featured products for homepage (limited for performance)
export const featuredProducts: Product[] = allProducts.slice(0, 50)

// Product collections based on your real data
export const productCollections = [
    {
        id: 'elegance-collection',
        name: 'Elegance Collection',
        description: 'Premium bathroom fittings with elegant design',
        priceRange: '₹800 - ₹2,500',
        image: 'https://gangabathfittings.com/wp-content/uploads/2023/07/Elegance-Collection.jpg',
        productCount: allProducts.filter(p => p.collection === 'Elegance Collection').length
    },
    {
        id: 'ultra-slim-collection',
        name: 'Ultra Slim Collection',
        description: 'Sleek and modern ultra-slim designs',
        priceRange: '₹900 - ₹2,800',
        image: 'https://gangabathfittings.com/wp-content/uploads/2023/07/Ultraslim-Collection.jpg',
        productCount: allProducts.filter(p => p.collection === 'Ultra Slim Collection').length
    },
    {
        id: 'waterfall-collection',
        name: 'WaterFall Collection',
        description: 'Luxurious waterfall-style fittings',
        priceRange: '₹1,200 - ₹3,500',
        image: 'https://gangabathfittings.com/wp-content/uploads/2023/06/WS3-10.jpg',
        productCount: allProducts.filter(p => p.collection === 'WaterFall Collection').length
    },
    {
        id: 'maze-collection',
        name: 'Maze Collection',
        description: 'Sophisticated maze pattern designs',
        priceRange: '₹1,000 - ₹3,000',
        image: 'https://gangabathfittings.com/wp-content/uploads/2023/06/MS3-8.jpg',
        productCount: allProducts.filter(p => p.collection === 'Maze Collection').length
    }
]

// Product search and filter utilities
export const searchProducts = (products: Product[], query: string): Product[] => {
    const lowercaseQuery = query.toLowerCase()
    return products.filter(
        product =>
            product.name.toLowerCase().includes(lowercaseQuery) ||
            product.description.toLowerCase().includes(lowercaseQuery) ||
            product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
            product.category.toLowerCase().includes(lowercaseQuery) ||
            product.collection?.toLowerCase().includes(lowercaseQuery)
    )
}

export const filterProductsByCategory = (products: Product[], category: string): Product[] => {
    return products.filter(product => product.category === category)
}

export const filterProductsByCollection = (products: Product[], collection: string): Product[] => {
    return products.filter(product => product.collection?.toLowerCase().includes(collection.toLowerCase()))
}

export const filterProductsByPriceRange = (products: Product[], min: number, max: number): Product[] => {
    return products.filter(product => product.price >= min && product.price <= max)
}

export const getProductsByCategory = (category: string): Product[] => {
    return filterProductsByCategory(allProducts, category)
}

export const getFeaturedProductsByCollection = (collection: string): Product[] => {
    return filterProductsByCollection(allProducts, collection)
}

// Get paginated products for better performance
export const getPaginatedProducts = (page: number = 1, limit: number = 20): {
    products: Product[]
    totalProducts: number
    totalPages: number
    currentPage: number
} => {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    return {
        products: allProducts.slice(startIndex, endIndex),
        totalProducts: allProducts.length,
        totalPages: Math.ceil(allProducts.length / limit),
        currentPage: page
    }
} 