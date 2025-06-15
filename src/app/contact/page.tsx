'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InquiryForm from '@/components/InquiryForm'

export default function ContactPage() {
  const whatsappNumber = "919414479697"
  
  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to get in touch regarding your products and services."
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-primary-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="bg-primary-500 p-3 rounded-full shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="bg-green-500 p-3 rounded-full shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="bg-accent-500 p-3 rounded-full shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="bg-primary-600 p-3 rounded-full shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              Contact <span className="text-primary-600">Us</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-6 max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Get in touch with our team for expert consultation and competitive quotes
            </p>
            <div className="text-lg text-accent-600 mb-8 font-medium">
              हमसे संपर्क करें - आपकी सुविधा के लिए
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+919414479697"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button 
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
              <a 
                href="mailto:tanozmodi@gmail.com"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="bg-primary-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-600 mb-2">Call us directly</p>
              <a href="tel:+919414479697" className="text-primary-600 hover:text-primary-800 font-medium">
                +91 94144-79697
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">WhatsApp</h3>
              <p className="text-gray-600 mb-2">Quick responses</p>
              <button 
                onClick={handleWhatsAppContact}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Message Us
              </button>
            </div>

            {/* Email */}
            <div className="bg-accent-50 rounded-lg p-6 text-center">
              <div className="bg-accent-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:tanozmodi@gmail.com" className="text-accent-600 hover:text-accent-800 font-medium">
                tanozmodi@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="bg-primary-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Visit Us</h3>
              <p className="text-gray-600 mb-2">Come to our store</p>
              <p className="text-primary-600 font-medium text-sm">
                17-18 Teh Bazaar<br />
                Sri Ganganagar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote and consultation.
              </p>
              <InquiryForm />
            </div>

            {/* Business Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Business Information</h2>
              
              {/* Business Hours */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="text-sm text-blue-600 mt-2">
                    Emergency support available 24/7 via WhatsApp
                  </div>
                </div>
              </div>

              {/* Shop Address */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Shop Address</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  17-18 Teh Bazaar<br />
                  Purani Dhan Mandi<br />
                  Sri Ganganagar, Rajasthan
                </p>
                <div className="rounded-lg overflow-hidden mb-3">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.21618078481976!2d73.87353495253355!3d29.929690236359985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b50eeff60a61%3A0x67e0552c266629c5!2sNew%20modi%20iron!5e0!3m2!1sen!2sau!4v1749917471145!5m2!1sen!2sau" 
                    width="100%" 
                    height="250" 
                    style={{border: 0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-60 rounded-lg"
                  ></iframe>
                </div>
                <a 
                  href="https://maps.app.goo.gl/8hAnvNqfsEtVH6YU9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  View Shop on Google Maps
                </a>
              </div>

              {/* Godown Address */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Godown Address</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  26 Doctor Colony<br />
                  Lane next to Nexa Showroom<br />
                  Suratgarh Road, Sri Ganganagar, Rajasthan
                </p>
                <div className="rounded-lg overflow-hidden mb-3">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.8931037047687!2d73.8779043!3d29.8961806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b52d8555cf53%3A0x4a56751b501fc822!2s26-27%2C%20Doctor%20Colony%2C%20Ramdev%20Colony%2C%20Sri%20Ganganagar%2C%20Rajasthan%20335001%2C%20India!5e0!3m2!1sen!2sau!4v1749917833036!5m2!1sen!2sau" 
                    width="100%" 
                    height="250" 
                    style={{border: 0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-60 rounded-lg"
                  ></iframe>
                </div>
                <a 
                  href="https://maps.app.goo.gl/8hAnvNqfsEtVH6YU9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium text-sm"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  View Godown on Google Maps
                </a>
              </div>

              {/* Team Contacts */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Team Contacts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-900">Arjun Ji</span>
                      <span className="text-sm text-gray-600 ml-2">(Account Manager)</span>
                    </div>
                    <a href="tel:+919950479697" className="text-blue-600 hover:text-blue-800">
                      +91 99504-79697
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-900">Jagdeesh Ji</span>
                      <span className="text-sm text-gray-600 ml-2">(Godown Manager)</span>
                    </div>
                    <a href="tel:+917891279697" className="text-blue-600 hover:text-blue-800">
                      +91 78912-79697
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-900">Bhanwar Lal Ji</span>
                      <span className="text-sm text-gray-600 ml-2">(Marketing Manager)</span>
                    </div>
                    <a href="tel:+918107779697" className="text-blue-600 hover:text-blue-800">
                      +91 81077-79697
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media and Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Connect With Us</h2>
            <p className="text-lg text-gray-600">Follow us on social media for updates and latest products</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12">
            <a 
              href="https://instagram.com/tanozmodi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline">Follow on Instagram</span>
              <span className="sm:hidden">Instagram</span>
            </a>
            <a 
              href="https://facebook.com/tanozmodi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
            >
              <Facebook className="w-5 h-5" />
              <span className="hidden sm:inline">Like on Facebook</span>
              <span className="sm:hidden">Facebook</span>
            </a>
            <button 
              onClick={handleWhatsAppContact}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 sm:px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">WhatsApp</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-4 hrs</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">WhatsApp Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 