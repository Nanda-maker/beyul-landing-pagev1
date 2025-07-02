# Beyul Labs Landing Page

A modern, responsive landing page for Beyul Labs, built with React, TypeScript, Vite, and Tailwind CSS. This project features a clean UI, dark mode support, and a mobile-friendly navigation experience.

## Features

- **Responsive Design:** Looks great on all devices, from mobile to desktop.
- **Custom Navbar:** Includes a tubelight-style navbar, theme toggle, and smooth scrolling navigation.
- **Dark Mode:** Toggle between light and dark themes.
- **Hero Section:** Prominently displays branding and key messaging.
- **Features, Technology, and Partnership Sections:** Highlight what makes Beyul Labs unique.
- **Contact Section:** Easy access for users to get in touch.
- **Modern Stack:** Built with React, TypeScript, Vite, and Tailwind CSS for fast development and performance.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/beyul-landing-page.git
   cd beyul-landing-page
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build for Production

```bash
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
├── public/                # Static assets (images, favicon)
├── src/
│   ├── components/        # React components (Navbar, Hero, Features, etc.)
│   │   └── ui/            # UI subcomponents (icon cloud, theme toggle, etc.)
│   ├── lib/               # Utility functions
│   ├── providers/         # Context providers (e.g., theme)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind CSS imports
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig*.json         # TypeScript configuration
└── package.json           # Project metadata and scripts
```

## Customization

- **Branding:** Replace images in `public/` and update text in components as needed.
- **Navigation:** Edit `src/components/Navbar.tsx` to change nav items or icons.
- **Theme:** Adjust Tailwind config or theme provider for custom color schemes.

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

## License

[MIT](LICENSE)

---

**Beyul Labs** — Building the future, one pixel at a time.
