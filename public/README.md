# 🎬 Dynamic Pricing Dashboard

A responsive and dynamic pricing dashboard built for a digital subscription-based streaming service.

---

## 🚀 Live Features

- Three subscription plans (Basic, Standard, Premium)
- Toggle between Monthly and Yearly billing
- Yearly pricing includes discount
- Currency selector (USD and INR)
- Recommended plan visually highlighted
- Pricing data loaded from external JSON
- Fully responsive design
- Basic accessibility support

---

## 🛠 Tech Stack

- React (Vite)
- JavaScript (ES6)
- CSS3 (Flexbox, responsive design)
- Mock API via external JSON file

---

## 📂 Project Structure
src/
├── components/
│ └── PricingCard.jsx
├── App.jsx
├── styles.css
public/
├── pricing.json
└── background.jpg

---

## ⚙️ Functional Requirements Implemented

### ✔ Three Plans
- Basic
- Standard (Recommended)
- Premium

### ✔ Each Plan Includes
- Price
- Billing period
- Minimum four features

### ✔ Billing Toggle
- Monthly and Yearly options
- Yearly pricing applies discount

### ✔ Currency Selector
- USD ($)
- INR (₹)
- Dynamic conversion

### ✔ Recommended Plan Highlight
- Special styling
- Visual badge indicator

---

## 📡 Data Handling

- Pricing data is fetched dynamically from `pricing.json`
- UI updates automatically when pricing data changes

---

## 📱 Non-Functional Requirements

- Fully responsive (mobile + desktop)
- Clean component structure
- Reusable PricingCard component
- Basic accessibility (aria-labels, semantic HTML)

---

## 🧠 Design Decisions

- Used external JSON instead of hardcoded data for scalability
- Separated pricing card into reusable component
- Used React state for dynamic UI updates
- Implemented responsive layout using Flexbox
- Applied cinematic background with overlay for improved readability

---

## ⚖️ Trade-offs

- Used static currency conversion rates instead of live API to keep project lightweight
- Used custom CSS instead of UI library for better control and simplicity

---

## ▶️ How to Run Locally

1. Clone repository:
git clone https://github.com/Sarayu51179/Subscription_platform.git

2. Navigate into project:
cd pricing-dashboard

3. Install dependencies:
npm install

4. Run development server:
npm run dev

5. Open browser:
http://localhost:5173


---

## 📌 Author
Mallarapu Sarayu