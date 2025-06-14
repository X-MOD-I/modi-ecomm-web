const fs = require('fs');
const path = require('path');

// Function to update the main products.ts file with imported data
function mergeImportedProducts(importedFilePath, mainProductsPath) {
  try {
    console.log('📁 Merging imported products with existing data...');
    
    // Read the imported products file
    const importedContent = fs.readFileSync(importedFilePath, 'utf8');
    
    // Extract the product array from the imported file
    const importedMatch = importedContent.match(/export const csvImportedProducts: Product\[\] = (\[[\s\S]*?\]);/);
    if (!importedMatch) {
      throw new Error('Could not find csvImportedProducts array in imported file');
    }
    
    const importedProductsArray = importedMatch[1];
    
    // Read the main products file
    const mainContent = fs.readFileSync(mainProductsPath, 'utf8');
    
    // Find the end of the featuredProducts array and add the imported products
    const insertPoint = mainContent.lastIndexOf('export const featuredProducts: Product[] = [');
    
    if (insertPoint === -1) {
      throw new Error('Could not find featuredProducts array in main products file');
    }
    
    // Find the end of the featuredProducts array
    let bracketCount = 0;
    let endIndex = insertPoint;
    let foundStart = false;
    
    for (let i = insertPoint; i < mainContent.length; i++) {
      if (mainContent[i] === '[') {
        bracketCount++;
        foundStart = true;
      } else if (mainContent[i] === ']') {
        bracketCount--;
        if (foundStart && bracketCount === 0) {
          endIndex = i;
          break;
        }
      }
    }
    
    // Create the new content with imported products added
    const beforeArray = mainContent.substring(0, endIndex);
    const afterArray = mainContent.substring(endIndex + 1);
    
    // Add import statement at the top
    const importStatement = `import { csvImportedProducts } from './imported-products';\n`;
    const beforeImports = mainContent.substring(0, mainContent.indexOf('export interface'));
    const afterImports = mainContent.substring(mainContent.indexOf('export interface'));
    
    // Combine everything
    const newContent = beforeImports + importStatement + afterImports.replace(
      /export const featuredProducts: Product\[] = \[[\s\S]*?\];/,
      `export const featuredProducts: Product[] = [
  ...csvImportedProducts,
  // Original featured products below
${beforeArray.substring(beforeArray.lastIndexOf('[') + 1)}
];`
    );
    
    // Write the updated content
    fs.writeFileSync(mainProductsPath, newContent);
    
    console.log('✅ Successfully merged imported products!');
    console.log(`📁 Updated file: ${mainProductsPath}`);
    
  } catch (error) {
    console.error('❌ Error merging products:', error.message);
    console.log('\n📝 Manual merge instructions:');
    console.log('1. Add this import to your src/data/products.ts:');
    console.log('   import { csvImportedProducts } from \'./imported-products\';');
    console.log('2. Add csvImportedProducts to your featuredProducts array:');
    console.log('   export const featuredProducts: Product[] = [...csvImportedProducts, ...originalProducts];');
  }
}

// Function to create a simple imported products file
function createImportedProductsFile(sourceFiles) {
  const allImports = [];
  const allProducts = [];
  
  sourceFiles.forEach((file, index) => {
    const varName = `imported${index + 1}`;
    allImports.push(`import { csvImportedProducts as ${varName} } from './${path.basename(file, '.ts')}';`);
    allProducts.push(`...${varName}`);
  });
  
  const content = `// Combined imported products from all CSV files
${allImports.join('\n')}
import { Product } from './products';

export const csvImportedProducts: Product[] = [
  ${allProducts.join(',\n  ')}
];
`;
  
  const outputPath = 'src/data/imported-products.ts';
  fs.writeFileSync(outputPath, content);
  
  console.log(`✅ Created combined imported products file: ${outputPath}`);
  return outputPath;
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🔄 Products Merger

Usage: node merge-products.js <imported-file> [main-products-file]

Examples:
  node merge-products.js src/data/ganga-products.ts
  node merge-products.js src/data/ganga-products.ts src/data/products.ts
    `);
    process.exit(1);
  }
  
  const importedFile = args[0];
  const mainFile = args[1] || 'src/data/products.ts';
  
  mergeImportedProducts(importedFile, mainFile);
}

module.exports = { mergeImportedProducts, createImportedProductsFile }; 