# Bath Gallery Store - Catalog & Inquiry Website

A modern, responsive catalog website built with Next.js for Bath Gallery Store, specializing in premium bathroom fittings, accessories, and fixtures. Designed for inquiry-based sales with WhatsApp integration.

## 🚀 Features

- **Product Catalog**: Beautiful product showcases with pricing and specifications
- **Inquiry Forms**: Customer inquiry system instead of shopping cart
- **WhatsApp Integration**: Instant communication via WhatsApp buttons and floating widget
- **Quote Requests**: Product-specific quote request functionality
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Optimized**: Built-in SEO features with Next.js App Router

## 🛠 Tech Stack

- **Framework**: Next.js 15.3+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Communication**: WhatsApp Business API integration
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📋 Business Model

This website follows an **inquiry-based sales model** perfect for B2B and high-value B2C sales:

### **Customer Journey:**
1. **Browse Catalog** - Customers view products and pricing
2. **Request Quotes** - Click "Get Quote" buttons for specific products
3. **Submit Inquiries** - Fill detailed inquiry forms with requirements
4. **Instant Contact** - Use WhatsApp for immediate communication
5. **Business Follow-up** - Receive inquiries via email and respond personally

### **Key Features:**
- 🛍️ **No Shopping Cart** - Inquiry-based instead of direct purchase
- 📱 **WhatsApp Integration** - Floating button and product-specific messages
- 📧 **Email Inquiries** - Forms automatically generate email drafts
- 💬 **Multiple Contact Methods** - Phone, WhatsApp, email, and forms
- 🏪 **Showroom Integration** - Schedule visits and consultations

## 🎯 Product Categories

The website showcases:
- Shower Sets & Fixtures
- Bath Faucets & Taps
- Towel Warmers
- Bathroom Accessories
- Vanity Units
- Bathroom Hardware

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd modi-ecomm-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3002](http://localhost:3002) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### WhatsApp Configuration
Update WhatsApp number in:
- `src/components/Header.tsx`
- `src/components/WhatsAppFloat.tsx`
- `src/app/page.tsx`

Replace `"919876543210"` with your actual WhatsApp Business number.

### Email Configuration
Update email address in `src/components/InquiryForm.tsx`:
```typescript
const mailtoLink = `mailto:your-business@email.com?subject=...`
```

### Business Information
Update contact details in:
- `src/components/Header.tsx` - Phone number in header
- `src/components/Footer.tsx` - Address, hours, contact info
- `src/components/InquiryForm.tsx` - Contact information

## 📱 Inquiry System

### Form Types Available:
- **General Inquiry** - Basic contact form
- **Product Quote** - Specific product pricing requests
- **Installation Service** - Service-related inquiries
- **Showroom Visit** - Schedule appointments
- **Bulk Order** - Commercial/contractor inquiries

### WhatsApp Features:
- **Floating Button** - Always visible on all pages
- **Product-Specific Messages** - Pre-filled messages for each product
- **Showroom Scheduling** - Direct WhatsApp link for appointments
- **Quick Contact** - Header WhatsApp button

## 🔧 Next Steps for Your Business

1. **Update Contact Information** - Replace placeholder phone/email
2. **Add Real Product Images** - Replace placeholder images with actual products
3. **Configure Email Handling** - Set up proper email backend or service
4. **WhatsApp Business** - Set up WhatsApp Business account
5. **Add More Products** - Expand product catalog
6. **SEO Optimization** - Add proper meta descriptions and keywords
7. **Analytics** - Add Google Analytics or similar tracking

## 📞 Business Benefits

### **For Bath Gallery Store:**
- **Lead Generation** - Capture customer details and requirements
- **Personal Touch** - Direct communication via WhatsApp and phone
- **Qualified Leads** - Detailed inquiry forms filter serious customers
- **Showroom Visits** - Easy scheduling increases foot traffic
- **Professional Image** - Modern website builds trust and credibility

### **For Customers:**
- **Easy Inquiry Process** - Simple forms and instant WhatsApp contact
- **Quick Responses** - Direct communication channels
- **Product Information** - Detailed catalog with pricing
- **Expert Consultation** - Personal service and recommendations

## 🎯 Ideal for Indian Market

- **Currency**: All pricing in Indian Rupees (₹)
- **Contact Methods**: Indian phone number format
- **Business Hours**: Adjusted for Indian market
- **Communication**: WhatsApp (extremely popular in India)
- **Regional Focus**: Mentions "across India"

## 📦 Deployment

The website is ready to deploy to any hosting platform. Recommended: **Vercel** for automatic deployments.

---

**Perfect for businesses that want to showcase products and generate leads rather than process online orders directly.** 🚿✨