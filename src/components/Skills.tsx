import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

const skillCategories = [
  {
    name: 'Backend',
    skills: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'PostgreSQL', 'RabbitMQ'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Redux', 'Framer Motion', 'HTML/CSS'],
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Real-Time & Messaging',
    skills: ['SignalR', 'WebSockets', 'gRPC', 'Message Brokers', 'Event-Driven Architecture'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'CI/CD Pipelines', 'Terraform'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Architecture',
    skills: ['Microservices', 'SOLID Principles', 'Design Patterns', 'System Design', 'API Design'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Tools & Practices',
    skills: ['Git', 'Azure DevOps', 'Jira', 'Agile/Scrum', 'Code Reviews', 'Testing'],
    color: 'from-cyan-500 to-cyan-600',
  },
];

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
      id="skills"
      ref={ref}
      className={`py-20 sm:py-32 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-slate-900 to-slate-800'
          : 'bg-gradient-to-b from-slate-100 to-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Skills & Expertise
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive toolkit built through years of enterprise development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-gold-500/20 hover:border-gold-500/50'
                    : 'bg-gradient-to-br from-slate-100/60 to-slate-200/60 border border-gold-500/30 hover:border-gold-500/60'
                } backdrop-blur-sm`}
              >
                {/* Category header */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-6`}
                >
                  <span className="text-white font-bold text-lg">
                    {category.name.charAt(0)}
                  </span>
                </motion.div>

                {/* Category name */}
                <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {category.name}
                </h3>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-3 group/item cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gold-500 rounded-full"
                        animate={{ scale: hoveredSkill === skill ? 1.5 : 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      ></motion.div>
                      <span className={`text-sm transition-all duration-300 ${
                        hoveredSkill === skill
                          ? theme === 'dark'
                            ? 'text-gold-400 font-semibold'
                            : 'text-gold-600 font-semibold'
                          : theme === 'dark'
                          ? 'text-gray-300 group-hover/item:text-gold-400'
                          : 'text-gray-700 group-hover/item:text-gold-600'
                      }`}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-gold-500/5 to-transparent'
                      : 'bg-gradient-to-r from-gold-500/10 to-transparent'
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className={`transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            These are just highlights. I'm always learning and adapting to new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
