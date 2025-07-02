import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, TrendingUp, Star, Sparkles } from 'lucide-react';

const Partnership = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Enhanced Reliability',
      description: 'Combined expertise ensures 99.9% uptime and enterprise-grade security for mission-critical business operations.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Infrastructure designed to grow with your business, from startups to enterprise-level operations across multiple markets.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Deep understanding of emerging market dynamics combined with global technology standards and best practices.'
    }
  ];

  return (
    <section id="partnership" className="relative py-16 lg:py-24 bg-white dark:bg-gray-900/50 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-[#AAADFF]/15 to-[#391CAD]/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-[#391CAD]/10 to-[#6E6789]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
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
            <Award className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF] mr-3" />
            <span className="text-base font-semibold text-[#391CAD] dark:text-[#AAADFF]">Strategic Partnerships</span>
            <Star className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF] ml-3" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold text-[#2B2449] dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partnering with
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
              Industry Leaders
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#6E6789] dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We collaborate with established technology partners to deliver 
            world-class solutions that meet the unique needs of emerging markets.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Partner Showcase */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#391CAD] via-[#6E6789] to-[#391CAD] dark:from-[#2B2449] dark:via-[#391CAD] dark:to-[#2B2449] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(57, 28, 173, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Enhanced background decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-48 h-48 bg-[#AAADFF]/10 rounded-full blur-2xl"
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
                className="absolute bottom-0 left-0 w-32 h-32 bg-[#AAADFF]/20 rounded-full blur-xl"
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
                className="absolute top-1/3 right-1/4 w-20 h-20 bg-[#AAADFF]/15 rounded-full blur-lg"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -10, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-4 mb-8"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-[#AAADFF]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#AAADFF]/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">TechGlobal Solutions</h3>
                    <p className="text-white/80">Strategic Technology Partner</p>
                  </div>
                </motion.div>
                
                <div className="space-y-6">
                  <motion.p 
                    className="text-white/90 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    "Beyul Labs has consistently delivered innovative solutions that 
                    perfectly align with our mission to empower emerging economies. 
                    Their platform's reliability and scalability make them an 
                    invaluable partner."
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-[#AAADFF]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#AAADFF]/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-sm font-bold">TG</span>
                    </motion.div>
                    <div>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-white/80 text-sm">Chief Technology Officer</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced decorative elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#AAADFF] to-[#391CAD] rounded-full opacity-30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#391CAD] to-[#6E6789] rounded-full opacity-20 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, 15, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Partnership Benefits */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold text-[#2B2449] dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Partnership Benefits
              </motion.h3>
              <motion.p 
                className="text-[#6E6789] dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our strategic partnerships enable us to deliver comprehensive solutions 
                that combine cutting-edge technology with deep market understanding.
              </motion.p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#AAADFF]/10 hover:to-[#391CAD]/5 dark:hover:from-[#391CAD]/20 dark:hover:to-[#AAADFF]/10 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[#391CAD] to-[#6E6789] dark:from-[#AAADFF] dark:to-[#391CAD] rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="w-6 h-6 text-white dark:text-[#2B2449]" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-[#2B2449] dark:text-white mb-2 group-hover:text-[#391CAD] dark:group-hover:text-[#AAADFF] transition-colors duration-200">
                      {benefit.title}
                    </h4>
                    <p className="text-[#6E6789] dark:text-gray-300 text-sm lg:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partnership Stats */}
            <motion.div 
              className="bg-gradient-to-r from-[#AAADFF]/10 via-white/90 to-[#391CAD]/10 dark:from-[#391CAD]/20 dark:via-[#2B2449]/50 dark:to-[#AAADFF]/20 rounded-2xl p-6 backdrop-blur-sm border border-[#AAADFF]/30 dark:border-[#391CAD]/30 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "7+ Years", label: "Partnership Duration" },
                  { value: "200+", label: "Joint Projects" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div 
                      className="text-2xl font-bold bg-gradient-to-r from-[#391CAD] to-[#6E6789] bg-clip-text text-transparent"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-[#6E6789] dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;