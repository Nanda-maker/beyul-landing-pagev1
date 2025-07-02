import { useState } from "react";
import { Menu, X, Home, Users, Briefcase, Code, Mail } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Partnership", url: "#partnership", icon: Users },
    { name: "Features", url: "#features", icon: Briefcase },
    { name: "Technology", url: "#tech-stack", icon: Code },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Logo - Aligned with hero content */}
      <div
        className="fixed top-6 z-50"
        style={{ left: "max(2rem, calc((100vw - 80rem) / 2))" }}
      >
        <div className="flex items-center">
          <img
            src="/beyul+labs+box+(orange)3x5.png"
            alt="BeyulLabs"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      {/* Tubelight Navbar - Aligned to Global Reach card (right edge of hero text content) */}
      <div
        className="fixed top-6 z-50"
        style={{ right: "max(2rem, calc((100vw - 80rem) / 2))" }}
      >
        <NavBar items={navItems} />
      </div>

      {/* Mobile Menu Button - Right Side */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl flex items-center justify-center text-[#2B2449] dark:text-white hover:text-[#391CAD] dark:hover:text-[#AAADFF] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-20 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl shadow-2xl p-6">
            <div className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsOpen(false);
                      if (item.url === "#") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else if (item.url.startsWith("#")) {
                        const element = document.querySelector(item.url);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="w-full flex items-center space-x-3 text-[#2B2449] dark:text-white hover:text-[#391CAD] dark:hover:text-[#AAADFF] font-medium transition-colors duration-200 p-3 rounded-lg hover:bg-[#391CAD]/5 dark:hover:bg-[#AAADFF]/5"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
