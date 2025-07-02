import React from 'react';
import { ThemeProvider } from './providers/theme-provider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partnership from './components/Partnership';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="beyul-labs-theme">
      <div className="min-h-screen bg-gradient-to-br from-[#AAADFF] via-white to-[#AAADFF] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460] transition-colors duration-300 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Partnership />
        <Features />
        <TechStack />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;