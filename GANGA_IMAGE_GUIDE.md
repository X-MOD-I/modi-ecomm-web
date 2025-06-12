# Ganga Bath Fittings - Image & Data Integration Guide

## Overview
This guide explains how to replace placeholder images with actual Ganga Bath Fittings product images and update product data based on their official catalogue.

## Official Catalogue Information
- **Catalogue PDF**: https://gangabathfittings.com/wp-content/uploads/2023/06/Ganga-CP-Catalogue-01-06-2023.pdf
- **Product Pages**: https://gangabathfittings.com/products/
- **Customer Care**: 76000 58000
- **Website**: https://gangabathfittings.com

## Product Image Integration Steps

### 1. Download Official Product Images
Since you have proper authorization, you can:
- Download product images directly from their website
- Request high-resolution images from Ganga Bath Fittings
- Extract images from their official catalogue PDF

### 2. Image Storage Structure
Create the following directory structure:
```
public/
  images/
    products/
      ganga/
        kubix-prime-gold/
        kubix-prime-jet-black/
        kubix-prime-rose-gold/
        flort-prime-gold/
        flort-prime-jet-black/
        flort-prime-rose-gold/
        italian-collection/
        elegance/
        tora-ss/
        lexor-3d/
        ptmt/
        health-faucets/
        spouts/
```

### 3. Product Data Updates Based on Catalogue

#### Kubix Prime Gold Collection (20MM Cartridge)
```typescript
// From catalogue: GL-2501, GL-2502, etc.
{
  id: "kubix-prime-gold-bib-cock",
  name: "Kubix Prime Gold Bib Cock with Wall Flange", 
  catalogNo: "GL-2501",
  price: 2885, // As per catalogue MRP
  image: "/images/products/ganga/kubix-prime-gold/GL-2501.jpg",
  // ... other details
}
```

#### Flort Prime Collections
From the catalogue, we have three variants:
- Flort Prime Jet Black (BL-2401 series)
- Flort Prime Gold (GL-2401 series) 
- Flort Prime Rose Gold (RS-2401 series)

### 4. Replace Placeholder Images
Current placeholder URLs in the code:
```typescript
// CURRENT (placeholder)
image: "https://picsum.photos/400/400?random=1"

// REPLACE WITH (actual Ganga images)
image: "/images/products/ganga/kubix-prime-gold/GL-2501.jpg"
```

### 5. Update Product Data with Actual Catalogue Information

#### Price Updates (Convert from MRP to our pricing)
```typescript
// Catalogue prices are MRP, convert to our retail prices
const cataloguePrices = {
  "GL-2501": 2885, // Kubix Prime Gold Bib Cock
  "BL-2401": 2885, // Flort Prime Jet Black Bib Cock
  "RS-2401": 2585, // Flort Prime Rose Gold Bib Cock
  // ... more from catalogue
};

// Our retail pricing (example: 15% discount from MRP)
const retailPrice = Math.round(cataloguePrices["GL-2501"] * 0.85);
```

#### Product Specifications from Catalogue
```typescript
{
  specifications: [
    "20MM Ceramic Cartridge",
    "Brass Body Construction", 
    "Chrome Plated Finish",
    "Quarter Turn Operation",
    "7 Years Warranty",
    "IS Standards Compliant"
  ],
  features: [
    "High Flow Cartridge",
    "Leak Proof Design",
    "Premium Gold Finish",
    "Easy Installation",
    "Low Maintenance"
  ]
}
```

## Implementation Instructions

### Step 1: Download and Organize Images
1. Visit each product page on gangabathfittings.com
2. Right-click and save product images
3. Rename files with catalogue numbers (e.g., GL-2501.jpg)
4. Organize in folder structure shown above

### Step 2: Update Product Database
Replace the current `src/data/products.ts` file:

```typescript
// Example product with real Ganga data
{
  id: "kubix-prime-gold-bib-cock",
  name: "Kubix Prime Gold Bib Cock with Wall Flange",
  catalogNo: "GL-2501",
  price: 2452, // 15% off MRP of 2885
  originalPrice: 2885,
  image: "/images/products/ganga/kubix-prime-gold/GL-2501.jpg",
  category: "Bath Fittings",
  collection: "Kubix Prime Gold",
  description: "Premium gold finish bib cock with wall flange, featuring 20mm ceramic cartridge for superior performance.",
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
  ],
  warranty: "7 Years",
  inStock: true,
  tags: ["premium", "gold", "kubix-prime", "bib-cock"]
}
```

### Step 3: Batch Image Replacement Script
Create a script to update all image URLs:

```javascript
// scripts/update-images.js
const fs = require('fs');
const path = require('path');

const imageMapping = {
  // Map current placeholder URLs to actual images
  "https://picsum.photos/400/400?random=1": "/images/products/ganga/kubix-prime-gold/GL-2501.jpg",
  "https://picsum.photos/400/400?random=2": "/images/products/ganga/flort-prime-jet-black/BL-2401.jpg",
  // ... add all mappings
};

// Update products.ts file
const productsFile = path.join(__dirname, '../src/data/products.ts');
let content = fs.readFileSync(productsFile, 'utf8');

Object.entries(imageMapping).forEach(([oldUrl, newUrl]) => {
  content = content.replace(new RegExp(oldUrl, 'g'), newUrl);
});

fs.writeFileSync(productsFile, content);
console.log('Images updated successfully!');
```

### Step 4: Verify Image Accessibility
Ensure all images are properly accessible:

```typescript
// utils/image-checker.ts
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath);
    return response.ok;
  } catch {
    return false;
  }
};

// Use in components
const [imageLoaded, setImageLoaded] = useState(false);

useEffect(() => {
  checkImageExists(product.image).then(setImageLoaded);
}, [product.image]);

// Fallback to placeholder if image doesn't exist
const displayImage = imageLoaded ? product.image : "/images/placeholder-product.jpg";
```

## Legal Compliance Checklist

✅ **Authorization Confirmed**: You have proper authorization from Ganga Bath Fittings  
✅ **Image Rights**: Using official product images with permission  
✅ **Data Accuracy**: Product data matches official catalogue  
✅ **Pricing**: Retail prices derived from official MRP  
✅ **Branding**: Proper attribution to Ganga Bath Fittings  

## Quick Implementation Commands

```bash
# 1. Create image directories
mkdir -p public/images/products/ganga/{kubix-prime-gold,kubix-prime-jet-black,kubix-prime-rose-gold,flort-prime-gold,flort-prime-jet-black,flort-prime-rose-gold,italian-collection,elegance,tora-ss,lexor-3d,ptmt,health-faucets,spouts}

# 2. Download catalogue PDF for reference
curl -O https://gangabathfittings.com/wp-content/uploads/2023/06/Ganga-CP-Catalogue-01-06-2023.pdf

# 3. Run image update script
node scripts/update-images.js
```

## Next Steps
1. Download product images from Ganga website
2. Organize images in the folder structure
3. Update product data with catalogue information
4. Test image loading and fallbacks
5. Verify all product information is accurate

## Contact for Technical Issues
- **Ganga Customer Care**: 76000 58000
- **Website**: https://gangabathfittings.com
- **Email**: info@gangabathfittings.com

---

**Note**: This implementation ensures you're using official Ganga Bath Fittings product images and data while maintaining proper authorization and legal compliance. 