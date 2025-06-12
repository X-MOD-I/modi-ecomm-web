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
    id: 'kubix-prime-gold-bib-cock',
    name: 'Kubix Prime Gold Bib Cock with Wall Flange',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Kubix Prime Gold',
    price: 2452,
    originalPrice: 2885,
    description: 'Premium gold finish bib cock with wall flange, featuring 20mm ceramic cartridge for superior performance.',
    features: [
      '7 Years Warranty',
      'High Quality Ceramic Disc',
      '50,00,000 Operating Cycles Guaranteed',
      'IS Standards Compliant',
      'Aerated Flow Technology'
    ],
    specifications: {
      'Catalogue No': 'GL-2501',
      '20MM Ceramic Cartridge': '',
      'Brass Body - 58-61% Copper Content': '',
      'Gold Plated Finish - 13-14 Micron Nickel + 0.3-0.7 Micron Chromium': '',
      'Quarter Turn Operation': '',
      'Operating Temperature: 5°C to 80°C': '',
      'Water Pressure: 0.1 to 10 bar': ''
    },
    images: [
      '/images/products/ganga/kubix-prime-gold/GL-2501-bib-cock.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    tags: ['premium', 'gold', 'kubix-prime', 'bib-cock'],
    warranty: '7 Years'
  },
  {
    id: 'kubix-prime-gold-pillar-cock',
    name: 'Kubix Prime Gold Pillar Cock',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Kubix Prime Gold',
    price: 3668,
    originalPrice: 4315,
    description: 'Elegant gold finish pillar cock with premium ceramic cartridge.',
    features: [
      '7 Years Warranty',
      'Premium Gold Finish',
      'High Flow Design',
      'Easy Installation'
    ],
    specifications: {
      'Catalogue No': 'GL-2502',
      '20MM Ceramic Cartridge': '',
      'Gold Plated Finish': '',
      'Brass Body Construction': '',
      'Quarter Turn Operation': ''
    },
    images: [
      '/images/products/ganga/kubix-prime-gold/GL-2502-pillar-cock.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    tags: ['premium', 'gold', 'kubix-prime', 'pillar-cock'],
    warranty: '7 Years'
  },
  {
    id: 'kubix-prime-gold-basin-mixer',
    name: 'Kubix Prime Gold Single Lever Basin Mixer',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Kubix Prime Gold',
    price: 7476,
    originalPrice: 8795,
    description: 'Premium single lever basin mixer with 450mm braided hoses.',
    features: [
      '7 Years Warranty',
      'Easy Single Lever Control',
      'Premium Gold Finish',
      'High Quality Hoses'
    ],
    specifications: {
      'Catalogue No': 'GL-2512',
      '450mm Braided Hoses': '',
      'Gold Plated Finish': '',
      'Single Lever Operation': '',
      'Brass Body': ''
    },
    images: [
      '/images/products/ganga/kubix-prime-gold/GL-2512-basin-mixer.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 178,
    tags: ['premium', 'gold', 'kubix-prime', 'basin-mixer'],
    warranty: '7 Years'
  },
  {
    id: 'kubix-prime-gold-flush-valve',
    name: 'Kubix Prime Gold Metropole Flush Valve',
    category: 'cp-fittings',
    subcategory: 'Flush Systems',
    collection: 'Kubix Prime Gold',
    price: 6061,
    originalPrice: 7130,
    description: 'Concealed body metropole flush valve with control cock and gold operation plate.',
    features: [
      '7 Years Warranty',
      'Concealed Installation',
      'Premium Gold Operation Plate',
      'High Performance'
    ],
    specifications: {
      'Catalogue No': 'GL-016',
      '40MM Control Cock': '',
      '1.5" Operation Plate (Square)': '',
      'Concealed Body Design': '',
      'Gold Finish': ''
    },
    images: [
      '/images/products/ganga/kubix-prime-gold/GL-016-flush-valve.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 67,
    tags: ['premium', 'gold', 'kubix-prime', 'flush-valve'],
    warranty: '7 Years'
  },

  // Flort Prime Jet Black Collection
  {
    id: 'flort-prime-jet-black-bib-cock',
    name: 'Flort Prime Jet Black Bib Cock with Wall Flange',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Flort Prime Jet Black',
    price: 2452,
    originalPrice: 2885,
    description: 'Sophisticated jet black finish bib cock with wall flange, featuring 20mm ceramic cartridge.',
    features: [
      '7 Years Warranty',
      'Premium Jet Black Finish',
      'High Quality Ceramic Disc',
      'Corrosion Resistant'
    ],
    specifications: {
      'Catalogue No': 'BL-2401',
      '20MM Ceramic Cartridge': '',
      'Brass Body Construction': '',
      'Jet Black Premium Finish': '',
      'Quarter Turn Operation': ''
    },
    images: [
      '/images/products/ganga/flort-prime-jet-black/BL-2401-bib-cock.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
    tags: ['premium', 'jet-black', 'flort-prime', 'bib-cock'],
    warranty: '7 Years'
  },
  {
    id: 'flort-prime-jet-black-pillar-cock',
    name: 'Flort Prime Jet Black Pillar Cock',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Flort Prime Jet Black',
    price: 3319,
    originalPrice: 3905,
    description: 'Elegant jet black finish pillar cock with premium ceramic cartridge.',
    features: [
      '7 Years Warranty',
      'Premium Jet Black Finish',
      'High Flow Design',
      'Durable Construction'
    ],
    specifications: {
      'Catalogue No': 'BL-2402',
      '20MM Ceramic Cartridge': '',
      'Jet Black Premium Finish': '',
      'Brass Body Construction': ''
    },
    images: [
      '/images/products/ganga/flort-prime-jet-black/BL-2402-pillar-cock.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ['premium', 'jet-black', 'flort-prime', 'pillar-cock'],
    warranty: '7 Years'
  },
  {
    id: 'flort-prime-jet-black-basin-mixer',
    name: 'Flort Prime Jet Black Single Lever Basin Mixer',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Flort Prime Jet Black',
    price: 4730,
    originalPrice: 5565,
    description: 'Premium single lever basin mixer with 450mm braided hoses in jet black finish.',
    features: [
      '7 Years Warranty',
      'Easy Single Lever Control',
      'Premium Jet Black Finish',
      'High Quality Hoses'
    ],
    specifications: {
      'Catalogue No': 'BL-2419',
      '450mm Braided Hoses': '',
      'Jet Black Premium Finish': '',
      'Single Lever Operation': ''
    },
    images: [
      '/images/products/ganga/flort-prime-jet-black/BL-2419-basin-mixer.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 156,
    tags: ['premium', 'jet-black', 'flort-prime', 'basin-mixer'],
    warranty: '7 Years'
  },
  {
    id: 'flort-prime-jet-black-flush-valve',
    name: 'Flort Prime Jet Black Metropole Flush Valve',
    category: 'cp-fittings',
    subcategory: 'Flush Systems',
    collection: 'Flort Prime Jet Black',
    price: 6753,
    originalPrice: 7945,
    description: 'Concealed body metropole flush valve with control cock and jet black operation plate.',
    features: [
      '7 Years Warranty',
      'Concealed Installation',
      'Premium Jet Black Operation Plate',
      'High Performance'
    ],
    specifications: {
      'Catalogue No': 'BL-051',
      '40MM Control Cock': '',
      '1.5" Operation Plate': '',
      'Concealed Body Design': ''
    },
    images: [
      '/images/products/ganga/flort-prime-jet-black/BL-051-flush-valve.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ['premium', 'jet-black', 'flort-prime', 'flush-valve'],
    warranty: '7 Years'
  },

  // Italian Collection
  {
    id: 'italian-thermostatic-mixer',
    name: 'Italian Collection Concealed 2 Way Thermostatic Mixer',
    category: 'cp-fittings',
    subcategory: 'Shower Mixers',
    collection: 'Italian Collection',
    price: 26656,
    originalPrice: 31360,
    description: 'Premium concealed 2 way high flow bath & shower mixer with thermostatic control cartridge.',
    features: [
      '1 Year Warranty',
      'Thermostatic Temperature Control',
      'Safety Features',
      'High Flow Design',
      'Italian Engineering'
    ],
    specifications: {
      'Catalogue No': 'SP3003',
      'Concealed 2 Way High Flow': '',
      'Thermostatic Control Cartridge': '',
      'Temperature Control': '',
      'Safety Cut-off at 38°C': ''
    },
    images: [
      '/images/products/ganga/italian-collection/SP3003-thermostatic-mixer.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 124,
    tags: ['premium', 'italian', 'thermostatic', 'mixer'],
    warranty: '1 Year'
  },
  {
    id: 'italian-3way-mixer',
    name: 'Italian Collection Concealed 3 Way Thermostatic Mixer',
    category: 'cp-fittings',
    subcategory: 'Shower Mixers',
    collection: 'Italian Collection',
    price: 31497,
    originalPrice: 37055,
    description: 'Premium concealed 3 way high flow bath & shower mixer with thermostatic control.',
    features: [
      '1 Year Warranty',
      '3 Way Control',
      'Thermostatic Temperature Control',
      'Italian Engineering',
      'Premium Quality'
    ],
    specifications: {
      'Catalogue No': 'SP3004',
      'Concealed 3 Way High Flow': '',
      'Thermostatic Control Cartridge': '',
      'Temperature Control': '',
      'Multiple Outlet Control': ''
    },
    images: [
      '/images/products/ganga/italian-collection/SP3004-3way-mixer.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
    tags: ['premium', 'italian', 'thermostatic', '3-way', 'mixer'],
    warranty: '1 Year'
  },

  // Elegance Collection
  {
    id: 'elegance-bib-cock',
    name: 'Elegance Bib Cock with Wall Flange',
    category: 'cp-fittings',
    subcategory: 'Basin Mixers',
    collection: 'Elegance',
    price: 1534,
    originalPrice: 1805,
    description: 'Classic elegance bib cock with wall flange, featuring 20mm cartridge.',
    features: [
      '7 Years Warranty',
      'Classic Design',
      'Chrome Finish',
      'Reliable Performance'
    ],
    specifications: {
      'Catalogue No': '701',
      '20MM Cartridge': '',
      'Brass Body': '',
      'Chrome Finish': '',
      'Wall Flange Included': ''
    },
    images: [
      '/images/products/ganga/elegance/701-bib-cock.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 178,
    tags: ['elegance', 'chrome', 'bib-cock', 'classic'],
    warranty: '7 Years'
  },
  {
    id: 'elegance-sink-mixer',
    name: 'Elegance Sink Mixer with Regular Swinging Spout',
    category: 'cp-fittings',
    subcategory: 'Sink Mixers',
    collection: 'Elegance',
    price: 4977,
    originalPrice: 5855,
    description: 'Premium sink mixer with regular swinging spout for kitchen and utility areas.',
    features: [
      '7 Years Warranty',
      'Swinging Spout Design',
      'Easy Operation',
      'Chrome Finish'
    ],
    specifications: {
      'Catalogue No': '712',
      'Regular Swinging Spout': '',
      'Wall Mounted': '',
      'Chrome Finish': '',
      '20MM Cartridge': ''
    },
    images: [
      '/images/products/ganga/elegance/712-sink-mixer.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 156,
    tags: ['elegance', 'sink-mixer', 'chrome', 'swinging-spout'],
    warranty: '7 Years'
  },
  {
    id: 'elegance-wall-mixer',
    name: 'Elegance Wall Mixer with Bend for Overhead Shower',
    category: 'cp-fittings',
    subcategory: 'Wall Mixers',
    collection: 'Elegance',
    price: 6031,
    originalPrice: 7095,
    description: 'Wall mixer with bend for overhead shower arrangement in classic elegance design.',
    features: [
      '7 Years Warranty',
      'Overhead Shower Support',
      'Classic Design',
      'Chrome Finish'
    ],
    specifications: {
      'Catalogue No': '716',
      'Overhead Shower Arrangement': '',
      'Wall Mounted': '',
      'Chrome Finish': '',
      'Bend Included': ''
    },
    images: [
      '/images/products/ganga/elegance/716-wall-mixer.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 123,
    tags: ['elegance', 'wall-mixer', 'overhead-shower', 'chrome'],
    warranty: '7 Years'
  },
  {
    id: 'elegance-flush-cock',
    name: 'Elegance Flush Cock with Washer System',
    category: 'cp-fittings',
    subcategory: 'Flush Systems',
    collection: 'Elegance',
    price: 2975,
    originalPrice: 3500,
    description: 'Flush cock with washer system and adjustable wall flange (25mm).',
    features: [
      '7 Years Warranty',
      'Washer System',
      '25mm Adjustable Wall Flange',
      'Reliable Performance'
    ],
    specifications: {
      'Catalogue No': '721',
      'Washer System': '',
      '25mm Adjustable Wall Flange': '',
      'Chrome Finish': '',
      'Heavy Duty': ''
    },
    images: [
      '/images/products/ganga/elegance/721-flush-cock.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 123,
    tags: ['elegance', 'flush-cock', 'washer-system', 'chrome'],
    warranty: '7 Years'
  },

  // Tora SS Collection
  {
    id: 'tora-ss-overhead-shower',
    name: 'Tora SS Overhead Shower 8x8 Square with Arm & Flange',
    category: 'shower-systems',
    subcategory: 'Overhead Showers',
    collection: 'Tora SS',
    price: 3149,
    originalPrice: 3705,
    description: 'Premium stainless steel overhead shower 8x8 square with 18" arm and flange.',
    features: [
      'No Warranty',
      'Stainless Steel Construction',
      'Large 8x8 Coverage',
      '18" Arm Length',
      'Pixel Shower Design'
    ],
    specifications: {
      '8x8 Square Design': '',
      'SS 304 Construction': '',
      '18" Shower Arm': '',
      'Wall Flange Included': '',
      'Pixel Shower Technology': ''
    },
    images: [
      '/images/products/ganga/tora-ss/overhead-shower-8x8.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 267,
    tags: ['tora-ss', 'overhead-shower', 'stainless-steel', '8x8'],
    warranty: 'No Warranty'
  },

  // LEXOR 3D Collection
  {
    id: 'lexor-3d-smart-toilet',
    name: 'LEXOR 3D Smart Toilet Floor Mounted',
    category: 'sanitary-ware',
    subcategory: 'Toilets',
    collection: 'LEXOR 3D',
    price: 18999,
    originalPrice: 22999,
    description: 'Advanced 3D smart toilet with modern features and floor mounted design.',
    features: [
      'Smart Technology',
      'Water Efficient',
      'Modern Design',
      'Easy Maintenance',
      'Premium Quality'
    ],
    specifications: {
      'Floor Mounted Design': '',
      '3D Smart Technology': '',
      'Advanced Flushing System': '',
      'Modern Design': '',
      'Easy Installation': ''
    },
    images: [
      '/images/products/ganga/lexor-3d/smart-toilet-floor-mounted.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
    tags: ['lexor-3d', 'smart-toilet', 'floor-mounted', '3d-technology'],
    warranty: '7 Years'
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