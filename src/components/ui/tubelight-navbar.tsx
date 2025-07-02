"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// If using Next.js, uncomment the next line:
// import Link from "next/link";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn(
        // Shift navbar towards right, not centered
        "fixed bottom-0 sm:top-0 right-8 sm:right-16 z-50 mb-6 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-gradient-to-r from-[#AAADFF]/20 via-white/90 to-[#AAADFF]/20 dark:from-[#391CAD]/20 dark:via-[#2B2449]/40 dark:to-[#391CAD]/20 border border-[#AAADFF]/40 dark:border-[#391CAD]/30 backdrop-blur-xl py-2 px-4 rounded-full shadow-lg shadow-[#AAADFF]/20 dark:shadow-[#391CAD]/20">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                window.location.href = item.url;
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                "text-beyul-dark dark:text-white hover:text-beyul-purple dark:hover:text-purple-400 hover:bg-beyul-purple/5 dark:hover:bg-purple-400/10 hover:shadow-lg hover:shadow-beyul-purple/10 dark:hover:shadow-purple-400/10",
                isActive &&
                  "bg-beyul-purple/10 dark:bg-purple-400/10 text-beyul-purple dark:text-purple-400 shadow-md"
              )}
              style={{
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
              }}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-beyul-purple/5 dark:bg-purple-400/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-beyul-purple dark:bg-purple-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-beyul-purple/20 dark:bg-purple-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-beyul-purple/20 dark:bg-purple-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-beyul-purple/20 dark:bg-purple-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
