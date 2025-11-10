import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const title = 'Mark Daniel';
  const taglineWords = [
    'Building',
    'Scalable',
    'Systems',
    'and',
    'Beautiful',
    'Interfaces',
    '—',
    'where',
    'backend',
    'power',
    'meets',
    'frontend',
    'finesse.',
  ];

  const displayedTitle = useTypewriter(title, 80, 200);
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Particle background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section className={`relative min-h-screen pt-20 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-black'
        : 'bg-gradient-to-b from-slate-50 via-slate-100 to-white'
    }`}>
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-gold-500' : 'bg-gold-600'
            }`}
            style={{ left: `${particle.left}%`, top: '0%' }}
            animate={{ y: '100vh', opacity: [0, 1, 0] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Gradient blobs */}
      <motion.div
        className={`absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl opacity-20 ${
          theme === 'dark' ? 'bg-gold-500' : 'bg-gold-400'
        }`}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className={`absolute -bottom-8 right-10 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl opacity-10 ${
          theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'
        }`}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-gold-500/20 border border-gold-500/50 text-gold-300'
              : 'bg-gold-500/20 border border-gold-500/60 text-gold-700'
          }`}>
            Welcome to Mark Daniel's Portfolio
          </span>
        </motion.div>

        {/* Typewriter title */}
        <motion.h1
          variants={itemVariants}
          className={`text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight h-20 sm:h-24 lg:h-28 flex items-center justify-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          {displayedTitle}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="ml-2 text-gold-400"
          >
            |
          </motion.span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className={`text-xl sm:text-2xl font-semibold mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-gold-400' : 'text-gold-600'
          }`}
        >
          Application Developer & IT Supervisor
        </motion.p>

        {/* Word-by-word tagline */}
        <motion.p
          variants={itemVariants}
          className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {taglineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Tech stack */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {['ASP.NET Core', 'React TypeScript', 'SignalR', 'Microservices', 'Cloud DevOps'].map(
            (tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/60 border border-gold-500/30 text-gold-300 hover:border-gold-500'
                    : 'bg-gray-200/60 border border-gold-500/40 text-gold-700 hover:border-gold-500'
                }`}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 hover:shadow-lg hover:shadow-gold-500/50'
                : 'bg-gradient-to-r from-gold-600 to-gold-500 text-white hover:shadow-lg hover:shadow-gold-600/50'
            }`}
          >
            Let's Connect
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'border-gold-500 text-gold-400 hover:bg-gold-500/10'
                : 'border-gold-600 text-gold-700 hover:bg-gold-500/10'
            }`}
          >
            View My Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className={`${theme === 'dark' ? 'text-gold-500' : 'text-gold-600'}`} size={24} />
      </motion.div>
    </section>
  );
}
