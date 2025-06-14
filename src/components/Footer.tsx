import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg mr-3">
                <span className="text-xl font-bold">NMI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">New Modi Iron</h3>
                <p className="text-gray-400 text-sm">न्यू मोदी आयरन • Pipe Fittings, C.P. Fittings, Tiles & Sanitary Products</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for quality pipe fittings, C.P. fittings, tiles, and sanitary products.
              Serving Sri Ganganagar and surrounding areas with premium products and excellent service.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-semibold mb-1">Shop Address</h5>
                <p className="text-gray-300 text-sm">
                  17-18 Tah Bazaar<br />
                  Purani Dhan Mandi<br />
                  Sri Ganganagar, Rajasthan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-semibold mb-1">Godown Address</h5>
                <p className="text-gray-300 text-sm">
                  26 Doctor Colony<br />
                  Lane next to Naksa Showroom<br />
                  Suratgarh Road, Sri Ganganagar, Rajasthan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-semibold mb-1">Contact Us</h5>
                <p className="text-gray-300 text-sm">
                  <strong>Prof. Tanoj Modi (Proprietor)</strong><br />
                  📞 +91 94144-79697<br />
                  ✉️ tanozmodi@gmail.com<br />
                  <span className="text-xs">GSTIN: 08AOYPM2012C1Z2</span>
                </p>
              </div>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h5 className="font-semibold mb-4 text-center">Our Team</h5>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-medium text-white">Arjun Ji</p>
                <p className="text-gray-400">Account Manager</p>
                <p className="text-gray-300">📞 +91 93515-92575</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-white">Jagdeesh Ji</p>
                <p className="text-gray-400">Godown Manager</p>
                <p className="text-gray-300">📞 +91 97831-72074</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-white">Bhanwar Lal Ji</p>
                <p className="text-gray-400">Marketing Manager</p>
                <p className="text-gray-300">📞 +91 94611-83534</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <p className="text-gray-300 text-sm">Get the latest deals and product updates</p>
            </div>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} New Modi Iron. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 