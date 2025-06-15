import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, MapPin, Calendar, Phone, Mail, Star, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/30 rounded-full translate-y-32 -translate-x-32"></div>
          <div className="absolute inset-0 bg-primary-700/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-accent-500 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Calendar className="w-4 h-4 mr-2" />
              Established 1994
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              About New Modi Iron
            </h1>
            <p className="text-xl lg:text-2xl mb-6 max-w-4xl mx-auto text-primary-100 leading-relaxed">
              Your trusted partner for quality pipe fittings, C.P. fittings, tiles, and sanitary products
            </p>
            <div className="text-lg text-accent-300 mb-8 font-medium">
              न्यू मोदी आयरन - गुणवत्ता और विश्वसनीयता का प्रतीक
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-accent-600 mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-gray-600 font-medium">Premium Brands</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Established in 1994, New Modi Iron has been serving the Sri Ganganagar community and beyond with 
                  premium quality plumbing and sanitary solutions. What started as a vision to provide reliable, 
                  high-quality products has grown into a trusted business serving thousands of satisfied customers.
                </p>
                <p>
                  Located in the heart of Sri Ganganagar, Rajasthan, we have built our reputation on three core 
                  principles: quality products, competitive pricing, and exceptional customer service. Our commitment 
                  to excellence has made us the preferred choice for both residential and commercial projects.
                </p>
                <p>
                  Under the leadership of Tanoj Modi Ji, our team has continuously expanded our product range 
                  and strengthened partnerships with leading brands to offer the best solutions to our customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-gray-600">Premium Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide premium quality plumbing and sanitary solutions that meet the highest standards 
                of durability, functionality, and design. We are committed to helping our customers create 
                beautiful, efficient spaces while ensuring complete satisfaction through exceptional service 
                and competitive pricing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading destination for plumbing and sanitary solutions in Rajasthan, 
                recognized for our commitment to quality, innovation, and customer satisfaction. We aim 
                to continuously expand our offerings while maintaining the personal touch that has made 
                us a trusted name in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the dedicated professionals behind New Modi Iron</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tanoj Modi Ji</h3>
              <p className="text-blue-600 font-medium mb-2">Proprietor</p>
              <p className="text-gray-600 text-sm">Leading the company with vision and expertise</p>
              <div className="mt-4 space-y-1">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 94144-79697
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  tanozmodi@gmail.com
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Arjun Ji</h3>
              <p className="text-green-600 font-medium mb-2">Account Manager</p>
              <p className="text-gray-600 text-sm">Managing customer accounts and relationships</p>
              <div className="mt-4">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 99504-79697
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jagdeesh Ji</h3>
              <p className="text-orange-600 font-medium mb-2">Godown Manager</p>
              <p className="text-gray-600 text-sm">Overseeing inventory and warehouse operations</p>
              <div className="mt-4">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 78912-79697
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bhanwar Lal Ji</h3>
              <p className="text-purple-600 font-medium mb-2">Marketing Manager</p>
              <p className="text-gray-600 text-sm">Driving business growth and market expansion</p>
              <div className="mt-4">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 81077-79697
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Why Choose New Modi Iron?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">All our products come with manufacturer warranties and quality guarantees.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Best prices in the market without compromising on quality.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Consultation</h3>
                <p className="text-gray-600">Professional advice and product recommendations for your projects.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Local Presence</h3>
                <p className="text-gray-600">Established local business with deep community roots and understanding.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">After-Sales Support</h3>
                <p className="text-gray-600">Continued support and service even after your purchase.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Wide Product Range</h3>
                <p className="text-gray-600">Complete solutions for all your plumbing and sanitary needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team for expert consultation and competitive quotes on all your plumbing and sanitary needs.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 