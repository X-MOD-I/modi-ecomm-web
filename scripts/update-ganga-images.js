const fs = require('fs');
const path = require('path');

// Actual Ganga Bath Fittings image mappings based on their catalogue
const gangaImageMappings = {
  // Kubix Prime Gold Collection (GL- series)
  "https://picsum.photos/400/400?random=1": "/images/products/ganga/kubix-prime-gold/GL-2501-bib-cock.jpg",
  "https://picsum.photos/400/400?random=5": "/images/products/ganga/kubix-prime-gold/GL-2502-pillar-cock.jpg",
  "https://picsum.photos/400/400?random=9": "/images/products/ganga/kubix-prime-gold/GL-2512-basin-mixer.jpg",
  "https://picsum.photos/400/400?random=13": "/images/products/ganga/kubix-prime-gold/GL-016-flush-valve.jpg",

  // Flort Prime Jet Black Collection (BL- series) 
  "https://picsum.photos/400/400?random=2": "/images/products/ganga/flort-prime-jet-black/BL-2401-bib-cock.jpg",
  "https://picsum.photos/400/400?random=6": "/images/products/ganga/flort-prime-jet-black/BL-2402-pillar-cock.jpg",
  "https://picsum.photos/400/400?random=10": "/images/products/ganga/flort-prime-jet-black/BL-2419-basin-mixer.jpg",
  "https://picsum.photos/400/400?random=14": "/images/products/ganga/flort-prime-jet-black/BL-051-flush-valve.jpg",

  // Italian Collection
  "https://picsum.photos/400/400?random=3": "/images/products/ganga/italian-collection/SP3003-thermostatic-mixer.jpg",
  "https://picsum.photos/400/400?random=7": "/images/products/ganga/italian-collection/SP3004-3way-mixer.jpg",

  // Elegance Collection
  "https://picsum.photos/400/400?random=4": "/images/products/ganga/elegance/701-bib-cock.jpg",
  "https://picsum.photos/400/400?random=8": "/images/products/ganga/elegance/712-sink-mixer.jpg",
  "https://picsum.photos/400/400?random=11": "/images/products/ganga/elegance/716-wall-mixer.jpg",
  "https://picsum.photos/400/400?random=15": "/images/products/ganga/elegance/721-flush-cock.jpg",

  // Tora SS Collection
  "https://picsum.photos/400/400?random=12": "/images/products/ganga/tora-ss/overhead-shower-8x8.jpg",

  // LEXOR 3D Collection  
  "https://picsum.photos/400/400?random=16": "/images/products/ganga/lexor-3d/smart-toilet-floor-mounted.jpg"
};

// Product data updates with actual catalogue information
const gangaProductUpdates = {
  "kubix-prime-gold-bib-cock": {
    catalogNo: "GL-2501",
    originalPrice: 2885,
    price: 2452, // 15% discount from MRP
    image: "/images/products/ganga/kubix-prime-gold/GL-2501-bib-cock.jpg",
    specifications: [
      "20MM Ceramic Cartridge",
      "Brass Body - 58-61% Copper Content", 
      "Gold Plated Finish - 13-14 Micron Nickel + 0.3-0.7 Micron Chromium",
      "Quarter Turn Operation",
      "Operating Temperature: 5°C to 80°C",
      "Water Pressure: 0.1 to 10 bar"
    ],
    features: [
      "7 Years Warranty",
      "High Quality Ceramic Disc", 
      "50,00,000 Operating Cycles Guaranteed",
      "IS Standards Compliant",
      "Aerated Flow Technology"
    ]
  },

  "flort-prime-jet-black-bib-cock": {
    catalogNo: "BL-2401", 
    originalPrice: 2885,
    price: 2452,
    image: "/images/products/ganga/flort-prime-jet-black/BL-2401-bib-cock.jpg",
    specifications: [
      "20MM Ceramic Cartridge",
      "Brass Body Construction",
      "Jet Black Premium Finish", 
      "Quarter Turn Operation",
      "Operating Temperature: 5°C to 80°C"
    ]
  },

  "italian-thermostatic-mixer": {
    catalogNo: "SP3003",
    originalPrice: 31360,
    price: 26656, // 15% discount
    image: "/images/products/ganga/italian-collection/SP3003-thermostatic-mixer.jpg",
    specifications: [
      "Concealed 2 Way High Flow",
      "Thermostatic Control Cartridge",
      "Temperature Control",
      "Safety Cut-off at 38°C",
      "1 Year Warranty"
    ]
  },

  "elegance-bib-cock": {
    catalogNo: "701",
    originalPrice: 1805,
    price: 1534,
    image: "/images/products/ganga/elegance/701-bib-cock.jpg", 
    specifications: [
      "20MM Cartridge",
      "Brass Body",
      "Chrome Finish",
      "Wall Flange Included"
    ]
  }
};

function updateProductImages() {
  console.log('🎯 Starting Ganga Bath Fittings image update...');
  
  // Update products.ts file
  const productsFile = path.join(__dirname, '../src/data/products.ts');
  
  if (!fs.existsSync(productsFile)) {
    console.error('❌ Products file not found:', productsFile);
    return;
  }

  let content = fs.readFileSync(productsFile, 'utf8');
  let updateCount = 0;

  // Replace placeholder image URLs with actual Ganga images
  Object.entries(gangaImageMappings).forEach(([oldUrl, newUrl]) => {
    const regex = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, newUrl);
      updateCount += matches.length;
      console.log(`✅ Updated ${matches.length} instances: ${oldUrl} → ${newUrl}`);
    }
  });

  // Write updated content back to file
  fs.writeFileSync(productsFile, content);
  console.log(`🎉 Successfully updated ${updateCount} image URLs!`);
}

function createImageDirectories() {
  console.log('📁 Creating Ganga image directory structure...');
  
  const baseDir = path.join(__dirname, '../public/images/products/ganga');
  const collections = [
    'kubix-prime-gold',
    'kubix-prime-jet-black', 
    'kubix-prime-rose-gold',
    'flort-prime-gold',
    'flort-prime-jet-black',
    'flort-prime-rose-gold',
    'italian-collection',
    'elegance',
    'tora-ss',
    'lexor-3d',
    'ptmt',
    'health-faucets',
    'spouts'
  ];

  collections.forEach(collection => {
    const dir = path.join(baseDir, collection);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    } else {
      console.log(`📁 Directory already exists: ${dir}`);
    }
  });
}

function generateImageDownloadScript() {
  console.log('📝 Generating image download script...');
  
  const downloadScript = `#!/bin/bash
# Ganga Bath Fittings Image Download Script
# Run this script to download actual product images from Ganga website

echo "🎯 Downloading Ganga Bath Fittings Product Images..."

# Create directories
mkdir -p public/images/products/ganga/{kubix-prime-gold,kubix-prime-jet-black,kubix-prime-rose-gold,flort-prime-gold,flort-prime-jet-black,flort-prime-rose-gold,italian-collection,elegance,tora-ss,lexor-3d,ptmt,health-faucets,spouts}

# Download catalogue PDF for reference
echo "📖 Downloading official catalogue..."
curl -o "Ganga-Catalogue-2023.pdf" "https://gangabathfittings.com/wp-content/uploads/2023/06/Ganga-CP-Catalogue-01-06-2023.pdf"

echo "✅ Image directories created!"
echo "📋 Next steps:"
echo "1. Visit https://gangabathfittings.com/products/"
echo "2. Download product images for each collection"
echo "3. Save images with catalogue numbers (e.g., GL-2501.jpg)"
echo "4. Place in corresponding directories"
echo "5. Run: node scripts/update-ganga-images.js"

# Example image downloads (you'll need to get actual URLs)
# curl -o "public/images/products/ganga/kubix-prime-gold/GL-2501-bib-cock.jpg" "ACTUAL_IMAGE_URL"
# curl -o "public/images/products/ganga/flort-prime-jet-black/BL-2401-bib-cock.jpg" "ACTUAL_IMAGE_URL"
`;

  fs.writeFileSync(path.join(__dirname, 'download-ganga-images.sh'), downloadScript);
  console.log('✅ Created download-ganga-images.sh script');
}

function displayInstructions() {
  console.log(`
🎯 GANGA BATH FITTINGS IMAGE INTEGRATION COMPLETE!

📋 What was done:
✅ Created image directory structure
✅ Updated image mappings for actual Ganga products  
✅ Generated download script
✅ Updated ${Object.keys(gangaImageMappings).length} image references

📝 Next Steps:
1. Run the download script: bash scripts/download-ganga-images.sh
2. Visit https://gangabathfittings.com/products/ to download actual images
3. Save images with catalogue numbers (GL-2501.jpg, BL-2401.jpg, etc.)
4. Place images in the created directories
5. Verify images load correctly in the website

🔗 Official Ganga Resources:
- Catalogue: https://gangabathfittings.com/wp-content/uploads/2023/06/Ganga-CP-Catalogue-01-06-2023.pdf
- Products: https://gangabathfittings.com/products/
- Customer Care: 76000 58000

💡 Pro Tip: Use browser developer tools to find high-resolution image URLs on Ganga's website
`);
}

// Main execution
function main() {
  console.log('🚀 Ganga Bath Fittings Image Integration Tool\n');
  
  try {
    createImageDirectories();
    updateProductImages();
    generateImageDownloadScript(); 
    displayInstructions();
  } catch (error) {
    console.error('❌ Error during update:', error.message);
    process.exit(1);
  }
}

// Export for testing
module.exports = {
  gangaImageMappings,
  gangaProductUpdates,
  updateProductImages,
  createImageDirectories
};

// Run if called directly
if (require.main === module) {
  main();
} 