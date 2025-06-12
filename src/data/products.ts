// Ganga Bath Fittings Product Catalog for Bath Gallery Store

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
    image: 'https://picsum.photos/400/300?random=10',
    subcategories: ['Basin Mixers', 'Shower Mixers', 'Divertors', 'Sensor Taps', 'Health Faucets', 'Spouts']
  },
  {
    id: 'sanitary-ware',
    name: 'Sanitary Ware',
    description: 'Modern toilets, wash basins, and bathroom ceramics',
    image: 'https://picsum.photos/400/300?random=11',
    subcategories: ['Toilets', 'Wash Basins', 'Urinals', 'Bidets']
  },
  {
    id: 'ptmt-taps',
    name: 'PTMT Taps',
    description: 'Durable plastic taps for everyday use',
    image: 'https://picsum.photos/400/300?random=12',
    subcategories: ['Kitchen Taps', 'Bathroom Taps', 'Garden Taps']
  },
  {
    id: 'shower-systems',
    name: 'Shower Systems',
    description: 'Complete shower solutions from basic to luxury',
    image: 'https://picsum.photos/400/300?random=13',
    subcategories: ['Rain Showers', 'Hand Showers', 'Shower Sets', 'Overhead Showers']
  },
  {
    id: 'accessories',
    name: 'Bath Accessories',
    description: 'Complete your bathroom with essential accessories',
    image: 'https://picsum.photos/400/300?random=14',
    subcategories: ['Towel Rails', 'Soap Dispensers', 'Paper Holders', 'Hooks']
  }
]

export const featuredProducts: Product[] = [
  // Kubix Prime Gold Collection
  {
    id: 'kubix-prime-gold-basin-mixer',
    name: 'Kubix Prime Gold Basin Mixer',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Kubix Prime Gold',
    price: 8999,
    originalPrice: 12999,
    description: 'Luxury gold-finished basin mixer with premium cartridge and elegant design. Perfect for modern bathrooms seeking a touch of luxury.',
    features: [
      '24K Gold Plated Finish',
      'Ceramic Cartridge - 5 Lakh Operations',
      'Water Saving Aerator',
      'Lead-Free Brass Body',
      'Smooth Single Lever Operation',
      'Anti-Lime Scale Technology'
    ],
    specifications: {
      'Material': 'Brass with Gold Plating',
      'Cartridge': '40mm Ceramic',
      'Water Pressure': '0.5 to 5 Bar',
      'Temperature': 'Up to 85°C',
      'Warranty': '10 Years',
      'Finish': '24K Gold Plated',
      'Flow Rate': '6-8 LPM at 3 Bar'
    },
    images: [
      'https://picsum.photos/500/500?random=20',
      'https://picsum.photos/500/500?random=21',
      'https://picsum.photos/500/500?random=22'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    tags: ['luxury', 'gold', 'premium', 'basin mixer', 'kubix'],
    warranty: '10 Years Comprehensive Warranty'
  },
  
  {
    id: 'kubix-prime-gold-shower-mixer',
    name: 'Kubix Prime Gold Shower Mixer',
    category: 'cp-fittings',
    subcategory: 'Shower Mixers',
    collection: 'Kubix Prime Gold',
    price: 11999,
    originalPrice: 16999,
    description: 'Premium gold-plated shower mixer with advanced temperature control and luxury finish.',
    features: [
      '24K Gold Plated Finish',
      'Temperature Control Cartridge',
      'Wall Mount Installation',
      'Anti-Scald Protection',
      'Premium Brass Construction'
    ],
    specifications: {
      'Material': 'Brass with Gold Plating',
      'Cartridge': '35mm Thermostatic',
      'Water Pressure': '1 to 5 Bar',
      'Temperature Range': '20°C to 50°C',
      'Warranty': '10 Years',
      'Finish': '24K Gold Plated'
    },
    images: [
      'https://picsum.photos/500/500?random=23',
      'https://picsum.photos/500/500?random=24'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    tags: ['luxury', 'gold', 'shower mixer', 'thermostatic'],
    warranty: '10 Years Manufacturing Warranty'
  },

  // Flort Prime Jet Black Collection
  {
    id: 'flort-prime-jet-black-basin-mixer',
    name: 'Flort Prime Jet Black Basin Mixer',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Flort Prime Jet Black',
    price: 6999,
    originalPrice: 9999,
    description: 'Modern matt black basin mixer with sleek design and advanced cartridge technology.',
    features: [
      'Matt Black Premium Finish',
      'Ceramic Cartridge - 5 Lakh Operations',
      'Single Lever Operation',
      'Water Saving Aerator',
      'Contemporary Design'
    ],
    specifications: {
      'Material': 'Brass with Black Coating',
      'Cartridge': '40mm Ceramic',
      'Water Pressure': '0.5 to 5 Bar',
      'Flow Rate': '6-8 LPM',
      'Warranty': '7 Years',
      'Finish': 'Matt Black'
    },
    images: [
      'https://picsum.photos/500/500?random=25',
      'https://picsum.photos/500/500?random=26'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
    tags: ['modern', 'black', 'basin mixer', 'flort'],
    warranty: '7 Years Manufacturing Warranty'
  },

  {
    id: 'flort-prime-jet-black-shower-mixer',
    name: 'Flort Prime Jet Black Shower Mixer',
    category: 'cp-fittings',
    subcategory: 'Shower Mixers',
    collection: 'Flort Prime Jet Black',
    price: 7999,
    originalPrice: 11999,
    description: 'Contemporary black shower mixer with anti-scald technology and pressure balancing.',
    features: [
      'Matt Black Premium Finish',
      'Anti-Scald Technology',
      'Pressure Balancing Cartridge',
      'Easy Clean Aerator',
      'Wall Mount Installation'
    ],
    specifications: {
      'Material': 'Brass with Black Coating',
      'Cartridge': '35mm Pressure Balance',
      'Flow Rate': '8-12 LPM',
      'Inlet': '15mm (1/2")',
      'Warranty': '7 Years',
      'Finish': 'Matt Black'
    },
    images: [
      'https://picsum.photos/500/500?random=27',
      'https://picsum.photos/500/500?random=28'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ['modern', 'black', 'shower', 'premium'],
    warranty: '7 Years Manufacturing Warranty'
  },

  // Italian Collection
  {
    id: 'italian-sensor-basin-tap',
    name: 'Italian Collection Sensor Basin Tap',
    category: 'cp-fittings',
    subcategory: 'Sensor Taps',
    collection: 'Italian Collection',
    price: 12999,
    originalPrice: 17999,
    description: 'Touchless sensor tap with Italian design and smart technology for hygiene and convenience.',
    features: [
      'Infrared Sensor Technology',
      'Battery Operated (4 AA)',
      'Adjustable Sensor Range',
      'Water Saving Technology',
      'Vandal Resistant Design',
      'Automatic Shut-off'
    ],
    specifications: {
      'Material': 'Brass with Chrome Finish',
      'Sensor Range': '5-15 cm (Adjustable)',
      'Battery Life': '2-3 Years',
      'Flow Rate': '6 LPM at 3 Bar',
      'Warranty': '5 Years',
      'Finish': 'Mirror Chrome'
    },
    images: [
      'https://picsum.photos/500/500?random=29',
      'https://picsum.photos/500/500?random=30'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 124,
    tags: ['sensor', 'touchless', 'smart', 'italian', 'hygiene'],
    warranty: '5 Years Sensor & Mechanical Warranty'
  },

  {
    id: 'italian-automatic-urinal-flush',
    name: 'Italian Collection Automatic Urinal Flush',
    category: 'cp-fittings',
    subcategory: 'Sensor Taps',
    collection: 'Italian Collection',
    price: 15999,
    originalPrice: 21999,
    description: 'Automatic urinal flush valve with sensor technology for commercial and residential use.',
    features: [
      'PIR Sensor Technology',
      'Adjustable Flush Time',
      'Water Saving Design',
      'Vandal Proof Construction',
      'Easy Installation'
    ],
    specifications: {
      'Material': 'Brass with Chrome Finish',
      'Sensor Type': 'PIR Motion Sensor',
      'Flush Time': '1-10 seconds (Adjustable)',
      'Water Pressure': '0.5 to 8 Bar',
      'Warranty': '5 Years',
      'Power': '6V DC (4 AA Batteries)'
    },
    images: [
      'https://picsum.photos/500/500?random=31',
      'https://picsum.photos/500/500?random=32'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
    tags: ['sensor', 'urinal', 'automatic', 'commercial'],
    warranty: '5 Years Comprehensive Warranty'
  },

  // Elegance Collection
  {
    id: 'elegance-thermostatic-divertor',
    name: 'Elegance Thermostatic Divertor',
    category: 'cp-fittings',
    subcategory: 'Divertors',
    collection: 'Elegance',
    price: 15999,
    originalPrice: 21999,
    description: 'Advanced thermostatic divertor with temperature control and safety features for premium bathrooms.',
    features: [
      'Thermostatic Temperature Control',
      'Anti-Scald Safety Lock',
      '3-Way Divertor Function',
      'Chrome Plated Finish',
      'Concealed Installation',
      'Pressure Balancing'
    ],
    specifications: {
      'Material': 'Brass Body, Chrome Plated',
      'Temperature Range': '20°C to 50°C',
      'Pressure': '1 to 5 Bar',
      'Connections': '3-Way Divertor',
      'Warranty': '12 Years',
      'Finish': 'High Gloss Chrome'
    },
    images: [
      'https://picsum.photos/500/500?random=33',
      'https://picsum.photos/500/500?random=34'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    tags: ['thermostatic', 'premium', 'safety', 'divertor'],
    warranty: '12 Years Premium Warranty'
  },

  {
    id: 'elegance-basin-mixer-chrome',
    name: 'Elegance Basin Mixer Chrome',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Elegance',
    price: 4999,
    originalPrice: 7499,
    description: 'Classic chrome basin mixer with timeless design and reliable performance.',
    features: [
      'High Gloss Chrome Finish',
      'Ceramic Cartridge',
      'Single Lever Operation',
      'Water Saving Aerator',
      'Easy Maintenance'
    ],
    specifications: {
      'Material': 'Brass with Chrome Plating',
      'Cartridge': '40mm Ceramic',
      'Water Pressure': '0.5 to 5 Bar',
      'Flow Rate': '6-8 LPM',
      'Warranty': '7 Years',
      'Finish': 'High Gloss Chrome'
    },
    images: [
      'https://picsum.photos/500/500?random=35',
      'https://picsum.photos/500/500?random=36'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 178,
    tags: ['classic', 'chrome', 'basin mixer', 'elegance'],
    warranty: '7 Years Manufacturing Warranty'
  },

  // Tora SS Shower Collection
  {
    id: 'tora-ss-rain-shower-200mm',
    name: 'Tora SS Rain Shower Head 200mm',
    category: 'shower-systems',
    subcategory: 'Rain Showers',
    collection: 'Tora SS',
    price: 4999,
    originalPrice: 7499,
    description: 'Stainless steel rain shower head with even water distribution and ultra-thin profile.',
    features: [
      '304 Grade Stainless Steel',
      'Ultra-Thin 8mm Profile',
      'Anti-Lime Scale Nozzles',
      'Easy Installation',
      'Rust & Corrosion Resistant',
      'Even Water Distribution'
    ],
    specifications: {
      'Material': '304 Grade Stainless Steel',
      'Size': '200mm x 200mm',
      'Thickness': '8mm Ultra-Thin',
      'Connection': '15mm (1/2") Thread',
      'Warranty': '15 Years',
      'Finish': 'Brushed Steel'
    },
    images: [
      'https://picsum.photos/500/500?random=37',
      'https://picsum.photos/500/500?random=38'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 267,
    tags: ['rain shower', 'stainless steel', 'durable', 'premium'],
    warranty: '15 Years Anti-Rust Warranty'
  },

  {
    id: 'tora-ss-rain-shower-300mm',
    name: 'Tora SS Rain Shower Head 300mm',
    category: 'shower-systems',
    subcategory: 'Rain Showers',
    collection: 'Tora SS',
    price: 7999,
    originalPrice: 11999,
    description: 'Large 300mm stainless steel rain shower for luxury bathroom experience.',
    features: [
      '304 Grade Stainless Steel',
      'Ultra-Thin 10mm Profile',
      'Anti-Lime Scale Nozzles',
      'Large Coverage Area',
      'Premium Finish'
    ],
    specifications: {
      'Material': '304 Grade Stainless Steel',
      'Size': '300mm x 300mm',
      'Thickness': '10mm Ultra-Thin',
      'Connection': '15mm (1/2") Thread',
      'Warranty': '15 Years',
      'Finish': 'Brushed Steel'
    },
    images: [
      'https://picsum.photos/500/500?random=39',
      'https://picsum.photos/500/500?random=40'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 145,
    tags: ['rain shower', 'large', 'luxury', 'stainless steel'],
    warranty: '15 Years Anti-Rust Warranty'
  },

  // Ganga Sanitary Ware
  {
    id: 'ganga-lexor-3d-toilet',
    name: 'Ganga LEXOR 3D Smart Toilet',
    category: 'sanitary-ware',
    subcategory: 'Toilets',
    collection: 'LEXOR 3D',
    price: 18999,
    originalPrice: 24999,
    description: 'Smart rimless toilet with 3D flushing technology and soft close seat cover.',
    features: [
      '3D Flushing Technology',
      'Rimless Design for Hygiene',
      'Tornado & Siphonic Flush',
      'Soft Close Seat Cover',
      'Water Saving Flush',
      'Easy Cleaning'
    ],
    specifications: {
      'Material': 'Vitreous China',
      'Flush Type': 'Dual Flush 3L/6L',
      'Mounting': 'Floor Mounted',
      'Trap Distance': '300mm',
      'Warranty': '10 Years',
      'Finish': 'Glossy White'
    },
    images: [
      'https://picsum.photos/500/500?random=41',
      'https://picsum.photos/500/500?random=42'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
    tags: ['smart toilet', 'rimless', '3d flush', 'water saving'],
    warranty: '10 Years Manufacturing Defect Warranty'
  },

  {
    id: 'ganga-designer-wash-basin',
    name: 'Ganga Designer Wash Basin',
    category: 'sanitary-ware',
    subcategory: 'Wash Basins',
    collection: 'Ganga Sanitary',
    price: 8999,
    originalPrice: 12999,
    description: 'Premium ceramic wash basin with modern design and superior finish.',
    features: [
      'Vitreous China Construction',
      'Glossy White Finish',
      'Anti-Bacterial Coating',
      'Easy to Clean Surface',
      'Modern Design'
    ],
    specifications: {
      'Material': 'Vitreous China',
      'Size': '600mm x 400mm',
      'Depth': '150mm',
      'Mounting': 'Counter Top',
      'Warranty': '10 Years',
      'Finish': 'Glossy White'
    },
    images: [
      'https://picsum.photos/500/500?random=43',
      'https://picsum.photos/500/500?random=44'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 156,
    tags: ['wash basin', 'designer', 'ceramic', 'modern'],
    warranty: '10 Years Manufacturing Warranty'
  },

  // PTMT Collection
  {
    id: 'ganga-ptmt-kitchen-tap',
    name: 'Ganga PTMT Kitchen Tap',
    category: 'ptmt-taps',
    subcategory: 'Kitchen Taps',
    collection: 'Ganga PTMT',
    price: 1999,
    originalPrice: 2999,
    description: 'Durable PTMT kitchen tap with smooth operation and long-lasting performance.',
    features: [
      'High-Grade PTMT Material',
      'Smooth Operation',
      'Corrosion Resistant',
      'Easy Installation',
      'Affordable Quality'
    ],
    specifications: {
      'Material': 'High Grade PTMT',
      'Connection': '15mm (1/2")',
      'Water Pressure': '0.5 to 3 Bar',
      'Warranty': '3 Years',
      'Finish': 'Chrome Plated',
      'Type': 'Single Lever'
    },
    images: [
      'https://picsum.photos/500/500?random=45',
      'https://picsum.photos/500/500?random=46'
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 234,
    tags: ['ptmt', 'kitchen', 'affordable', 'durable'],
    warranty: '3 Years Manufacturing Warranty'
  },

  // Health Faucet Collection
  {
    id: 'ganga-health-faucet-premium',
    name: 'Ganga Premium Health Faucet',
    category: 'cp-fittings',
    subcategory: 'Health Faucets',
    collection: 'Premium Health Faucet',
    price: 2999,
    originalPrice: 4499,
    description: 'Premium health faucet with ergonomic design and superior finish.',
    features: [
      'Ergonomic Design',
      'Chrome Plated Finish',
      'Easy Grip Handle',
      'Flexible Hose',
      'Wall Mount Hook'
    ],
    specifications: {
      'Material': 'Brass with Chrome Plating',
      'Hose Length': '1.2 Meter',
      'Connection': '15mm (1/2")',
      'Warranty': '5 Years',
      'Finish': 'Chrome Plated'
    },
    images: [
      'https://picsum.photos/500/500?random=47',
      'https://picsum.photos/500/500?random=48'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 189,
    tags: ['health faucet', 'chrome', 'premium', 'ergonomic'],
    warranty: '5 Years Manufacturing Warranty'
  },

  // Spout Collection
  {
    id: 'ganga-bath-spout-chrome',
    name: 'Ganga Bath Spout Chrome',
    category: 'cp-fittings',
    subcategory: 'Spouts',
    collection: 'Bath Spout',
    price: 3999,
    originalPrice: 5999,
    description: 'Premium bath spout with wall mount design and elegant chrome finish.',
    features: [
      'Wall Mount Design',
      'Chrome Plated Finish',
      'Smooth Water Flow',
      'Easy Installation',
      'Durable Construction'
    ],
    specifications: {
      'Material': 'Brass with Chrome Plating',
      'Length': '200mm',
      'Connection': '15mm (1/2")',
      'Warranty': '7 Years',
      'Finish': 'High Gloss Chrome'
    },
    images: [
      'https://picsum.photos/500/500?random=49',
      'https://picsum.photos/500/500?random=50'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 123,
    tags: ['spout', 'bath', 'chrome', 'wall mount'],
    warranty: '7 Years Manufacturing Warranty'
  }
]

// Extended product collections
export const productCollections = [
  {
    id: 'kubix-prime-gold',
    name: 'Kubix Prime Gold Collection',
    description: 'Luxury gold-plated bath fittings for premium bathrooms',
    priceRange: '₹6,999 - ₹15,999',
    image: 'https://picsum.photos/400/300?random=15',
    productCount: 8
  },
  {
    id: 'flort-prime-jet-black',
    name: 'Flort Prime Jet Black Collection',
    description: 'Modern matt black fittings for contemporary spaces',
    priceRange: '₹4,999 - ₹12,999',
    image: 'https://picsum.photos/400/300?random=16',
    productCount: 12
  },
  {
    id: 'elegance',
    name: 'Elegance Collection',
    description: 'Classic chrome fittings with timeless appeal',
    priceRange: '₹3,999 - ₹18,999',
    image: 'https://picsum.photos/400/300?random=17',
    productCount: 15
  },
  {
    id: 'italian-collection',
    name: 'Italian Collection',
    description: 'Sensor taps and premium European designs',
    priceRange: '₹8,999 - ₹25,999',
    image: 'https://picsum.photos/400/300?random=18',
    productCount: 6
  },
  {
    id: 'tora-ss',
    name: 'Tora SS Collection',
    description: 'Stainless steel shower systems built to last',
    priceRange: '₹2,999 - ₹8,999',
    image: 'https://picsum.photos/400/300?random=19',
    productCount: 10
  },
  {
    id: 'lexor-3d',
    name: 'LEXOR 3D Collection',
    description: 'Smart toilets with 3D flushing technology',
    priceRange: '₹18,999 - ₹35,999',
    image: 'https://picsum.photos/400/300?random=51',
    productCount: 4
  },
  {
    id: 'ganga-ptmt',
    name: 'Ganga PTMT Collection',
    description: 'Affordable and durable plastic fittings',
    priceRange: '₹999 - ₹3,999',
    image: 'https://picsum.photos/400/300?random=52',
    productCount: 20
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
  return filterProductsByCategory(featuredProducts, category)
}

export const getFeaturedProductsByCollection = (collection: string): Product[] => {
  return filterProductsByCollection(featuredProducts, collection)
} 