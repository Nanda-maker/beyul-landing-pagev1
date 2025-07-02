import { motion } from "framer-motion";
import { Code, Globe, Cpu, Shield, Zap, CheckCircle } from "lucide-react";
import { IconCloudDemo } from "./ui/icon-cloud-demo";

const TechStack = () => {
  const techCategories = [
    {
      name: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      icon: Code,
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Python", "Go", "GraphQL"],
      icon: Cpu,
    },
    {
      name: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      icon: Globe,
    },
    {
      name: "Security",
      technologies: ["OAuth 2.0", "SSL/TLS", "RBAC", "Encryption"],
      icon: Shield,
    },
  ];

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

  return (
    <section
      id="tech-stack"
      className="relative py-16 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#AAADFF]/15 to-[#391CAD]/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            x: [0, 80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-[#391CAD]/10 to-[#6E6789]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-[#6E6789]/10 to-[#AAADFF]/15 rounded-full blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            <Code className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF] mr-3" />
            <span className="text-base font-semibold text-[#391CAD] dark:text-[#AAADFF]">
              Technology Stack
            </span>
            <Zap className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF] ml-3" />
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-5xl font-bold text-[#2B2449] dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powered by
            <motion.span
              className="block bg-gradient-to-r from-[#391CAD] via-[#6E6789] to-[#391CAD] dark:from-[#AAADFF] dark:via-[#6E6789] dark:to-[#AAADFF] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Modern Technologies
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-[#6E6789] dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We leverage the latest and most reliable technologies to build
            scalable, secure, and performant solutions for emerging markets.
          </motion.p>
        </motion.div>

        {/* Main Content - Icon Cloud Left, Text Right */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side - Interactive Icon Cloud */}
          <motion.div className="order-2 lg:order-1" variants={itemVariants}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <IconCloudDemo />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white dark:bg-[#2B2449] rounded-xl p-4 shadow-lg border border-[#AAADFF]/20 dark:border-[#391CAD]/20"
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-[#391CAD]/10 dark:bg-[#AAADFF]/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF]" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-lg font-bold text-[#2B2449] dark:text-white"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      50+
                    </motion.div>
                    <div className="text-xs text-[#6E6789] dark:text-gray-300">
                      Technologies
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-[#2B2449] rounded-xl p-4 shadow-lg border border-[#AAADFF]/20 dark:border-[#391CAD]/20"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-[#391CAD]/10 dark:bg-[#AAADFF]/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Shield className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF]" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-lg font-bold text-[#2B2449] dark:text-white"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    >
                      99.9%
                    </motion.div>
                    <div className="text-xs text-[#6E6789] dark:text-gray-300">
                      Reliability
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.h3
                className="text-2xl lg:text-4xl font-bold text-[#2B2449] dark:text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Enterprise-Grade
                <span className="block text-[#391CAD] dark:text-[#AAADFF]">
                  Technology Foundation
                </span>
              </motion.h3>
              <motion.p
                className="text-lg text-[#6E6789] dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our carefully curated technology stack combines proven
                enterprise solutions with cutting-edge innovations, ensuring
                maximum performance, security, and scalability for emerging
                market challenges.
              </motion.p>
            </div>

            {/* Technology Categories */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-white/60 dark:bg-[#2B2449]/60 backdrop-blur-2xl rounded-xl border border-[#AAADFF]/30 dark:border-[#391CAD]/30 ring-1 ring-white/20 dark:ring-[#391CAD]/20 hover:shadow-2xl transition-all duration-300 cursor-pointer shadow-lg"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(57, 28, 173, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      className="w-10 h-10 bg-[#391CAD]/10 dark:bg-[#AAADFF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#391CAD]/20 dark:group-hover:bg-[#AAADFF]/20 transition-colors duration-200"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF]" />
                    </motion.div>
                    <h4 className="font-bold text-[#2B2449] dark:text-white group-hover:text-[#391CAD] dark:group-hover:text-[#AAADFF] transition-colors duration-200">
                      {category.name}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      >
                        <CheckCircle className="w-3 h-3 text-[#391CAD] dark:text-[#AAADFF]" />
                        <span className="text-sm text-[#6E6789] dark:text-gray-300">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              className="bg-gradient-to-r from-[#391CAD]/10 to-[#AAADFF]/20 dark:from-[#391CAD]/20 dark:to-[#AAADFF]/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold text-[#2B2449] dark:text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 text-[#391CAD] dark:text-[#AAADFF] mr-2" />
                Why Our Stack Matters
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {[
                  { value: "10x", label: "Faster Development" },
                  { value: "99.9%", label: "Uptime SLA" },
                  { value: "24/7", label: "Global Support" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div
                      className="text-2xl font-bold text-[#391CAD] dark:text-[#AAADFF]"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {item.value}
                    </motion.div>
                    <div className="text-sm text-[#6E6789] dark:text-gray-300">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Architecture Showcase - Full Width */}
        <motion.div
          className="bg-gradient-to-br from-[#AAADFF]/10 to-[#391CAD]/5 dark:from-[#391CAD]/20 dark:to-[#AAADFF]/10 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Globe className="w-8 h-8 text-[#391CAD] dark:text-[#AAADFF]" />
                </motion.div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#2B2449] dark:text-white">
                  Scalable Architecture
                </h3>
              </div>
              <p className="text-[#6E6789] dark:text-gray-300 leading-relaxed">
                Our microservices architecture ensures high availability, fault
                tolerance, and seamless scaling to meet the growing demands of
                emerging markets. Built with cloud-native principles for maximum
                efficiency.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "<100ms", label: "Response Time" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white dark:bg-[#2B2449] rounded-lg shadow-sm border border-[#AAADFF]/20 dark:border-[#391CAD]/20 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="text-2xl font-bold text-[#391CAD] dark:text-[#AAADFF]"
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
                    <div className="text-sm text-[#6E6789] dark:text-gray-300 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="bg-white dark:bg-[#2B2449] rounded-xl p-6 shadow-lg border border-[#AAADFF]/20 dark:border-[#391CAD]/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {[
                    "Load Balancer",
                    "API Gateway",
                    "Microservices",
                    "Database Cluster",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-[#391CAD]/10 dark:bg-[#AAADFF]/10 rounded-lg cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium text-[#2B2449] dark:text-white">
                        {item}
                      </span>
                      <motion.div
                        className="w-3 h-3 bg-[#391CAD] dark:bg-[#AAADFF] rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-16 h-16 bg-[#391CAD] dark:bg-[#AAADFF] rounded-full opacity-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-12 h-12 bg-[#AAADFF] dark:bg-[#391CAD] rounded-full opacity-30"
                animate={{
                  scale: [1.2, 1, 1.2],
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
