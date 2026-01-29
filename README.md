# S Digital Solution - Modern Digital Marketing Agency Website             🌜Live Project Link :👉 https://s-digital-solution.vercel.app/

A premium, high-performance website built for **S Digital Solution**, a leading digital marketing agency in Kolkata. This project showcases a modern, dynamic, and responsive user interface designed to convert visitors into clients through an engaging visual experience.

![Project Banner](src/assets/hero-bg.png)

## 🚀 Project Overview

This website serves as the primary digital storefront for **S Digital Solution**. It is engineered to highlight the agency's services, working process, and pricing plans with a focus on:
- **Visual Excellence:** Using glassmorphism, gradients, and custom animations.
- **User Experience (UX):** Seamless navigation, instant feedback on interactions, and mobile responsiveness.
- **Conversion Optimization:** Strategically placed call-to-action buttons and a streamlined contact process.

## ✨ Key UI/UX Features

### 1. Dynamic "Snake Rolling" Animations
A signature visual feature of this project. Cards in the **Services**, **Working Process**, and **Pricing** (Starter & Enterprise) sections feature a unique "snake rolling" border animation on hover.
- **Effect:** A spinning purple/pink gradient light trail travels around the card borders.
- **Implementation:** utilizes complex CSS `conic-gradients` and masking techniques for a high-end feel.

### 2. Interactive Pricing Section
The pricing table is designed for clarity and engagement:
- **Starter & Enterprise Plans:** Feature the interactive "Snake Rolling" animation and corresponding button color changes on hover.
- **Growth (Popular) Plan:** Retains a distinct, permanent premium border styling to stand out as the recommended option.
- **Smart Buttons:** "Get Started" buttons light up in the primary brand color when users interact with the cards.

### 3. Glassmorphism & Modern Styling
- **Top Bar & Navbar:** Features translucent backgrounds with blur effects (`backdrop-blur`) that adapt as the user scrolls.
- **Hero Section:** Implements a clean, high-impact design with split-text animations using `framer-motion`.

### 4. Direct Communication Integration
- **SMS Integration:** The Contact form sends messages directly to the agency's phone number via the user's default SMS app.
- **Location Redirection:** "Visit Us" links open directly in Google Maps for easy navigation.
- **WhatsApp Support:** A floating WhatsApp button ensures instant support access.

### 5. Automated "Refresh to Top"
To ensure users always start their journey from the beginning, the application automatically scrolls to the top of the page upon a browser refresh.

## 🛠️ Technology Stack

- **Framework:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & Custom CSS Keyframes
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Hero.jsx            # Landing section with animations
│   ├── Services.jsx        # Grid of services with "Snake" animation
│   ├── Process.jsx         # Step-by-step process flow
│   ├── Testimonials.jsx    # Client reviews
│   ├── Pricing.jsx         # Interactive pricing tables
│   ├── Contact.jsx         # Form with SMS integration
│   ├── Navbar.jsx          # Responsive navigation
│   └── TopBar.jsx          # Socials and contact info
├── assets/                 # Images and static assets
└── App.jsx                 # Main application logic
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Color Palette

| Color | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary** | `#a100a1` | Brand actions, highlights, gradients |
| **Secondary** | `#d946ef` | Accents, gradients |
| **Background**| `#ffffff` | Clean white background |
| **Text** | `#111827` | High readability dark gray |

---
**Created by Suman Bar** | © 2026 S Digital Solution. All rights reserved.
