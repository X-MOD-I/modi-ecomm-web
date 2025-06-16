import { z } from 'zod'

// Validation schemas
export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required').min(3, 'Username must be at least 3 characters'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Admin credentials (in production, this would be in a database)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'Modi@123', // In production, this would be hashed
}

// Auth utilities
export class AuthManager {
  private static readonly AUTH_KEY = 'bath-gallery-admin-auth'
  private static readonly SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

  // Check if user is authenticated
  static isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false
    
    const authData = localStorage.getItem(this.AUTH_KEY)
    if (!authData) return false

    try {
      const { timestamp } = JSON.parse(authData)
      const now = Date.now()
      
      // Check if session has expired
      if (now - timestamp > this.SESSION_DURATION) {
        this.logout()
        return false
      }
      
      return true
    } catch {
      this.logout()
      return false
    }
  }

  // Login with credentials
  static login(credentials: LoginFormData): { success: boolean; error?: string } {
    const validation = loginSchema.safeParse(credentials)
    
    if (!validation.success) {
      return {
        success: false,
        error: validation.error.errors[0].message
      }
    }

    const { username, password } = validation.data

    // Check credentials
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return {
        success: false,
        error: 'Invalid username or password'
      }
    }

    // Store auth session
    const authData = {
      username,
      timestamp: Date.now(),
      role: 'admin'
    }

    localStorage.setItem(this.AUTH_KEY, JSON.stringify(authData))

    return { success: true }
  }

  // Logout user
  static logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.AUTH_KEY)
    }
  }

  // Get current user info
  static getCurrentUser(): { username: string; role: string } | null {
    if (!this.isAuthenticated()) return null

    try {
      const authData = localStorage.getItem(this.AUTH_KEY)
      if (!authData) return null

      const { username, role } = JSON.parse(authData)
      return { username, role }
    } catch {
      return null
    }
  }

  // Check if session will expire soon (within 1 hour)
  static isSessionExpiringSoon(): boolean {
    if (typeof window === 'undefined') return false
    
    const authData = localStorage.getItem(this.AUTH_KEY)
    if (!authData) return false

    try {
      const { timestamp } = JSON.parse(authData)
      const now = Date.now()
      const timeUntilExpiry = this.SESSION_DURATION - (now - timestamp)
      
      return timeUntilExpiry < 60 * 60 * 1000 // Less than 1 hour
    } catch {
      return false
    }
  }

  // Extend session
  static extendSession(): void {
    if (!this.isAuthenticated()) return

    try {
      const authData = localStorage.getItem(this.AUTH_KEY)
      if (!authData) return

      const data = JSON.parse(authData)
      data.timestamp = Date.now()
      
      localStorage.setItem(this.AUTH_KEY, JSON.stringify(data))
    } catch {
      // If there's an error, just logout
      this.logout()
    }
  }
} 