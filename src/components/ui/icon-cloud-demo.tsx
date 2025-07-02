import React from 'react';
import { motion } from 'framer-motion';
import { IconCloud } from "./interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "postgresql",
  "redis",
  "elasticsearch",
  "amazonaws",
  "docker",
  "kubernetes",
  "go",
  "graphql",
  "tailwindcss",
  "html5",
  "css3",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  return (
    <motion.div 
      className="relative flex size-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white via-[#AAADFF]/5 to-white border border-[#AAADFF]/30 px-20 pb-20 pt-8 shadow-2xl backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced Background gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#391CAD]/5 via-transparent to-[#AAADFF]/10 rounded-2xl"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(57, 28, 173, 0.05) 0%, transparent 50%, rgba(170, 173, 255, 0.1) 100%)",
            "linear-gradient(135deg, rgba(170, 173, 255, 0.1) 0%, transparent 50%, rgba(57, 28, 173, 0.05) 100%)",
            "linear-gradient(135deg, rgba(57, 28, 173, 0.05) 0%, transparent 50%, rgba(170, 173, 255, 0.1) 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Icon Cloud */}
      <div className="relative z-10">
        <IconCloud iconSlugs={slugs} />
      </div>
      
      {/* Enhanced Decorative elements */}
      <motion.div 
        className="absolute top-4 right-4 w-20 h-20 bg-[#391CAD]/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-4 left-4 w-16 h-16 bg-[#AAADFF]/20 rounded-full blur-lg"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 10, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-8 w-12 h-12 bg-[#6E6789]/15 rounded-full blur-md"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
}