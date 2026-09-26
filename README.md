# Mr. Sweet – Haute Confectionery & Commercial Wholesale

A luxury, high-conversion web application for **Mr. Sweet – Haute Confectionery**, combining traditional Indian sweets (*mithai*) with modern editorial aesthetics, interactive atelier streams, bespoke wedding hamper configurators, and commercial wholesale B2B lead generation.

---

## 🚀 Tech Stack

- **Core**: React 18 + Vite
- **Styling**: Tailwind CSS v3 + PostCSS + Autoprefixer
- **Icons**: Lucide React Icons
- **Fonts**: Plus Jakarta Sans & Playfair Display / Cormorant Garamond (via Google Fonts)
- **State & Architecture**: Component-driven architecture with centralized data models (`src/data/`) and utility services (`src/utils/`).

---

## 📁 Project Structure

```
mr_sweets/
├── public/                     # Static production assets, images, favicon, sitemap & robots.txt
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── atelier_conching_stream.jpg
│   ├── gold_coin_jar.jpg
│   ├── kaju_katli_diamond.jpg
│   ├── romeo_choco_cone.jpg
│   ├── saffron_motichoor_ladoo.jpg
│   ├── swiss_strawberry_wafer.jpg
│   ├── nutymax_wafer_bar.jpg
│   └── crazy_lips_candy.jpg
├── src/
│   ├── assets/                 # Reusable vector icons & static media
│   ├── components/             # Reusable UI components & modals
│   │   ├── Navbar.jsx          # Header with sticky navigation, search, wishlist & inquiry button
│   │   ├── LeadGenModal.jsx    # Unified lead generation form modal (Product, B2B, Custom Box)
│   │   ├── CartDrawer.jsx      # Slide-over shopping bag drawer with promo code validation
│   │   ├── ProductQuickViewModal.jsx # Detail popup modal for confectionery items
│   │   └── Footer.jsx          # Dark espresso brand footer & contact information
│   ├── data/                   # Data models & site configurations
│   │   ├── products.js         # Centralized product catalog arrays (Iconic & Haute)
│   │   └── siteConfig.js       # Brand contact info, social links, and navigation items
│   ├── utils/                  # API integration utilities & helper services
│   │   └── api.js              # Lead submission API hook template
│   ├── App.jsx                 # Main layout & section orchestrator
│   ├── main.jsx                # React DOM entrypoint
│   └── index.css               # Global Tailwind CSS directives & scrollbar styles
├── .env.example                # Environment variable reference
├── index.html                  # HTML5 template with SEO meta tags & JSON-LD structured data
├── tailwind.config.js          # Tailwind custom palette, typography & shadow extensions
└── vite.config.js              # Vite bundler configuration
```

---

## 🛠️ Installation & Setup

1. **Clone the repository & enter workspace**:
   ```bash
   git clone https://github.com/mrsweet/mr-sweet-haute-confectionery.git
   cd mr-sweet-haute-confectionery
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000/`.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Available variables:
```env
VITE_PORT=3000
VITE_API_BASE_URL=https://api.mrsweetfoods.com/v1
```

---

## 📝 Developer How-To Guides

### 1. How to Add a New Product
All product information is stored inside `src/data/products.js`.

To add a new product to the **Authentic Packaged Range**, append an object to `iconicProducts`:
```javascript
{
  id: 'iconic-8',
  category: 'wafers', // 'wafers' | 'candies' | 'tins'
  name: 'New Coconut Caramel Roll Pack',
  badge: 'NEW ARRIVAL',
  rating: 4.9,
  orders: '650 orders',
  priceUSD: '11.50',
  priceINR: '140',
  moq: '10 cartons',
  tag: '₹10 Pack',
  image: '/coconut_caramel.jpg',
  description: 'Toasted coconut crisp rolls filled with butter caramel.'
}
```

### 2. How to Update Contact Information
All brand contact details, address lines, phone numbers, and navigation links are located in `src/data/siteConfig.js`:
```javascript
export const siteConfig = {
  phone: "+91 1800-MR-SWEET",
  email: "concierge@mrsweetfoods.com",
  address: "Industrial Confectionery Park, Sector 4, Food Hub, India.",
  // ...
};
```

### 3. How to Connect the Enquiry Form to a Real Backend API
The lead generation system submits form data through `src/utils/api.js`.

To connect your backend REST endpoint:
1. Update `VITE_API_BASE_URL` in `.env`.
2. Update the `fetch()` call inside `submitEnquiry()` in `src/utils/api.js`:
```javascript
export async function submitEnquiry(enquiryData, enquiryType = 'product') {
  const response = await fetch(`${API_BASE_URL}/enquiries/${enquiryType}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enquiryData)
  });
  return await response.json();
}
```

---

## 📄 License & Compliance

© 2026 Mr. Sweet Confectionery & Snacks Ltd. All Rights Reserved. FSSAI & ISO 22000 Certified Manufacturing.
