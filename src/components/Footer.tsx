import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Partnership", href: "#partnership" },
    { name: "Features", href: "#features" },
    { name: "Technology", href: "#tech-stack" },
  ];
  const contactInfo = [
    { icon: Mail, text: "hello@beyul-labs.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "San Francisco, CA" },
  ];
  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
  ];
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 dark:from-gray-950 dark:via-purple-950 dark:to-indigo-950 text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl"
          animate={{ rotate: [0, 360], scale: [1, 1.4, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          {/* Left: Logo, description, socials */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <div className="flex items-center">
              <img
                src="/beyul+labs+box+(orange)3x5.png"
                alt="BeyulLabs"
                className="h-12 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <motion.p
              className="text-white/80 leading-relaxed max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Empowering emerging economies with trusted business solutions that
              drive innovation, growth, and sustainable transformation.
            </motion.p>
            <div className="flex space-x-6 pt-2">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-indigo-400/20 hover:scale-110 transition-all duration-200 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Middle: Quick Links */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-lg text-white/80 hover:text-indigo-200 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Right: Contact Info */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              Contact Info
            </h3>
            <ul className="space-y-5">
              {contactInfo.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 6 }}
                >
                  <span className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-indigo-400/20 transition-colors duration-200 shadow-md">
                    <Icon className="w-6 h-6 text-indigo-200" />
                  </span>
                  <span className="text-white/90 text-lg font-medium">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        {/* Divider */}
        <motion.div
          className="mt-12 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 text-white/60 text-base space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>© 2024 Beyul Labs. All rights reserved.</div>
          <div className="flex space-x-8">
            <a
              href="#"
              className="hover:text-indigo-200 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-indigo-200 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-indigo-200 transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
