import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code2, Users, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

const Counter = ({ target, label, icon: Icon }: { target: number; label: string; icon: any }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + Math.ceil(target / 50);
        }
        return target;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="flex justify-center mb-3">
        <Icon className="text-gold-500" size={32} />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-gold-400 mb-2">
        {count}+
      </div>
      <p className="text-gray-400 text-sm sm:text-base">{label}</p>
    </motion.div>
  );
};

export default function About() {
  const { theme } = useTheme();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      id="about"
      ref={ref}
      className={`py-20 sm:py-32 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-100/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-display font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              About Me
            </h2>
            <motion.div
              className={`w-20 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto transition-colors duration-300`}
              initial={{ width: 0 }}
              animate={isVisible ? { width: 80 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div variants={itemVariants}>
              <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm an Application Developer and IT Supervisor with over 3 years of experience in building enterprise systems using ASP.NET, React, and modern DevOps practices. I specialize in scalable, secure, and real-time applications powered by SignalR and microservice architecture.
              </p>
              <p className={`text-base leading-relaxed mb-8 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                My journey in tech has been marked by a passion for solving complex problems and mentoring talented teams. From reverse-engineering legacy systems to architecting cloud-native solutions, I bring both technical depth and strategic vision to every project.
              </p>

              {/* Skills highlights */}
              <motion.div
                variants={containerVariants}
                className="space-y-4"
              >
                {[
                  'Enterprise System Architecture',
                  'Real-Time Application Development',
                  'DevOps & Cloud Infrastructure',
                  'Team Leadership & Mentoring',
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      className="w-2 h-2 bg-gold-500 rounded-full group-hover:scale-150"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    ></motion.div>
                    <span className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300 group-hover:text-gold-400' : 'text-gray-700 group-hover:text-gold-600'
                    }`}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-75 blur transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-gold-500 to-gold-400'
                      : 'bg-gradient-to-r from-gold-600 to-gold-500'
                  }`}
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className={`relative rounded-2xl p-8 backdrop-blur-sm transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gold-500/20 to-slate-700 border border-gold-500/50'
                    : 'bg-gradient-to-br from-gold-500/20 to-slate-300 border border-gold-500/60'
                }`}>
                  <div className={`aspect-square rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gold-400/10 to-slate-800'
                      : 'bg-gradient-to-br from-gold-400/20 to-slate-200'
                  }`}>
                    <Code2 className={`${theme === 'dark' ? 'text-gold-500/50' : 'text-gold-600/50'}`} size={100} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-20 border-t transition-colors duration-300 ${
              theme === 'dark' ? 'border-gold-500/20' : 'border-gold-500/30'
            }`}
          >
            <Counter target={3} label="Years Experience" icon={Zap} />
            <Counter target={20} label="Projects Delivered" icon={Code2} />
            <Counter target={50} label="Systems Managed" icon={Users} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
