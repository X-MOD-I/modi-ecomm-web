// Our own inventory management system
// This is separate from partner's stock data

export interface InventoryItem {
  productId: string
  quantityInStock: number
  reorderPoint: number
  maxStock: number
  lastRestocked: Date
  cost: number // Our cost price
  supplier: string
  location: string // Warehouse location
  notes?: string
}

export interface InventoryTransaction {
  id: string
  productId: string
  type: 'IN' | 'OUT' | 'ADJUSTMENT'
  quantity: number
  previousQuantity: number
  newQuantity: number
  reason: string
  date: Date
  userId: string // Who made the change
  reference?: string // PO number, invoice, etc.
}

// Mock inventory data - in real app this would come from database
const mockInventory: InventoryItem[] = [
  {
    productId: 'GR1001',
    quantityInStock: 25,
    reorderPoint: 10,
    maxStock: 100,
    lastRestocked: new Date('2024-01-15'),
    cost: 800,
    supplier: 'Ganga Bath Fittings',
    location: 'Warehouse A'
  },
  {
    productId: 'GR1002',
    quantityInStock: 5,  // Low stock
    reorderPoint: 15,
    maxStock: 50,
    lastRestocked: new Date('2024-01-10'),
    cost: 1200,
    supplier: 'Ganga Bath Fittings',
    location: 'Warehouse A'
  },
  {
    productId: 'GR1003',
    quantityInStock: 0,  // Out of stock
    reorderPoint: 20,
    maxStock: 80,
    lastRestocked: new Date('2024-01-05'),
    cost: 950,
    supplier: 'Ganga Bath Fittings',
    location: 'Warehouse B'
  },
  {
    productId: 'GR1004',
    quantityInStock: 50,
    reorderPoint: 20,
    maxStock: 100,
    lastRestocked: new Date('2024-01-20'),
    cost: 1100,
    supplier: 'Ganga Bath Fittings',
    location: 'Warehouse A'
  },
  {
    productId: 'GR1005',
    quantityInStock: 8,  // Low stock
    reorderPoint: 12,
    maxStock: 60,
    lastRestocked: new Date('2024-01-12'),
    cost: 750,
    supplier: 'Ganga Bath Fittings',
    location: 'Warehouse B'
  },
  {
    productId: 'TS001',
    quantityInStock: 15,
    reorderPoint: 8,
    maxStock: 40,
    lastRestocked: new Date('2024-01-18'),
    cost: 450,
    supplier: 'Tora Shower Systems',
    location: 'Warehouse A'
  }
]

// Mock transaction history
const mockTransactions: InventoryTransaction[] = [
  {
    id: 'TXN001',
    productId: 'GR1001',
    type: 'IN',
    quantity: 50,
    previousQuantity: 0,
    newQuantity: 50,
    reason: 'Initial stock',
    date: new Date('2024-01-15'),
    userId: 'admin',
    reference: 'PO-2024-001'
  },
  {
    id: 'TXN002',
    productId: 'GR1001',
    type: 'OUT',
    quantity: 25,
    previousQuantity: 50,
    newQuantity: 25,
    reason: 'Customer order',
    date: new Date('2024-01-20'),
    userId: 'admin'
  },
  {
    id: 'TXN003',
    productId: 'GR1002',
    type: 'IN',
    quantity: 20,
    previousQuantity: 0,
    newQuantity: 20,
    reason: 'Initial stock',
    date: new Date('2024-01-10'),
    userId: 'admin',
    reference: 'PO-2024-002'
  },
  {
    id: 'TXN004',
    productId: 'GR1002',
    type: 'OUT',
    quantity: 15,
    previousQuantity: 20,
    newQuantity: 5,
    reason: 'Bulk order',
    date: new Date('2024-01-22'),
    userId: 'admin'
  },
  {
    id: 'TXN005',
    productId: 'GR1004',
    type: 'IN',
    quantity: 50,
    previousQuantity: 0,
    newQuantity: 50,
    reason: 'Stock replenishment',
    date: new Date('2024-01-20'),
    userId: 'admin',
    reference: 'PO-2024-003'
  },
  {
    id: 'TXN006',
    productId: 'TS001',
    type: 'IN',
    quantity: 15,
    previousQuantity: 0,
    newQuantity: 15,
    reason: 'New product launch',
    date: new Date('2024-01-18'),
    userId: 'admin',
    reference: 'PO-2024-004'
  }
]

// Inventory management functions
export class InventoryManager {
  private static inventory: Map<string, InventoryItem> = new Map(
    mockInventory.map(item => [item.productId, item])
  )
  
  private static transactions: InventoryTransaction[] = [...mockTransactions]

  // Get inventory for a specific product
  static getProductInventory(productId: string): InventoryItem | null {
    return this.inventory.get(productId) || null
  }

  // Get all inventory items
  static getAllInventory(): InventoryItem[] {
    return Array.from(this.inventory.values())
  }

  // Check if product is in stock
  static isInStock(productId: string): boolean {
    const item = this.inventory.get(productId)
    return item ? item.quantityInStock > 0 : false
  }

  // Check if product needs reordering
  static needsReorder(productId: string): boolean {
    const item = this.inventory.get(productId)
    return item ? item.quantityInStock <= item.reorderPoint : false
  }

  // Get stock status
  static getStockStatus(productId: string): 'in-stock' | 'low-stock' | 'out-of-stock' {
    const item = this.inventory.get(productId)
    if (!item || item.quantityInStock === 0) return 'out-of-stock'
    if (item.quantityInStock <= item.reorderPoint) return 'low-stock'
    return 'in-stock'
  }

  // Update stock quantity
  static updateStock(
    productId: string,
    newQuantity: number,
    reason: string,
    userId: string = 'admin',
    reference?: string
  ): boolean {
    const item = this.inventory.get(productId)
    if (!item) return false

    const previousQuantity = item.quantityInStock
    const quantity = newQuantity - previousQuantity
    const type: 'IN' | 'OUT' | 'ADJUSTMENT' = 
      quantity > 0 ? 'IN' : quantity < 0 ? 'OUT' : 'ADJUSTMENT'

    // Create transaction record
    const transaction: InventoryTransaction = {
      id: `TXN${Date.now()}`,
      productId,
      type,
      quantity: Math.abs(quantity),
      previousQuantity,
      newQuantity,
      reason,
      date: new Date(),
      userId,
      reference
    }

    // Update inventory
    item.quantityInStock = newQuantity
    if (type === 'IN') {
      item.lastRestocked = new Date()
    }

    // Record transaction
    this.transactions.push(transaction)

    return true
  }

  // Add new product to inventory
  static addProduct(inventoryItem: Omit<InventoryItem, 'lastRestocked'>): boolean {
    if (this.inventory.has(inventoryItem.productId)) {
      return false // Product already exists
    }

    this.inventory.set(inventoryItem.productId, {
      ...inventoryItem,
      lastRestocked: new Date()
    })

    // Create initial transaction
    if (inventoryItem.quantityInStock > 0) {
      const transaction: InventoryTransaction = {
        id: `TXN${Date.now()}`,
        productId: inventoryItem.productId,
        type: 'IN',
        quantity: inventoryItem.quantityInStock,
        previousQuantity: 0,
        newQuantity: inventoryItem.quantityInStock,
        reason: 'Initial stock',
        date: new Date(),
        userId: 'admin'
      }
      this.transactions.push(transaction)
    }

    return true
  }

  // Get transaction history for a product
  static getProductTransactions(productId: string): InventoryTransaction[] {
    return this.transactions.filter(t => t.productId === productId)
  }

  // Get recent transactions
  static getRecentTransactions(limit: number = 10): InventoryTransaction[] {
    return this.transactions
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, limit)
  }

  // Get low stock items
  static getLowStockItems(): InventoryItem[] {
    return Array.from(this.inventory.values())
      .filter(item => item.quantityInStock <= item.reorderPoint)
  }

  // Get out of stock items
  static getOutOfStockItems(): InventoryItem[] {
    return Array.from(this.inventory.values())
      .filter(item => item.quantityInStock === 0)
  }

  // Calculate total inventory value
  static getTotalInventoryValue(): number {
    return Array.from(this.inventory.values())
      .reduce((total, item) => total + (item.quantityInStock * item.cost), 0)
  }

  // Get inventory statistics
  static getInventoryStats() {
    const allItems = Array.from(this.inventory.values())
    const totalProducts = allItems.length
    const inStock = allItems.filter(item => item.quantityInStock > 0).length
    const outOfStock = allItems.filter(item => item.quantityInStock === 0).length
    const lowStock = allItems.filter(item => 
      item.quantityInStock > 0 && item.quantityInStock <= item.reorderPoint
    ).length
    const totalValue = this.getTotalInventoryValue()
    const totalQuantity = allItems.reduce((sum, item) => sum + item.quantityInStock, 0)
    const averageCost = totalProducts > 0 ? totalValue / totalQuantity : 0

    return {
      totalProducts,      // Total number of products in inventory system
      inStock,           // Products with quantity > 0
      outOfStock,        // Products with quantity = 0
      lowStock,          // Products below reorder point
      totalValue,        // Total value of all stock (quantity × cost)
      totalQuantity,     // Total units in stock
      averageCost        // Average cost per unit
    }
  }
}

// Initialize with some mock data for products that don't have inventory yet
export const initializeInventory = () => {
  // This would typically be called when setting up the store
  // For now, we'll use the mock data above
} 