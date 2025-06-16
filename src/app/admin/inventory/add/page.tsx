'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Package, Save, Search, Plus } from 'lucide-react'
import { allProducts } from '@/data/products'
import { InventoryManager } from '@/data/inventory'
import AdminProtection from '@/components/AdminProtection'

function AddToInventoryContent() {
  const [selectedProductId, setSelectedProductId] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [formData, setFormData] = useState({
    quantityInStock: 0,
    reorderPoint: 10,
    maxStock: 100,
    cost: 0,
    supplier: 'Ganga Bath Fittings',
    location: 'Warehouse A',
    notes: ''
  })

  // Filter products that are NOT already in inventory
  const availableProducts = allProducts.filter(product => 
    !InventoryManager.getProductInventory(product.id) &&
    (searchQuery === '' || 
     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.category.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const selectedProduct = allProducts.find(p => p.id === selectedProductId)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedProductId) {
      alert('Please select a product')
      return
    }

    const success = InventoryManager.addProduct({
      productId: selectedProductId,
      ...formData
    })

    if (success) {
      alert('Product added to inventory successfully!')
      // Reset form
      setSelectedProductId('')
      setFormData({
        quantityInStock: 0,
        reorderPoint: 10,
        maxStock: 100,
        cost: 0,
        supplier: 'Ganga Bath Fittings',
        location: 'Warehouse A',
        notes: ''
      })
    } else {
      alert('Failed to add product to inventory')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-6">
            <Link href="/admin/inventory" className="text-gray-400 hover:text-gray-600">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Add Product to Inventory</h1>
              <p className="text-gray-600 mt-1">Set up inventory tracking for existing products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Selection */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Product</h2>
            
            {/* Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for products to add to inventory..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Product Selection */}
            <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto">
              {availableProducts.slice(0, 20).map((product) => (
                <div
                  key={product.id}
                  className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedProductId === product.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedProductId(product.id)}
                >
                  <input
                    type="radio"
                    name="productId"
                    value={product.id}
                    checked={selectedProductId === product.id}
                    onChange={() => setSelectedProductId(product.id)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    {product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Package className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-sm text-gray-500">ID: {product.id}</p>
                    <p className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            {availableProducts.length === 0 && (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products available</h3>
                <p className="text-gray-600">
                  {searchQuery ? 'No products match your search criteria' : 'All products are already in inventory'}
                </p>
              </div>
            )}
          </div>

          {/* Inventory Details */}
          {selectedProduct && (
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Inventory Details</h2>
              
              {/* Selected Product Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    {selectedProduct.images[0] ? (
                      <Image
                        src={selectedProduct.images[0]}
                        alt={selectedProduct.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Package className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedProduct.name}</h3>
                    <p className="text-sm text-gray-600">{selectedProduct.category}</p>
                    <p className="text-sm text-gray-500">Retail Price: ₹{selectedProduct.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stock Quantities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Stock Quantity *
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.quantityInStock}
                    onChange={(e) => setFormData({...formData, quantityInStock: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reorder Point *
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.reorderPoint}
                    onChange={(e) => setFormData({...formData, reorderPoint: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Alert when stock falls below this level</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Stock Level
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.maxStock}
                    onChange={(e) => setFormData({...formData, maxStock: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cost Price (₹) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.cost}
                    onChange={(e) => setFormData({...formData, cost: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Your purchase/cost price</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Supplier
                  </label>
                  <input
                    type="text"
                    value={formData.supplier}
                    onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Storage Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Warehouse A">Warehouse A</option>
                    <option value="Warehouse B">Warehouse B</option>
                    <option value="Store Front">Store Front</option>
                    <option value="Storage Room">Storage Room</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any additional notes about this inventory item..."
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <Link
              href="/admin/inventory"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={!selectedProductId}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Add to Inventory
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AddToInventory() {
  return (
    <AdminProtection>
      <AddToInventoryContent />
    </AdminProtection>
  )
} 