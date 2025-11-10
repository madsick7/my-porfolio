import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

export default function ContactForm() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  const { theme } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Validate
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setMessage('All fields are required');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Simulate submission
    setTimeout(() => {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      setStatus('success');
      setMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 sm:py-32 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-100/50'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl sm:text-5xl font-display font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Get In Touch
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Have a project or opportunity? Let's connect and discuss how we can work together.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-6"></div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            <motion.a
              variants={itemVariants}
              href="mailto:mark@example.com"
              whileHover={{ y: -4, scale: 1.02 }}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gold-500/10 to-slate-800/50 border border-gold-500/30 hover:border-gold-500/60'
                  : 'bg-gradient-to-br from-gold-500/15 to-slate-200/50 border border-gold-500/40 hover:border-gold-500/70'
              }`}
            >
              <Mail className={`${theme === 'dark' ? 'text-gold-500' : 'text-gold-600'}`} size={24} />
              <div>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Email
                </p>
                <p className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  mark@example.com
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gold-500/10 to-slate-800/50 border border-gold-500/30 hover:border-gold-500/60'
                  : 'bg-gradient-to-br from-gold-500/15 to-slate-200/50 border border-gold-500/40 hover:border-gold-500/70'
              }`}
            >
              <Linkedin className={`${theme === 'dark' ? 'text-gold-500' : 'text-gold-600'}`} size={24} />
              <div>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  LinkedIn
                </p>
                <p className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Mark Daniel
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gold-500/10 to-slate-800/50 border border-gold-500/30 hover:border-gold-500/60'
                  : 'bg-gradient-to-br from-gold-500/15 to-slate-200/50 border border-gold-500/40 hover:border-gold-500/70'
              }`}
            >
              <Github className={`${theme === 'dark' ? 'text-gold-500' : 'text-gold-600'}`} size={24} />
              <div>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  GitHub
                </p>
                <p className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  @markdaniel
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border border-gold-500/20 text-white placeholder-gray-500 focus:border-gold-500'
                    : 'bg-slate-200/50 border border-gold-500/30 text-slate-900 placeholder-gray-600 focus:border-gold-500'
                }`}
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border border-gold-500/20 text-white placeholder-gray-500 focus:border-gold-500'
                    : 'bg-slate-200/50 border border-gold-500/30 text-slate-900 placeholder-gray-600 focus:border-gold-500'
                }`}
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Subject
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border border-gold-500/20 text-white placeholder-gray-500 focus:border-gold-500'
                    : 'bg-slate-200/50 border border-gold-500/30 text-slate-900 placeholder-gray-600 focus:border-gold-500'
                }`}
                placeholder="Project inquiry"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 resize-none ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border border-gold-500/20 text-white placeholder-gray-500 focus:border-gold-500'
                    : 'bg-slate-200/50 border border-gold-500/30 text-slate-900 placeholder-gray-600 focus:border-gold-500'
                }`}
                placeholder="Tell me about your project or opportunity..."
              />
            </motion.div>

            {/* Status messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-green-500/20 border border-green-500/50'
                    : 'bg-green-500/20 border border-green-500/60'
                }`}
              >
                <CheckCircle className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} size={20} />
                <p className={`${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>{message}</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-red-500/20 border border-red-500/50'
                    : 'bg-red-500/20 border border-red-500/60'
                }`}
              >
                <AlertCircle className={`${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} size={20} />
                <p className={`${theme === 'dark' ? 'text-red-400' : 'text-red-700'}`}>{message}</p>
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 hover:shadow-lg hover:shadow-gold-500/50'
                    : 'bg-gradient-to-r from-gold-600 to-gold-500 text-white hover:shadow-lg hover:shadow-gold-600/50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
