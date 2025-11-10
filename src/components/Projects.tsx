import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';
import projectsData from '../data/project.json';

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  year: string;
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { theme } = useTheme();

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
      id="projects"
      ref={ref}
      className={`py-20 sm:py-32 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-slate-900 to-slate-800'
          : 'bg-gradient-to-b from-slate-50 to-slate-100'
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
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A selection of enterprise applications and systems I've architected and delivered
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project: ProjectCard) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-2xl p-8 overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-gold-500/20 hover:border-gold-500/50'
                    : 'bg-gradient-to-br from-slate-100/80 to-slate-200/80 border border-gold-500/30 hover:border-gold-500/60'
                }`}
              >
                {/* Hover glow */}
                {hoveredId === project.id && (
                  <motion.div
                    layoutId="cardGlow"
                    className={`absolute inset-0 transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-gold-500/10 to-transparent'
                        : 'bg-gradient-to-r from-gold-500/5 to-transparent'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className="relative flex flex-col h-full">
                  {/* Year badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gold-500/20 border border-gold-500/40 text-gold-300'
                        : 'bg-gold-500/30 border border-gold-500/50 text-gold-700'
                    }`}
                  >
                    {project.year}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-6 flex-grow transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    animate={{ opacity: hoveredId === project.id ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-gold-500/10 border border-gold-500/30 text-gold-300'
                            : 'bg-gold-500/15 border border-gold-500/40 text-gold-700'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-gold-500/10 border border-gold-500/30 text-gold-300'
                          : 'bg-gold-500/15 border border-gold-500/40 text-gold-700'
                      }`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </motion.div>

                  {/* Hover reveal */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-3 pt-6 transition-colors duration-300 ${
                      theme === 'dark' ? 'border-t border-gold-500/20' : 'border-t border-gold-500/30'
                    }`}
                  >
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-gold-400 hover:text-gold-300'
                          : 'text-gold-600 hover:text-gold-700'
                      }`}
                    >
                      <ExternalLink size={16} />
                      View Details
                    </motion.button>
                    <motion.div animate={{ x: hoveredId === project.id ? 5 : 0 }}>
                      <ArrowRight className={`${theme === 'dark' ? 'text-gold-400' : 'text-gold-600'}`} size={20} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-3 px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'border-gold-500 text-gold-400 hover:bg-gold-500/10'
                : 'border-gold-600 text-gold-700 hover:bg-gold-500/10'
            }`}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
