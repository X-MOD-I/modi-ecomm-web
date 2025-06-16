import Link from 'next/link'
import { ShoppingBag, Package, TrendingUp, Users, DollarSign, AlertTriangle } from 'lucide-react'
import { allProducts } from '@/data/products'
import { InventoryManager } from '@/data/inventory'

export default function AdminDashboard() {
  // Calculate inventory statistics using our own inventory system
  const inventoryStats = InventoryManager.getInventoryStats()
  const totalProducts = allProducts.length
  const recentTransactions = InventoryManager.getRecentTransactions(5)
  
  // Calculate catalog vs inventory stats
  const inventoryProducts = InventoryManager.getAllInventory().length
  const productsWithoutInventory = totalProducts - inventoryProducts

  const stats = [
    {
      title: 'Product Catalog',
      value: totalProducts.toLocaleString(),
      icon: Package,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      title: 'In Our Inventory',
      value: inventoryStats.inStock.toLocaleString(),
      icon: ShoppingBag,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      title: 'Out of Stock',
      value: inventoryStats.outOfStock.toLocaleString(),
      icon: AlertTriangle,
      color: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      title: 'Low Stock Alert',
      value: inventoryStats.lowStock.toLocaleString(),
      icon: TrendingUp,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Total Inventory Value',
      value: `₹${(inventoryStats.totalValue / 100000).toFixed(1)}L`,
      icon: DollarSign,
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      title: 'Total Stock Quantity',
      value: inventoryStats.totalQuantity.toLocaleString(),
      icon: TrendingUp,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your store inventory and products</p>
            </div>
            <Link 
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Store
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/admin/inventory"
                className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <Package className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Manage Inventory</p>
                  <p className="text-sm text-gray-600">Add, edit, and manage product stock</p>
                </div>
              </Link>
              <Link 
                href="/admin/inventory/add"
                className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <ShoppingBag className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Add New Product</p>
                  <p className="text-sm text-gray-600">Add new products to inventory</p>
                </div>
              </Link>
              <Link 
                href="/admin/inventory/import"
                className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <Users className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Import Products</p>
                  <p className="text-sm text-gray-600">Bulk import from CSV files</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Inventory Activity</h3>
            <div className="space-y-3">
              {recentTransactions.length > 0 ? (
                recentTransactions.map((transaction, index) => (
                  <div key={transaction.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      transaction.type === 'IN' ? 'bg-green-500' : 
                      transaction.type === 'OUT' ? 'bg-red-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {transaction.type === 'IN' ? 'Stock Added' : 
                         transaction.type === 'OUT' ? 'Stock Removed' : 'Stock Adjusted'} - {transaction.productId}
                      </p>
                      <p className="text-xs text-gray-600">
                        {transaction.quantity} units • {transaction.reason}
                      </p>
                      <p className="text-xs text-gray-500">
                        {transaction.date.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm text-gray-500">No recent inventory transactions</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Inventory Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory by Category</h3>
            <div className="space-y-3">
              {Array.from(new Set(allProducts.map(p => p.category))).map((category, index) => {
                const categoryProducts = allProducts.filter(p => p.category === category)
                const inventoryItems = InventoryManager.getAllInventory().filter(item => {
                  const product = allProducts.find(p => p.id === item.productId)
                  return product?.category === category
                })
                const totalStock = inventoryItems.reduce((sum, item) => sum + item.quantityInStock, 0)
                
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{category}</h4>
                      <p className="text-sm text-gray-600">
                        {categoryProducts.length} products • {inventoryItems.length} in inventory
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">{totalStock}</p>
                      <p className="text-xs text-gray-500">units</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alerts & Actions Needed</h3>
            <div className="space-y-3">
              {/* Out of Stock Alert */}
              <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
                <div className="flex-1">
                  <p className="font-medium text-red-900">Out of Stock Items</p>
                  <p className="text-sm text-red-700">{inventoryStats.outOfStock} products need restocking</p>
                </div>
                <Link href="/admin/inventory?filter=out-of-stock" className="text-red-600 hover:text-red-700 text-sm font-medium">
                  View →
                </Link>
              </div>

              {/* Low Stock Alert */}
              <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <TrendingUp className="h-5 w-5 text-yellow-500 mr-3" />
                <div className="flex-1">
                  <p className="font-medium text-yellow-900">Low Stock Items</p>
                  <p className="text-sm text-yellow-700">{inventoryStats.lowStock} products below reorder point</p>
                </div>
                <Link href="/admin/inventory?filter=low-stock" className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                  View →
                </Link>
              </div>

              {/* Products without Inventory */}
              <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <Package className="h-5 w-5 text-blue-500 mr-3" />
                <div className="flex-1">
                  <p className="font-medium text-blue-900">Products without Inventory</p>
                  <p className="text-sm text-blue-700">{productsWithoutInventory} products need inventory setup</p>
                </div>
                <Link href="/admin/inventory/add" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Setup →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 