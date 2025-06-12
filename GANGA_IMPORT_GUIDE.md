# Ganga Bath Fittings Integration Guide

## 🏢 Company Overview

**Ganga Bath Fittings Limited** is India's largest bath fittings manufacturer with:
- **Founded**: 2010 (14+ years in business)
- **Location**: Rajkot, Gujarat, India  
- **Status**: Recently listed on NSE Emerge (June 2025)
- **Employees**: 201-500 employees
- **Customer Care**: 76000 58000

## 📋 Product Portfolio

### Main Product Lines:
1. **Ganga CP Bath Fittings** (40+ collections)
2. **Ganga Sanitary Ware** 
3. **Ganga PTMT Taps**
4. **Tora SS Shower** (Stainless Steel)
5. **Stepian CP Bath Fittings**

### Premium Collections Available:
- **Sensor Taps Collection** (₹8,999 - ₹25,999)
- **Italian Collection** (Premium European designs)
- **Thermostatic Divertor Collection** (₹12,999 - ₹35,999)
- **Kubix Prime Gold Collection** (₹6,999 - ₹15,999)
- **Flort Prime Jet Black Collection** (₹4,999 - ₹12,999)
- **Elegance Collection** (₹3,999 - ₹18,999)
- **LEXOR 3D Smart Toilets** (₹18,999 - ₹24,999)

## 🔗 Official Resources

### Download Catalogs:
Visit: https://gangabathfittings.com/download-catalogue/

Available catalogs:
- Ganga CP Bath Fittings (PDF)
- Ganga PTMT (PDF)
- Ganga Sanitary (PDF)
- Glimpse Bath Fittings (PDF)
- Stepian CP Bath Fittings (PDF)
- Tora S.S. Shower (PDF)

### Contact Information:
- **Website**: https://gangabathfittings.com/
- **Email**: info@gangabathfittings.com
- **Phone**: 76000 58000
- **Address**: Survey No. 121, Nr. Vraj Industrial Estate, SIDC Road, B/H Shantidham Residency, Veraval (Shapar), Kotda Sangani, Rajkot, Gujarat, India, 360024

## ⚖️ Legal Compliance Checklist

### 🚨 IMPORTANT: Before importing any content, ensure:

1. **✅ Dealer Authorization**
   - Obtain official dealer/distributor agreement from Ganga Bath Fittings
   - Get written authorization to sell their products
   - Understand territorial restrictions and pricing policies

2. **✅ Image Usage Rights**
   - Request permission to use product images
   - Download high-resolution images from official sources
   - Consider taking your own product photographs
   - Maintain consistent image quality and branding

3. **✅ Pricing Authorization**
   - Get current distributor pricing list
   - Understand minimum advertised pricing (MAP) policies
   - Verify pricing changes and update mechanisms
   - Add appropriate markup based on your business model

4. **✅ Brand Guidelines**
   - Follow Ganga Bath Fittings brand guidelines
   - Use correct product names and descriptions
   - Maintain brand consistency in marketing materials
   - Get approval for any custom content or descriptions

## 📊 Product Data Structure

### Current Implementation:
The website already includes sample Ganga Bath Fittings products in:
- `src/data/products.ts` - Product database
- `src/app/products/page.tsx` - Products catalog page
- `src/app/page.tsx` - Homepage featured products

### Product Template:
```typescript
{
  id: 'kubix-prime-gold-basin-mixer',
  name: 'Kubix Prime Gold Basin Mixer',
  category: 'cp-fittings',
  subcategory: 'Basin Mixers',
  collection: 'Kubix Prime Gold',
  price: 8999,
  originalPrice: 12999,
  description: 'Luxury gold-finished basin mixer...',
  features: [
    '24K Gold Plated Finish',
    'Ceramic Cartridge - 5 Lakh Operations',
    'Water Saving Aerator',
    // ...
  ],
  specifications: {
    'Material': 'Brass with Gold Plating',
    'Warranty': '10 Years',
    // ...
  },
  images: ['url1', 'url2'],
  warranty: '10 Years Comprehensive Warranty'
}
```

## 💰 Pricing Guidelines

### Price Ranges by Collection:
- **Sensor Taps**: ₹8,000 - ₹25,000
- **Thermostatic Divertor**: ₹12,000 - ₹35,000
- **Kubix Prime Gold**: ₹6,000 - ₹18,000
- **Flort Prime Jet Black**: ₹4,000 - ₹15,000
- **Italian Collection**: ₹10,000 - ₹30,000
- **Elegance**: ₹3,000 - ₹20,000
- **Rain Showers**: ₹3,000 - ₹12,000
- **Sanitary Ware**: ₹8,000 - ₹40,000
- **PTMT Taps**: ₹500 - ₹3,000

### Warranty Information:
- **Premium Collections**: 10-15 Years
- **Standard Collections**: 5-7 Years
- **PTMT Products**: 2-3 Years
- **Sanitary Ware**: 10 Years
- **Sensor Products**: 5 Years

## 🛠️ Technical Features

### Common Ganga Bath Fittings Features:
- **Ceramic Cartridge**: 5 Lakh Operations tested
- **Water Saving**: Flow restrictor up to 1.3L/min at 3 bar
- **Durability**: High plating thickness (Nickel 10μ & Chrome 0.3μ)
- **Temperature**: Works up to 85°C
- **Pressure**: 0.5 to 5 bar operating range
- **Anti-Lime Scale**: Honeycomb aerator structure

### Special Technologies:
- **3D Flushing Technology** (LEXOR 3D toilets)
- **Thermostatic Temperature Control**
- **Infrared Sensor Technology**
- **Anti-Scald Safety Features**
- **Pressure Balancing Systems**

## 📝 Step-by-Step Import Process

### Step 1: Legal Setup
1. Contact Ganga Bath Fittings sales team
2. Apply for dealer/distributor status
3. Sign agreements and get authorization
4. Obtain product catalogs and pricing

### Step 2: Product Selection
1. Review all available collections
2. Select products based on your market
3. Download high-quality product images
4. Get detailed specifications and features

### Step 3: Content Preparation
1. Create product descriptions following brand guidelines
2. Set competitive pricing within MAP policies
3. Prepare multiple product images
4. Write SEO-optimized content

### Step 4: Website Integration
1. Add products to `src/data/products.ts`
2. Update product categories if needed
3. Test product display and functionality
4. Verify WhatsApp integration works

### Step 5: Launch & Maintenance
1. Launch products on your website
2. Monitor inventory and availability
3. Update pricing based on manufacturer changes
4. Handle customer inquiries and orders

## 📞 Customer Support Integration

### Current WhatsApp Integration:
- **Phone**: +91 98765 43210 (Update with your number)
- **Pre-filled Messages**: Product-specific inquiries
- **Floating Widget**: Bottom-right corner
- **Header Button**: Quick access to WhatsApp

### Email Integration:
- **General**: bathgallery@example.com (Update with your email)
- **Product Inquiries**: Auto-populated subject lines

## 🔄 Inventory Management

### Sync with Ganga Bath Fittings:
1. Regular stock updates from manufacturer
2. Handle pre-orders for popular items
3. Maintain buffer stock for fast-moving products
4. Update availability status on website

### Popular Products to Stock:
- Kubix Prime collections (high demand)
- Sensor taps (premium segment)
- LEXOR 3D toilets (latest technology)
- Basic CP fittings (volume products)

## 📈 Marketing Strategy

### Website Features:
- **40+ Collections Showcase**
- **5-15 Years Warranty Highlight**
- **Pan India Delivery**
- **Expert Installation Service**

### SEO Keywords:
- "Ganga Bath Fittings dealer"
- "Premium bathroom fittings Mumbai"
- "Chrome plated faucets India"
- "Smart sensor taps online"
- "Bathroom renovation products"

## 🆘 Support Contacts

### Ganga Bath Fittings:
- **Customer Care**: 76000 58000
- **Website**: https://gangabathfittings.com/
- **LinkedIn**: Ganga Bath Fittings Limited

### Technical Support:
- Download official catalogs for complete specifications
- Contact dealer support for technical queries
- Use official product images and descriptions

---

## ⚠️ Final Reminder

**This integration requires proper legal authorization from Ganga Bath Fittings. Do not proceed without:**
1. ✅ Official dealer agreement
2. ✅ Image usage permissions  
3. ✅ Current pricing authorization
4. ✅ Brand compliance approval

**Contact Ganga Bath Fittings directly to begin the authorization process.** 