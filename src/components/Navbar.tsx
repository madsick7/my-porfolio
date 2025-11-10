import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 ${
      theme === 'dark'
        ? 'bg-slate-900/80 border-gold-500/20'
        : 'bg-slate-50/80 border-gold-500/30'
    } border-b backdrop-blur-md transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-display font-bold text-gold-400 hover:text-gold-300 transition ${
              theme === 'dark' ? 'text-gold-400' : 'text-gold-600'
            }`}
          >
            Mark Daniel
          </motion.a>

          {/* Desktop menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-gold-400'
                    : 'text-gray-700 hover:text-gold-600'
                } transition font-medium text-sm relative group`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.div>

          {/* Theme toggle + Mobile menu button */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-gold-500/20 text-gold-400 hover:bg-gold-500/30'
                  : 'bg-gold-500/20 text-gold-600 hover:bg-gold-500/30'
              } transition`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  theme === 'dark'
                    ? 'text-gold-400 hover:text-gold-300'
                    : 'text-gold-600 hover:text-gold-700'
                } transition`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden border-t ${
              theme === 'dark'
                ? 'border-gold-500/20 bg-slate-800/50'
                : 'border-gold-500/30 bg-slate-100/50'
            } pb-4 space-y-2 backdrop-blur-sm`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-2 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-gold-400'
                    : 'text-gray-700 hover:text-gold-600'
                } transition font-medium`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
