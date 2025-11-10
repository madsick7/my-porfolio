import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

const experiences = [
  {
    title: 'IT Supervisor',
    company: 'Golden Topper',
    duration: '2021 - Present',
    duration_years: '3.5 years',
    description:
      'Leading technical teams and overseeing enterprise system architecture. Responsible for infrastructure management, process improvements, and mentoring junior developers.',
    highlights: [
      'Managed 15+ developers across multiple projects',
      'Architected microservices migration saving 40% operational costs',
      'Implemented DevOps pipeline reducing deployment time from 2h to 15m',
      'Established code review and quality standards improving code quality by 35%',
    ],
  },
  {
    title: 'Senior Application Developer',
    company: 'Golden Topper',
    duration: '2023 - 2024',
    duration_years: '1+ year',
    description:
      'Developed enterprise applications using ASP.NET Core and React. Led architecture design and technical decision-making.',
    highlights: [
      'Built real-time dashboard processing 1000+ data points/second',
      'Designed FAQ system serving 10,000+ concurrent users',
      'Led team of 8 developers on multiple concurrent projects',
      'Mentored 3 junior developers',
    ],
  },
  {
    title: 'Application Developer',
    company: 'Golden Topper',
    duration: '2020 - 2023',
    duration_years: '3 years',
    description:
      'Full-stack development of web applications. Worked on reverse engineering legacy systems and modernizing infrastructure.',
    highlights: [
      'Reverse-engineered and modernized legacy ERP system',
      'Developed inventory and HRIS system for 500+ employees',
      'Implemented SignalR for real-time features',
      'Improved system performance by 40%',
    ],
  },
];

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className={`py-20 sm:py-32 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-100/50'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-display font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Experience
          </h2>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            3+ years of building enterprise systems at Golden Topper
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-gold-500 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={isVisible ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                ></motion.div>
              )}

              {/* Main card */}
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.3 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-gold-500 to-gold-400 shadow-gold-500/50'
                        : 'bg-gradient-to-r from-gold-600 to-gold-500 shadow-gold-600/50'
                    }`}
                  >
                    {index === 0 ? <Briefcase size={24} /> : <Award size={24} />}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`rounded-2xl p-6 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-gold-500/30 hover:border-gold-500/60'
                        : 'bg-gradient-to-br from-slate-100/80 to-slate-200/80 border border-gold-500/40 hover:border-gold-500/70'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                          {exp.title}
                        </h3>
                        <p className={`font-semibold transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gold-400' : 'text-gold-600'
                        }`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-gold-500/20 border border-gold-500/40 text-gold-300'
                              : 'bg-gold-500/30 border border-gold-500/50 text-gold-700'
                          }`}
                        >
                          {exp.duration}
                        </motion.span>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300'
                              : 'bg-blue-500/30 border border-blue-500/50 text-blue-700'
                          }`}
                        >
                          {exp.duration_years}
                        </motion.span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <p className={`text-sm font-semibold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Key Achievements:
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4 }}
                            className={`flex items-start gap-3 text-sm transition-colors duration-300 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            ></motion.span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-16 pt-12 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-gold-500/20' : 'border-gold-500/30'
          } text-center`}
        >
          <p className={`transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Continuously evolving and staying updated with industry best practices
          </p>
        </motion.div>
      </div>
    </section>
  );
}
