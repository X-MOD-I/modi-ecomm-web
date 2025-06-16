'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Package, Save, Plus, Minus, History, Edit, Trash2 } from 'lucide-react'
import { allProducts } from '@/data/products'
import { InventoryManager, type InventoryItem } from '@/data/inventory'
import AdminProtection from '@/components/AdminProtection'

interface PageProps {
  params: Promise<{ productId: string }>
}

interface ContentProps {
  params: { productId: string }
}

function EditInventoryPageContent({ params }: ContentProps) {
  const { productId } = params
  const [inventoryItem, setInventoryItem] = useState<InventoryItem | null>(null)
  const [product] = useState(allProducts.find(p => p.id === productId))
  const [showStockAdjustment, setShowStockAdjustment] = useState(false)
  const [stockAdjustment, setStockAdjustment] = useState({
    quantity: 0,
    type: 'add' as 'add' | 'remove' | 'set',
    reason: '',
    reference: ''
  })

  useEffect(() => {
    const item = InventoryManager.getProductInventory(productId)
    setInventoryItem(item)
  }, [productId])

  if (!product || !inventoryItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {!product ? 'Product not found' : 'Product not in inventory'}
          </h3>
          <Link href="/admin/inventory" className="text-blue-600 hover:text-blue-700">
            ← Back to Inventory
          </Link>
        </div>
      </div>
    )
  }

  const handleStockAdjustment = () => {
    if (stockAdjustment.quantity <= 0 || !stockAdjustment.reason.trim()) {
      alert('Please enter a valid quantity and reason')
      return
    }

    let newQuantity = inventoryItem.quantityInStock

    switch (stockAdjustment.type) {
      case 'add':
        newQuantity += stockAdjustment.quantity
        break
      case 'remove':
        newQuantity = Math.max(0, newQuantity - stockAdjustment.quantity)
        break
      case 'set':
        newQuantity = stockAdjustment.quantity
        break
    }

    const success = InventoryManager.updateStock(
      productId,
      newQuantity,
      stockAdjustment.reason,
      'admin',
      stockAdjustment.reference || undefined
    )

    if (success) {
      const updatedItem = InventoryManager.getProductInventory(productId)
      if (updatedItem) {
        setInventoryItem(updatedItem)
      }
      
      setStockAdjustment({
        quantity: 0,
        type: 'add',
        reason: '',
        reference: ''
      })
      setShowStockAdjustment(false)
      alert('Stock updated successfully!')
    } else {
      alert('Failed to update stock')
    }
  }

  const getStockStatus = () => {
    if (inventoryItem.quantityInStock === 0) {
      return { label: 'Out of Stock', color: 'text-red-600 bg-red-50' }
    }
    if (inventoryItem.quantityInStock <= inventoryItem.reorderPoint) {
      return { label: 'Low Stock', color: 'text-yellow-600 bg-yellow-50' }
    }
    return { label: 'In Stock', color: 'text-green-600 bg-green-50' }
  }

  const stockStatus = getStockStatus()
  const transactions = InventoryManager.getProductTransactions(productId)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <Link href="/admin/inventory" className="text-gray-400 hover:text-gray-600">
                <ChevronLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Manage Inventory</h1>
                <p className="text-gray-600 mt-1">{product.name}</p>
              </div>
            </div>
            <button
              onClick={() => setShowStockAdjustment(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Adjust Stock
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Package className="h-12 w-12 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-sm text-gray-500">ID: {product.id}</p>
                  <p className="text-lg font-semibold text-gray-900 mt-2">₹{product.price.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium ${stockStatus.color}`}>
                    <Package className="h-4 w-4" />
                    {stockStatus.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Current Stock Status */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Stock Status</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{inventoryItem.quantityInStock}</div>
                  <div className="text-sm text-blue-700">Current Stock</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{inventoryItem.reorderPoint}</div>
                  <div className="text-sm text-yellow-700">Reorder Point</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{inventoryItem.maxStock}</div>
                  <div className="text-sm text-green-700">Max Stock</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">₹{inventoryItem.cost}</div>
                  <div className="text-sm text-purple-700">Cost Price</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {transactions.length > 0 ? (
                  transactions.slice(0, 10).map((transaction) => (
                    <div key={transaction.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${
                          transaction.type === 'IN' ? 'text-green-600' : 
                          transaction.type === 'OUT' ? 'text-red-600' : 'text-blue-600'
                        }`}>
                          {transaction.type === 'IN' ? '+' : transaction.type === 'OUT' ? '-' : '='}{transaction.quantity}
                        </span>
                        <span className="text-xs text-gray-500">
                          {transaction.date.toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{transaction.reason}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 text-center py-4">No transactions yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Adjustment Modal */}
      {showStockAdjustment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Adjust Stock</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Stock: {inventoryItem.quantityInStock} units
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adjustment Type
                </label>
                <select
                  value={stockAdjustment.type}
                  onChange={(e) => setStockAdjustment({...stockAdjustment, type: e.target.value as 'add' | 'remove' | 'set'})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="add">Add Stock</option>
                  <option value="remove">Remove Stock</option>
                  <option value="set">Set Exact Quantity</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={stockAdjustment.quantity}
                  onChange={(e) => setStockAdjustment({...stockAdjustment, quantity: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason *
                </label>
                <input
                  type="text"
                  value={stockAdjustment.reason}
                  onChange={(e) => setStockAdjustment({...stockAdjustment, reason: e.target.value})}
                  placeholder="e.g., Stock received, Sale, Damaged, Inventory count"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reference (Optional)
                </label>
                <input
                  type="text"
                  value={stockAdjustment.reference}
                  onChange={(e) => setStockAdjustment({...stockAdjustment, reference: e.target.value})}
                  placeholder="PO number, invoice, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowStockAdjustment(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStockAdjustment}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Update Stock
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default async function EditInventoryPage({ params }: PageProps) {
  const { productId } = await params
  
  return (
    <AdminProtection>
      <EditInventoryPageContent params={{ productId }} />
    </AdminProtection>
  )
} 