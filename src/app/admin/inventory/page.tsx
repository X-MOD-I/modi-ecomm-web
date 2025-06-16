'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Download, 
  Upload,
  ChevronLeft,
  ChevronRight,
  Package,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import { allProducts, type Product } from '@/data/products'
import { InventoryManager } from '@/data/inventory'
import QuickStockEdit from '@/components/QuickStockEdit'

export default function InventoryManagement() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [stockFilter, setStockFilter] = useState('all') // all, in-stock, out-of-stock, low-stock
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [refreshKey, setRefreshKey] = useState(0)

  // Force re-render when inventory changes
  const forceRefresh = () => setRefreshKey(prev => prev + 1)

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProducts.map(p => p.category)))
    return ['all', ...cats]
  }, [])

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.collection?.toLowerCase().includes(query) ||
        product.id.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Stock filter using our inventory system
    if (stockFilter === 'in-stock') {
      filtered = filtered.filter(product => InventoryManager.isInStock(product.id))
    } else if (stockFilter === 'out-of-stock') {
      filtered = filtered.filter(product => !InventoryManager.isInStock(product.id))
    } else if (stockFilter === 'low-stock') {
      filtered = filtered.filter(product => InventoryManager.needsReorder(product.id))
    }

    return filtered
  }, [searchQuery, selectedCategory, stockFilter])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  // Handle product selection
  const handleSelectProduct = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleSelectAll = () => {
    if (selectedProducts.length === paginatedProducts.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(paginatedProducts.map(p => p.id))
    }
  }

  // Bulk actions
  const handleBulkAction = (action: 'delete' | 'in-stock' | 'out-of-stock') => {
    console.log(`Bulk ${action} for products:`, selectedProducts)
    
    // Update inventory for selected products
    selectedProducts.forEach(productId => {
      if (action === 'in-stock') {
        // Add to inventory if not exists, or update stock if exists
        const existingInventory = InventoryManager.getProductInventory(productId)
        if (!existingInventory) {
          InventoryManager.addProduct({
            productId,
            quantityInStock: 10,
            reorderPoint: 5,
            maxStock: 100,
            cost: 0,
            supplier: 'Default Supplier',
            location: 'Warehouse A'
          })
        } else {
          InventoryManager.updateStock(productId, Math.max(1, existingInventory.quantityInStock), 'Bulk action - mark in stock')
        }
      } else if (action === 'out-of-stock') {
        InventoryManager.updateStock(productId, 0, 'Bulk action - mark out of stock')
      }
    })
    
    alert(`Bulk ${action} completed for ${selectedProducts.length} products`)
    setSelectedProducts([])
  }

  const getStockStatus = (product: Product) => {
    const stockStatus = InventoryManager.getStockStatus(product.id)
    const inventoryItem = InventoryManager.getProductInventory(product.id)
    
    switch (stockStatus) {
      case 'out-of-stock':
        return { 
          label: 'Out of Stock', 
          color: 'text-red-600 bg-red-50', 
          icon: AlertTriangle,
          quantity: 0 
        }
      case 'low-stock':
        return { 
          label: 'Low Stock', 
          color: 'text-yellow-600 bg-yellow-50', 
          icon: Package,
          quantity: inventoryItem?.quantityInStock || 0 
        }
      case 'in-stock':
        return { 
          label: 'In Stock', 
          color: 'text-green-600 bg-green-50', 
          icon: CheckCircle,
          quantity: inventoryItem?.quantityInStock || 0 
        }
      default:
        return { 
          label: 'No Inventory', 
          color: 'text-gray-600 bg-gray-50', 
          icon: Package,
          quantity: 0 
        }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <div className="flex items-center gap-3">
                <Link href="/admin" className="text-gray-400 hover:text-gray-600">
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
                  <p className="text-gray-600 mt-1">
                    {filteredProducts.length} of {allProducts.length} products
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/inventory/import"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Import
              </Link>
              <Link
                href="/admin/inventory/add"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products by name, category, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Stock Filter */}
            <div className="w-full lg:w-48">
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Stock Status</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="low-stock">Low Stock</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedProducts.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <p className="text-blue-700 font-medium">
                {selectedProducts.length} product{selectedProducts.length > 1 ? 's' : ''} selected
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleBulkAction('in-stock')}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                >
                  Mark In Stock
                </button>
                <button
                  onClick={() => handleBulkAction('out-of-stock')}
                  className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 text-sm"
                >
                  Mark Out of Stock
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === paginatedProducts.length && paginatedProducts.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedProducts.map((product) => {
                  const stockStatus = getStockStatus(product)
                  const StatusIcon = stockStatus.icon
                  
                  return (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => handleSelectProduct(product.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                            {product.images[0] ? (
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <Package className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 line-clamp-1">{product.name}</p>
                            <p className="text-sm text-gray-600">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900">{product.category}</span>
                        {product.collection && (
                          <p className="text-xs text-gray-600">{product.collection}</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString()}</span>
                      </td>
                                             <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                            <StatusIcon className="h-3 w-3" />
                            {stockStatus.label}
                          </span>
                          {InventoryManager.getProductInventory(product.id) ? (
                            <QuickStockEdit
                              productId={product.id}
                              currentStock={stockStatus.quantity}
                              onUpdate={forceRefresh}
                            />
                          ) : (
                            <span className="text-xs text-gray-500">
                              Not in inventory
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/products/${product.id}`}
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View Product"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          {InventoryManager.getProductInventory(product.id) ? (
                            <Link
                              href={`/admin/inventory/edit/${product.id}`}
                              className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                              title="Manage Inventory"
                            >
                              <Edit className="h-4 w-4" />
                            </Link>
                          ) : (
                            <Link
                              href={`/admin/inventory/add`}
                              className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                              title="Add to Inventory"
                            >
                              <Plus className="h-4 w-4" />
                            </Link>
                          )}
                          <button
                            onClick={() => console.log('Delete product:', product.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-3 border-t">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="px-3 py-1 text-sm font-medium text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Link
              href="/admin/inventory/add"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add First Product
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 