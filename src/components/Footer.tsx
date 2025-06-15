import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-4 lg:px-8 xl:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg mr-3">
                <span className="text-lg lg:text-xl font-bold">NMI</span>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold">New Modi Iron</h3>
                <p className="text-gray-400 text-xs lg:text-sm">न्यू मोदी आयरन • Pipe Fittings, C.P. Fittings, Tiles & Sanitary Products</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm lg:text-base leading-relaxed">
              Your trusted partner for quality pipe fittings, C.P. fittings, tiles, and sanitary products.
              Serving Sri Ganganagar and surrounding areas with premium products and excellent service.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tanozmodi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tanozmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.threads.com/@tanozmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                aria-label="Threads"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01v-.017C1.5 8.417 2.35 5.563 3.995 3.512 5.845 1.205 8.598.024 12.186 0h.014c2.984 0 5.682.817 7.819 2.368l-3.135 4.348c-1.285-.746-2.737-1.157-4.184-1.176-1.773.02-3.301.646-4.548 1.864-1.247 1.218-1.88 2.808-1.88 4.723v.017c0 1.915.633 3.505 1.88 4.723 1.247 1.218 2.775 1.844 4.548 1.864 1.447-.019 2.899-.43 4.184-1.176l3.135 4.348C17.868 23.183 15.17 24 12.186 24zM12.5 14.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

                     {/* Customer Service */}
           <div>
             <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Customer Service</h4>
             <ul className="space-y-2">
               <li>
                 <Link href="/coming-soon?page=shipping" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                   Shipping Info
                 </Link>
               </li>
               <li>
                 <Link href="/coming-soon?page=returns" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                   Returns & Exchanges
                 </Link>
               </li>
               <li>
                 <Link href="/coming-soon?page=warranty" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                   Warranty
                 </Link>
               </li>
               <li>
                 <Link href="/coming-soon?page=faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                   FAQ
                 </Link>
               </li>
             </ul>
           </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-semibold mb-1 text-sm lg:text-base">Shop Address</h5>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                  17-18 Teh Bazaar<br />
                  Purani Dhan Mandi<br />
                  Sri Ganganagar, Rajasthan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-semibold mb-1 text-sm lg:text-base">Godown Address</h5>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                  26 Doctor Colony<br />
                  Lane next to Nexa Showroom<br />
                  Suratgarh Road, Sri Ganganagar, Rajasthan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-semibold mb-1 text-sm lg:text-base">Contact Us</h5>
                <div className="text-gray-300 text-xs lg:text-sm space-y-1">
                  <p className="font-medium">Tanoj Modi Ji (Proprietor)</p>
                  <a href="tel:+919414479697" className="flex items-center hover:text-white transition-colors">
                    📞 +91 94144-79697
                  </a>
                  <a href="mailto:tanozmodi@gmail.com" className="flex items-center hover:text-white transition-colors">
                    ✉️ tanozmodi@gmail.com
                  </a>
                  <p className="text-xs text-gray-400">GSTIN: 08AOYPM2012C1Z2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-700">
            <h5 className="font-semibold mb-3 lg:mb-4 text-center text-sm lg:text-base">Our Team</h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs lg:text-sm">
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <p className="font-medium text-white text-sm">Arjun Ji</p>
                <p className="text-gray-400 text-xs">Account Manager</p>
                <a href="tel:+919351592575" className="text-gray-300 hover:text-white transition-colors text-xs">
                  📞 +91 93515-92575
                </a>
              </div>
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <p className="font-medium text-white text-sm">Jagdeesh Ji</p>
                <p className="text-gray-400 text-xs">Godown Manager</p>
                <a href="tel:+919783172074" className="text-gray-300 hover:text-white transition-colors text-xs">
                  📞 +91 97831-72074
                </a>
              </div>
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <p className="font-medium text-white text-sm">Bhanwar Lal Ji</p>
                <p className="text-gray-400 text-xs">Marketing Manager</p>
                <a href="tel:+919461183534" className="text-gray-300 hover:text-white transition-colors text-xs">
                  📞 +91 94611-83534
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-700">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold mb-2 text-sm lg:text-base">Stay Updated</h5>
              <p className="text-gray-300 text-xs lg:text-sm">Get the latest deals and product updates</p>
            </div>
            <div className="flex flex-col sm:flex-row max-w-md w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white text-sm mb-2 sm:mb-0"
                style={{ fontSize: '16px' }} // Prevent zoom on iOS
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-200 text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-3 lg:py-4 w-full">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-xs lg:text-sm text-center md:text-left">
              © {currentYear} New Modi Iron. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0 flex justify-center md:justify-end space-x-4 lg:space-x-6">
              <Link href="/coming-soon?page=privacy" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/coming-soon?page=terms" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/coming-soon?page=sitemap" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 