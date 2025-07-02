import {
  ArrowRight,
  Globe,
  Shield,
  Zap,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#AAADFF]/20 to-[#391CAD]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#391CAD]/20 to-[#6E6789]/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-[#AAADFF]/10 to-[#391CAD]/20 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#391CAD]/10 via-[#AAADFF]/20 to-[#391CAD]/10 dark:from-[#AAADFF]/20 dark:via-[#391CAD]/10 dark:to-[#AAADFF]/20 rounded-full border border-[#391CAD]/20 dark:border-[#AAADFF]/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-4 h-4 text-[#391CAD] dark:text-[#AAADFF] mr-2" />
                <span className="text-sm font-semibold text-[#391CAD] dark:text-[#AAADFF]">
                  Trusted by Emerging Markets
                </span>
                <Sparkles className="w-4 h-4 text-[#391CAD] dark:text-[#AAADFF] ml-2" />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2B2449] dark:text-white leading-tight"
                variants={itemVariants}
              >
                Empowering Business
                <motion.span
                  className="block bg-gradient-to-r from-[#391CAD] to-[#6E6789] dark:from-[#AAADFF] dark:to-[#391CAD] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Solutions
                </motion.span>
                <span className="block">for Tomorrow</span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-[#6E6789] dark:text-gray-300 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                Beyul Labs delivers cutting-edge technology platforms designed
                specifically for emerging economies. We bridge the gap between
                innovation and accessibility, creating trusted solutions that
                drive sustainable growth.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#391CAD] to-[#2B2449] dark:from-[#AAADFF] dark:to-[#391CAD] text-white dark:text-[#2B2449] font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#391CAD]/25 dark:hover:shadow-[#AAADFF]/25 transition-all duration-300 relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(57, 28, 173, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Explore Solutions</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gradient-to-r from-transparent via-[#AAADFF]/30 to-transparent dark:via-white/20"
              variants={itemVariants}
            >
              {[
                { value: "50+", label: "Countries Served", icon: Globe },
                { value: "99.9%", label: "Uptime", icon: Shield },
                { value: "1M+", label: "Active Users", icon: TrendingUp },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <stat.icon className="w-6 h-6 text-[#391CAD] dark:text-[#AAADFF] opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                    <motion.div
                      className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#391CAD] to-[#6E6789] dark:from-[#AAADFF] dark:to-[#391CAD] bg-clip-text text-transparent"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-[#6E6789] dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Visual Element */}
          <motion.div
            className="relative"
            variants={floatingVariants}
            animate="animate"
          >
            {/* Glassmorphism Card */}
            <motion.div
              className="relative z-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/30 dark:border-gray-700/50 ring-1 ring-white/20 dark:ring-gray-700/30"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(57, 28, 173, 0.10)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#391CAD] to-[#6E6789] dark:from-[#AAADFF] dark:to-[#391CAD] rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="w-6 h-6 text-white dark:text-[#2B2449]" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-[#2B2449] dark:text-white">
                      Global Reach
                    </h3>
                    <p className="text-[#6E6789] dark:text-gray-400 text-sm">
                      Serving emerging markets worldwide
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-[#AAADFF]/20 via-[#391CAD]/10 to-[#AAADFF]/20 dark:from-[#AAADFF]/10 dark:via-[#391CAD]/5 dark:to-[#AAADFF]/10 rounded-2xl p-4 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-[#2B2449] dark:text-white">
                      Platform Reliability
                    </span>
                    <span className="text-sm font-bold bg-gradient-to-r from-[#391CAD] to-[#6E6789] dark:from-[#AAADFF] dark:to-[#391CAD] bg-clip-text text-transparent">
                      99.9%
                    </span>
                  </div>
                  <div className="w-full bg-[#AAADFF]/40 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#391CAD] via-[#6E6789] to-[#AAADFF] h-3 rounded-full shadow-lg"
                      initial={{ width: 0 }}
                      animate={{ width: "99.9%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: "Fast Deploy" },
                    { icon: Shield, label: "Secure" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-gradient-to-br from-[#391CAD]/5 via-transparent to-[#AAADFF]/10 dark:from-[#AAADFF]/10 dark:to-[#391CAD]/5 rounded-2xl backdrop-blur-sm border border-[#391CAD]/10 dark:border-[#AAADFF]/20 cursor-pointer"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(57, 28, 173, 0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-8 h-8 text-[#391CAD] dark:text-[#AAADFF] mx-auto mb-2" />
                      </motion.div>
                      <div className="text-sm font-medium text-[#2B2449] dark:text-white">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Background decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#AAADFF] to-[#391CAD] dark:from-[#391CAD] dark:to-[#AAADFF] rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#391CAD] to-[#6E6789] dark:from-[#AAADFF] dark:to-[#391CAD] rounded-full opacity-10 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, 20, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-[#6E6789] to-[#AAADFF] rounded-full opacity-30 blur-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
