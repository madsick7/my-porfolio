import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Project as ProjectType } from '../types';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const MOCK_PROJECTS: ProjectType[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with payment integration',
    shortDescription: 'Online shopping platform with Stripe payments',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
    details: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, and secure payment processing with Stripe integration.',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    shortDescription: 'Team collaboration and task tracking',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
    details: 'A real-time task management application that allows teams to collaborate, assign tasks, track progress, and communicate within the platform.',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard for business analytics',
    shortDescription: 'Business intelligence and analytics tool',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    sourceUrl: '#',
    details: 'An interactive analytics dashboard that visualizes complex business data with charts, graphs, and real-time metrics.',
  },
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = MOCK_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">{project.details}</p>
          </div>

          <div className="flex gap-4 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Responsive design optimized for all devices</li>
              <li>Modern UI with smooth animations</li>
              <li>Type-safe development with TypeScript</li>
              <li>Scalable architecture for future enhancements</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
