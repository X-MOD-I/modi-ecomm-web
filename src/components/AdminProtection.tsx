'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthManager } from '@/lib/auth'
import { ShoppingBag } from 'lucide-react'

interface AdminProtectionProps {
  children: React.ReactNode
}

export default function AdminProtection({ children }: AdminProtectionProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const authenticated = AuthManager.isAuthenticated()
      setIsAuthenticated(authenticated)
      setIsLoading(false)

      if (!authenticated) {
        router.push('/admin/login')
      }
    }

    // Initial check
    checkAuth()

    // Set up periodic check for session expiration
    const interval = setInterval(() => {
      if (!AuthManager.isAuthenticated()) {
        setIsAuthenticated(false)
        router.push('/admin/login')
      } else if (AuthManager.isSessionExpiringSoon()) {
        // Optionally extend session or show warning
        AuthManager.extendSession()
      }
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [router])

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <ShoppingBag className="h-8 w-8 text-white" />
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // Not authenticated - don't render children
  if (!isAuthenticated) {
    return null
  }

  // Authenticated - render children
  return <>{children}</>
} 