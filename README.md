# 🎯 MyCareerSarthi Client

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Modern, Responsive Frontend for the MyCareerSarthi Platform**

[Features](#-features) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Tech Stack](#-tech-stack)

</div>

---

## 📋 Overview

The **MyCareerSarthi Client** is a cutting-edge Next.js 16 application that provides users with an intuitive interface for career analysis, LinkedIn profile optimization, resume evaluation, and personalized career guidance powered by AI.

## ✨ Features

| Feature               | Description                                 |
| --------------------- | ------------------------------------------- |
| 🔐 **Authentication** | Seamless Clerk auth with social logins      |
| 📊 **Dashboard**      | Interactive analytics with Recharts         |
| 🤖 **AI Analysis**    | LinkedIn & Resume analysis tools            |
| 💳 **Payments**       | Secure Razorpay checkout                    |
| 📝 **Blog**           | SEO-optimized blog with engagement features |
| 🌙 **Dark Mode**      | System-aware theme switching                |
| 📱 **Responsive**     | Mobile-first design approach                |
| ⚡ **Performance**    | Turbopack for lightning-fast dev            |

## 🛠 Tech Stack

```
├── Framework       → Next.js 16 (App Router)
├── UI Library      → React 19
├── Styling         → Tailwind CSS 4
├── Components      → Radix UI Primitives
├── Animations      → Framer Motion
├── Authentication  → Clerk
├── Payments        → Razorpay
├── Charts          → Recharts
├── Icons           → Lucide React
├── Carousel        → Swiper
└── Loading         → NextJS Top Loader
```

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- Yarn or npm

### Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
yarn install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Start development server (with Turbopack)
yarn dev
```

### Environment Variables

| Variable                            | Description              |
| ----------------------------------- | ------------------------ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key         |
| `CLERK_SECRET_KEY`                  | Clerk secret key         |
| `NEXT_PUBLIC_API_URL`               | Backend API URL          |
| `NEXT_PUBLIC_RAZORPAY_KEY`          | Razorpay publishable key |

## 📦 Available Scripts

| Command      | Description                     |
| ------------ | ------------------------------- |
| `yarn dev`   | Start dev server with Turbopack |
| `yarn build` | Create production build         |
| `yarn start` | Start production server         |

## 🏗 Project Structure

```
client/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (auth)/       # Authentication routes
│   │   ├── (dashboard)/  # Protected dashboard routes
│   │   ├── blog/         # Blog pages
│   │   └── layout.js     # Root layout
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Base UI primitives
│   │   └── shared/       # Shared components
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   └── styles/           # Global styles
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
└── tailwind.config.js    # Tailwind configuration
```

## 🎨 UI Components

Built on **Radix UI** primitives with custom styling:

- **Accordion** - Collapsible content sections
- **Avatar** - User profile images
- **Dialog** - Modal windows
- **Dropdown Menu** - Action menus
- **Navigation Menu** - Site navigation
- **Progress** - Loading indicators
- **Select** - Custom dropdowns
- **Separator** - Content dividers

## 🔧 Development

### Code Conventions

- **File naming**: kebab-case for files, PascalCase for components
- **Imports**: Absolute imports using `@/` alias
- **Styling**: Tailwind utility classes with `cn()` helper

### Adding New Pages

```jsx
// src/app/new-page/page.js
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

### Creating Components

```jsx
// src/components/ui/button.jsx
import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return <button className={cn("base-styles", className)} {...props} />;
}
```

## 🌐 Key Routes

| Route                   | Description        |
| ----------------------- | ------------------ |
| `/`                     | Landing page       |
| `/sign-in`              | Authentication     |
| `/dashboard`            | User dashboard     |
| `/dashboard/linkedin`   | LinkedIn analysis  |
| `/dashboard/resume`     | Resume analysis    |
| `/dashboard/comparison` | Profile comparison |
| `/blog`                 | Blog listing       |
| `/pricing`              | Pricing plans      |

## ⚡ Performance Features

- **Turbopack** - Fast development builds
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Next.js Font optimization
- **Code Splitting** - Automatic chunk splitting
- **Prefetching** - Link prefetching

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**Built with ❤️ by the MyCareerSarthi Team**

</div>
