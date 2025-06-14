const fs = require('fs');
const path = require('path');

// Function to parse CSV content
function parseCSV(content) {
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] || '';
    });
    return obj;
  });
}

// Function to properly parse CSV lines with commas in quoted fields
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

// Function to generate unique ID from name
function generateId(name) {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Function to categorize products
function categorizeProduct(category, name) {
  const categoryMap = {
    'ganga-cp-bath-fittings': 'cp-fittings',
    'Tora SS Shower': 'shower-systems'
  };
  
  const subcategoryMap = {
    'basin mixer': 'Basin Mixers',
    'shower mixer': 'Shower Mixers',
    'flush valve': 'Flush Systems',
    'bidet spray': 'Health Faucets',
    'health faucet': 'Health Faucets',
    'shower': 'Shower Systems',
    'bib cock': 'Kitchen Taps',
    'pillar cock': 'Basin Taps',
    'angle cock': 'Stop Cocks',
    'stop cock': 'Stop Cocks',
    'sink cock': 'Kitchen Taps',
    'wall mixer': 'Shower Mixers',
    'overhead shower': 'Overhead Showers',
    'telephone shower': 'Hand Showers'
  };
  
  const mappedCategory = categoryMap[category] || 'cp-fittings';
  
  // Try to determine subcategory from product name
  const nameLower = name.toLowerCase();
  let subcategory = 'Other';
  
  for (const [key, value] of Object.entries(subcategoryMap)) {
    if (nameLower.includes(key)) {
      subcategory = value;
      break;
    }
  }
  
  return { category: mappedCategory, subcategory };
}

// Function to extract features from name and description
function extractFeatures(name, description) {
  const features = [];
  
  // Common features to look for in product names
  const featureMap = {
    'single lever': 'Single Lever Operation',
    'concealed': 'Concealed Installation',
    'wall mounted': 'Wall Mount Installation',
    'quarter turn': 'Quarter Turn Operation',
    'ceramic cartridge': 'Ceramic Cartridge',
    'brass': 'Brass Construction',
    'chrome plated': 'Chrome Plated Finish',
    'heavy duty': 'Heavy Duty Construction',
    'adjustable': 'Adjustable Design',
    'extended': 'Extended Reach',
    'dual flow': 'Dual Flow Control'
  };
  
  const combinedText = (name + ' ' + description).toLowerCase();
  
  for (const [key, feature] of Object.entries(featureMap)) {
    if (combinedText.includes(key)) {
      features.push(feature);
    }
  }
  
  // Add some default features if none found
  if (features.length === 0) {
    features.push('Premium Quality', 'Durable Construction', 'Easy Installation');
  }
  
  return features;
}

// Function to generate price based on product type and features
function generatePrice(name, category) {
  const basePrices = {
    'basin mixer': 2500,
    'shower mixer': 3500,
    'flush valve': 1500,
    'health faucet': 800,
    'bib cock': 600,
    'pillar cock': 500,
    'stop cock': 400,
    'overhead shower': 2000,
    'shower': 1200
  };
  
  let basePrice = 1000; // default
  
  for (const [key, price] of Object.entries(basePrices)) {
    if (name.toLowerCase().includes(key)) {
      basePrice = price;
      break;
    }
  }
  
  // Add variations based on features
  if (name.toLowerCase().includes('single lever')) basePrice += 500;
  if (name.toLowerCase().includes('concealed')) basePrice += 800;
  if (name.toLowerCase().includes('dual flow')) basePrice += 300;
  if (name.toLowerCase().includes('heavy')) basePrice += 200;
  
  // Add some randomness for variety
  const variation = Math.floor(Math.random() * 400) - 200;
  return Math.max(299, basePrice + variation);
}

// Function to convert CSV data to Product interface
function convertToProducts(csvData) {
  return csvData.map((row, index) => {
    const { category, subcategory } = categorizeProduct(row.Category, row.Name);
    const features = extractFeatures(row.Name, row.Description || '');
    const price = generatePrice(row.Name, category);
    const originalPrice = Math.floor(price * (1.2 + Math.random() * 0.3)); // 20-50% markup
    
    return {
      id: generateId(row.Name) + '-' + index,
      name: row.Name.replace(/^[\d\s\-–]+/, '').trim(), // Remove leading numbers/dashes
      category: category,
      subcategory: subcategory,
      collection: extractCollection(row.Name),
      price: price,
      originalPrice: originalPrice,
      description: row.Description || `Premium quality ${row.Name.toLowerCase()} with superior durability and modern design. Perfect for contemporary bathrooms.`,
      features: features,
      specifications: generateSpecifications(row.Name, category),
      images: row['Image URL'] ? [row['Image URL']] : [
        `https://picsum.photos/500/500?random=${Math.floor(Math.random() * 1000)}`
      ],
      inStock: Math.random() > 0.1, // 90% in stock
      rating: 4.0 + Math.random() * 1.0, // 4.0 to 5.0
      reviewCount: Math.floor(Math.random() * 200) + 10,
      tags: generateTags(row.Name, category),
      warranty: generateWarranty(category)
    };
  });
}

// Function to extract collection name
function extractCollection(name) {
  const collections = [
    'Elegance', 'Kollar', 'Ultra Slim', 'WaterFall', 'Maze', 
    'Sandwich', 'Leesha', 'Curve', 'Metropole'
  ];
  
  for (const collection of collections) {
    if (name.includes(collection)) {
      return collection + ' Collection';
    }
  }
  
  return undefined;
}

// Function to generate specifications
function generateSpecifications(name, category) {
  const specs = {
    'Material': 'Premium Brass',
    'Finish': 'Chrome Plated',
    'Water Pressure': '0.5 to 5 Bar',
    'Warranty': '5 Years'
  };
  
  if (name.toLowerCase().includes('cartridge')) {
    specs['Cartridge'] = '35mm Ceramic';
  }
  
  if (name.toLowerCase().includes('40mm')) {
    specs['Size'] = '40mm';
  } else if (name.toLowerCase().includes('32mm')) {
    specs['Size'] = '32mm';
  } else if (name.toLowerCase().includes('25mm')) {
    specs['Size'] = '25mm';
  }
  
  if (category === 'shower-systems') {
    specs['Flow Rate'] = '8-12 LPM';
    specs['Spray Patterns'] = 'Multiple';
  }
  
  return specs;
}

// Function to generate tags
function generateTags(name, category) {
  const tags = [];
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('premium')) tags.push('premium');
  if (nameLower.includes('luxury')) tags.push('luxury');
  if (nameLower.includes('modern')) tags.push('modern');
  if (nameLower.includes('single lever')) tags.push('single-lever');
  if (nameLower.includes('concealed')) tags.push('concealed');
  if (nameLower.includes('wall')) tags.push('wall-mount');
  if (category === 'shower-systems') tags.push('shower');
  if (category === 'cp-fittings') tags.push('brass', 'chrome');
  
  return tags;
}

// Function to generate warranty
function generateWarranty(category) {
  const warranties = {
    'cp-fittings': '5 Years Manufacturing Warranty',
    'shower-systems': '3 Years Manufacturing Warranty',
    'accessories': '2 Years Manufacturing Warranty'
  };
  
  return warranties[category] || '3 Years Manufacturing Warranty';
}

// Main conversion function
function convertCSVToProducts(csvFilePath, outputPath) {
  try {
    console.log(`Reading CSV file: ${csvFilePath}`);
    const csvContent = fs.readFileSync(csvFilePath, 'utf8');
    
    console.log('Parsing CSV data...');
    const csvData = parseCSV(csvContent);
    console.log(`Found ${csvData.length} products in CSV`);
    
    console.log('Converting to product format...');
    const products = convertToProducts(csvData);
    
    // Generate TypeScript file content
    const tsContent = `// Auto-generated from CSV: ${path.basename(csvFilePath)}
// Generated on: ${new Date().toISOString()}

import { Product } from './products';

export const csvImportedProducts: Product[] = ${JSON.stringify(products, null, 2)};

export const csvProductCategories = [
  ${Array.from(new Set(products.map(p => p.category))).map(cat => `'${cat}'`).join(',\n  ')}
];

export const csvProductSubcategories = [
  ${Array.from(new Set(products.map(p => p.subcategory))).map(sub => `'${sub}'`).join(',\n  ')}
];
`;
    
    console.log(`Writing to: ${outputPath}`);
    fs.writeFileSync(outputPath, tsContent);
    
    console.log('\n✅ Conversion completed successfully!');
    console.log(`📊 Total products converted: ${products.length}`);
    console.log(`📁 Output file: ${outputPath}`);
    console.log(`🏷️  Categories: ${Array.from(new Set(products.map(p => p.category))).join(', ')}`);
    
    return products;
  } catch (error) {
    console.error('❌ Error during conversion:', error.message);
    process.exit(1);
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.log(`
📁 CSV to Products Converter

Usage: node csv-to-products.js <csv-file> [output-file]

Examples:
  node csv-to-products.js ../ganga_all_products50.csv
  node csv-to-products.js ../tora_ss_shower_products.csv ../src/data/tora-products.ts
    `);
    process.exit(1);
  }
  
  const csvFile = args[0];
  const outputFile = args[1] || path.join('../src/data', `imported-${path.basename(csvFile, '.csv')}.ts`);
  
  convertCSVToProducts(csvFile, outputFile);
}

module.exports = { convertCSVToProducts, parseCSV };