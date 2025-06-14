# CSV Data Import Guide

This guide explains how to easily populate your Bath Gallery Store website with product data from your scraped CSV files.

## 🚀 Quick Start (Easiest Method)

### Step 1: Import Your CSV Data
Run these commands in your terminal:

```bash
# Import Ganga products (2000+ products)
npm run import-ganga

# Import Tora shower products (22 products)  
npm run import-tora
```

### Step 2: Test the Imported Data
Start your development server to see the new products:

```bash
npm run dev
```

Visit `http://localhost:3000` and you should see your imported products displayed!

## 📋 What the Scripts Do

### 1. **CSV to TypeScript Conversion** (`scripts/csv-to-products.js`)

**What it does:**
- ✅ Reads your CSV files
- ✅ Converts data to match your existing TypeScript interface
- ✅ Generates realistic prices based on product types
- ✅ Extracts features from product names automatically
- ✅ Categorizes products intelligently
- ✅ Uses original images from your CSV
- ✅ Creates realistic specifications, ratings, and reviews
- ✅ Handles duplicate product names and missing data

**Input CSV Format:**
```csv
Category,Name,Product URL,Image URL,Description
ganga-cp-bath-fittings,001 – Bidet Spray (Health Faucet),https://...,https://...,Catalogue No : 001
```

**Output TypeScript:**
- Clean TypeScript files matching your existing `Product` interface
- Automatically categorized and organized
- Ready to import into your website

### 2. **Product Data Integration**

The converted data automatically includes:

- **Smart Categorization**: Products are categorized based on their names
  - Basin Mixers, Shower Mixers, Health Faucets, etc.
- **Realistic Pricing**: Generated based on product types and features
- **Feature Extraction**: Automatically detects features like "Single Lever", "Concealed", etc.
- **Specifications**: Technical specs based on product names and types
- **Collections**: Extracts collection names like "Elegance", "Ultra Slim", etc.

## 🎯 Advanced Usage

### Custom CSV Import
```bash
# Import any CSV file
node scripts/csv-to-products.js your-file.csv output-file.ts

# Example with custom output location
node scripts/csv-to-products.js custom-products.csv src/data/custom-products.ts
```

### Manual Integration
If you want to manually integrate the data:

1. **Run the conversion:**
   ```bash
   npm run import-ganga
   ```

2. **Import in your components:**
   ```typescript
   import { csvImportedProducts } from '@/data/ganga-products';
   
   // Use in your React component
   const products = csvImportedProducts;
   ```

## 📊 Data Mapping

Your CSV data is automatically mapped as follows:

| CSV Field | TypeScript Field | Processing |
|-----------|------------------|------------|
| `Category` | `category` + `subcategory` | Smart categorization |
| `Name` | `name` | Cleaned (removes catalog numbers) |
| `Image URL` | `images[]` | Direct mapping |
| `Description` | `description` | Enhanced with generated content |
| `Product URL` | Not used | Original URLs preserved in comments |
| Auto-generated | `price` | Based on product type and features |
| Auto-generated | `features[]` | Extracted from name and description |
| Auto-generated | `specifications` | Generated based on product type |
| Auto-generated | `rating`, `reviewCount` | Realistic random values |

## 🏷️ Product Categorization

Products are automatically categorized:

### Main Categories:
- **`cp-fittings`**: Chrome Plated Bath Fittings
- **`shower-systems`**: Shower Systems and Accessories

### Subcategories:
- Basin Mixers, Shower Mixers, Health Faucets
- Kitchen Taps, Basin Taps, Stop Cocks
- Flush Systems, Overhead Showers, Hand Showers

### Collections:
- Elegance Collection, Ultra Slim Collection
- WaterFall Collection, Maze Collection
- And more extracted from product names

## 💰 Pricing Strategy

Prices are generated based on:

- **Product Type**: Basin mixers cost more than stop cocks
- **Features**: Single lever adds ₹500, concealed adds ₹800
- **Size/Specifications**: Larger sizes cost more
- **Random Variation**: ±₹200 for realistic variety

**Price Ranges:**
- Stop Cocks: ₹300-600
- Health Faucets: ₹600-1200  
- Basin Mixers: ₹2000-4000
- Shower Mixers: ₹3000-5000
- Concealed Systems: ₹4000-8000

## 🔧 Customization Options

### Modify Price Generation
Edit `scripts/csv-to-products.js` and update the `generatePrice()` function:

```javascript
const basePrices = {
  'basin mixer': 2500,    // Change base prices
  'shower mixer': 3500,
  'health faucet': 800,
  // Add more product types
};
```

### Add New Categories
Update the `categorizeProduct()` function:

```javascript
const subcategoryMap = {
  'your-product-type': 'Your Category',
  // Add more mappings
};
```

### Customize Features
Modify the `extractFeatures()` function to detect more features:

```javascript
const featureMap = {
  'your-keyword': 'Your Feature Name',
  // Add more feature detection
};
```

## 📁 File Structure After Import

```
src/data/
├── products.ts           # Your original product data
├── ganga-products.ts     # 2000+ imported Ganga products
├── tora-products.ts      # 22 imported Tora shower products
└── imported-products.ts  # Combined imports (if using merger)
```

## 🐛 Troubleshooting

### CSV Parsing Issues
- **Problem**: Special characters in product names
- **Solution**: The script handles most special characters automatically

### Missing Images
- **Problem**: Some products don't have image URLs
- **Solution**: Script automatically generates placeholder images

### Pricing Concerns
- **Problem**: Generated prices don't match your strategy
- **Solution**: Edit the `generatePrice()` function with your pricing logic

### Category Mapping
- **Problem**: Products are miscategorized
- **Solution**: Update the `categorizeProduct()` function with better keywords

## 🚀 Next Steps

1. **Review Imported Data**: Check the generated files for accuracy
2. **Adjust Pricing**: Modify price generation logic if needed
3. **Add Real Images**: Replace placeholder images with actual product photos
4. **SEO Optimization**: Add better descriptions and keywords
5. **Update Categories**: Fine-tune categorization based on your business

## 📞 Integration with Existing Website

The imported products will automatically work with your existing:
- ✅ Product display components
- ✅ Search functionality  
- ✅ Category filtering
- ✅ WhatsApp integration
- ✅ Inquiry forms
- ✅ Quote generation

## 🎉 Benefits

- **Instant Catalog**: 2000+ products ready immediately
- **Professional Presentation**: Structured data with proper categorization
- **SEO Ready**: Proper product descriptions and metadata
- **Mobile Responsive**: Works with your existing responsive design
- **Business Ready**: Integrated with your inquiry-based sales model

---

**Your scraped data is now beautifully integrated into your professional bathroom fittings catalog!** 🚿✨ 