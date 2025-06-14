'use client'

import { useState } from 'react'
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react'

interface InquiryFormProps {
  productName?: string
  productPrice?: string
}

export default function InquiryForm({ productName, productPrice }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: productName || '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create email content
    const emailSubject = `New Modi Iron Inquiry - ${formData.inquiryType === 'product' ? formData.product : 'General Inquiry'}`
    const emailBody = `
New Inquiry from New Modi Iron Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Inquiry Type: ${formData.inquiryType}
${formData.product ? `Product Interest: ${formData.product} ${productPrice ? `(${productPrice})` : ''}` : ''}

Message:
${formData.message}

---
Sent from New Modi Iron Website (न्यू मोदी आयरन)
    `.trim()

    // For now, we'll use mailto (you can replace this with a proper backend later)
    const mailtoLink = `mailto:tanozmodi@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: productName || '',
          message: '',
          inquiryType: 'general'
        })
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 mb-2">
          <Send className="w-8 h-8 mx-auto" />
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your inquiry has been submitted. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-primary-600" />
        Send us an Inquiry
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
              style={{ fontSize: '16px' }}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-1" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
              style={{ fontSize: '16px' }}
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
            style={{ fontSize: '16px' }}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
            style={{ fontSize: '16px' }}
          >
            <option value="general">General Inquiry</option>
            <option value="product">Product Quote</option>
            <option value="installation">Installation Service</option>
            <option value="showroom">Showroom Visit</option>
            <option value="bulk">Bulk Order</option>
          </select>
        </div>

        {productName && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product of Interest
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
              style={{ fontSize: '16px' }}
              placeholder="Product name"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-base"
            style={{ fontSize: '16px' }}
            placeholder="Please describe your requirements, preferred timeline, budget range, etc."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-base font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          style={{ minHeight: '48px' }}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Inquiry
            </>
          )}
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Or call us directly at <a href="tel:+919414479697" className="text-primary-600 font-semibold hover:underline">+91 94144-79697</a></p>
      </div>
    </div>
  )
} 