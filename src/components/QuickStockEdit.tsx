'use client'

import { useState } from 'react'
import { Edit, Check, X } from 'lucide-react'
import { InventoryManager } from '@/data/inventory'

interface QuickStockEditProps {
  productId: string
  currentStock: number
  onUpdate: () => void
}

export default function QuickStockEdit({ productId, currentStock, onUpdate }: QuickStockEditProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newStock, setNewStock] = useState(currentStock)
  const [reason, setReason] = useState('')

  const handleSave = () => {
    if (newStock === currentStock) {
      setIsEditing(false)
      return
    }

    if (!reason.trim()) {
      alert('Please provide a reason for the stock change')
      return
    }

    const success = InventoryManager.updateStock(
      productId,
      newStock,
      reason,
      'admin'
    )

    if (success) {
      setIsEditing(false)
      setReason('')
      onUpdate()
    } else {
      alert('Failed to update stock')
    }
  }

  const handleCancel = () => {
    setNewStock(currentStock)
    setReason('')
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-900">{currentStock}</span>
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
          title="Quick Edit Stock"
        >
          <Edit className="h-3 w-3" />
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          value={newStock}
          onChange={(e) => setNewStock(parseInt(e.target.value) || 0)}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          autoFocus
        />
        <button
          onClick={handleSave}
          className="p-1 text-green-600 hover:text-green-700 transition-colors"
          title="Save"
        >
          <Check className="h-3 w-3" />
        </button>
        <button
          onClick={handleCancel}
          className="p-1 text-red-600 hover:text-red-700 transition-colors"
          title="Cancel"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Reason for change..."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  )
} 