import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Lock, 
  Cloud,
  Users,
  Smartphone,
  Sparkles
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with international security standards to protect your business data.',
      gradient: 'from-[#391CAD] to-[#6E6789]'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times and intelligent caching for seamless user experience.',
      gradient: 'from-[#6E6789] to-[#AAADFF]'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Multi-region deployment with local data centers ensuring low latency and regulatory compliance.',
      gradient: 'from-[#AAADFF] to-[#391CAD]'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics to make data-driven decisions for your business growth.',
      gradient: 'from-[#391CAD] to-[#2B2449]'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Built on modern cloud architecture with auto-scaling and high availability for maximum reliability.',
      gradient: 'from-[#2B2449] to-[#6E6789]'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design optimized for mobile devices, ensuring accessibility across all platforms.',
      gradient: 'from-[#6E6789] to-[#391CAD]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-[#AAADFF]/10 dark:from-gray-900 dark:via-gray-800 dark:to-[#391CAD]/20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#AAADFF]/20 to-[#391CAD]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#391CAD]/15 to-[#6E6789]/25 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Modern Section Topic Style */}
          <motion.div 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#AAADFF]/20 via-[#AAADFF]/30 to-[#AAADFF]/20 dark:from-[#391CAD]/20 dark:via-[#391CAD]/30 dark:to-[#391CAD]/20 rounded-full mb-8 border border-[#AAADFF]/40 dark:border-[#391CAD]/40 backdrop-blur-sm shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF] mr-3" />
            <span className="text-base font-semibold text-[#391CAD] dark:text-[#AAADFF]">Product Features</span>
            <Zap className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF] ml-3" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold text-[#2B2449] dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built for the Future of
            <motion.span 
              className="block bg-gradient-to-r from-[#391CAD] via-[#6E6789] to-[#391CAD] dark:from-[#AAADFF] dark:via-[#6E6789] dark:to-[#AAADFF] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Business Technology
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#6E6789] dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our platform combines cutting-edge technology with practical solutions 
            designed specifically for the unique challenges of emerging markets.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group relative bg-white/80 dark:bg-[#2B2449]/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#AAADFF]/30 dark:border-[#391CAD]/30 overflow-hidden cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(57, 28, 173, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Dynamic gradient background overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#AAADFF]/5 via-transparent to-[#391CAD]/10 dark:from-[#391CAD]/10 dark:via-transparent dark:to-[#AAADFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                initial={false}
              />
              
              {/* Animated background particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-[#AAADFF] dark:bg-[#391CAD] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-12 right-8 w-1 h-1 bg-[#6E6789] rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-[#391CAD] dark:bg-[#AAADFF] rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              
              {/* Icon */}
              <motion.div 
                className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.gradient} dark:from-[#AAADFF] dark:to-[#391CAD] rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-8 h-8 text-white dark:text-[#2B2449]" />
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <motion.h3 
                  className="text-xl font-bold text-[#2B2449] dark:text-white group-hover:text-[#391CAD] dark:group-hover:text-[#AAADFF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-[#6E6789] dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#AAADFF] to-[#391CAD] rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#391CAD] to-[#6E6789] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                animate={{
                  scale: [1.2, 1, 1.2],
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Feature Highlight */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#391CAD] via-[#6E6789] to-[#391CAD] dark:from-[#2B2449] dark:via-[#391CAD] dark:to-[#2B2449] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-[#AAADFF]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-48 h-48 bg-[#AAADFF]/20 rounded-full blur-2xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#AAADFF]/10 rounded-full blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -15, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-[#AAADFF]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lock className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl lg:text-3xl font-bold">Trusted & Secure</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Every feature is built with security-first principles, ensuring your 
                business data remains protected while maintaining the flexibility and 
                performance needed for growth in emerging markets.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "256-bit", label: "Encryption" },
                { value: "SOC 2", label: "Certified" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Support" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-[#AAADFF]/10 rounded-2xl backdrop-blur-sm border border-[#AAADFF]/20 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(170, 173, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-[#AAADFF]"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-white/80 text-sm mt-1">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;