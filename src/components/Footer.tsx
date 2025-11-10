import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mark@example.com', label: 'Email' },
  ];

  return (
    <footer className={`transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-slate-900 border-gold-500/20'
        : 'bg-slate-100 border-gold-500/30'
    } border-t`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-display font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gold-400' : 'text-gold-600'
            }`}>
              Mark Daniel
            </h3>
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Building enterprise systems and beautiful interfaces with modern technologies. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`text-sm transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-gold-400'
                        : 'text-gray-600 hover:text-gold-600'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gold-500/20 border border-gold-500/40 text-gold-400 hover:bg-gold-500/40 hover:border-gold-500/60'
                        : 'bg-gold-500/30 border border-gold-500/50 text-gold-600 hover:bg-gold-500/50 hover:border-gold-500/70'
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className={`h-px bg-gradient-to-r transition-colors duration-300 mb-8 ${
            theme === 'dark'
              ? 'from-gold-500/0 via-gold-500/30 to-gold-500/0'
              : 'from-gold-500/0 via-gold-500/50 to-gold-500/0'
          }`}
        ></motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className={`text-sm text-center sm:text-left transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            © 2025 Mark Daniel. Crafted with React & Passion.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gold-500/20 border border-gold-500/40 text-gold-400 hover:bg-gold-500/40 hover:border-gold-500/60'
                : 'bg-gold-500/30 border border-gold-500/50 text-gold-600 hover:bg-gold-500/50 hover:border-gold-500/70'
            }`}
          >
            Back to Top
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
