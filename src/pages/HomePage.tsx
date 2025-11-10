import { motion } from 'framer-motion';
import { Mail, ExternalLink, Github } from 'lucide-react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Projects />
        <ContactForm />
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">John Doe</h3>
                <p className="text-gray-400">Full Stack Application Developer</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition">About</a></li>
                  <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400 transition">
                    <Github size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2025 John Doe. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
