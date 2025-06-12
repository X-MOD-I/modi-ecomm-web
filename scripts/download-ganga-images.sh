#!/bin/bash
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
