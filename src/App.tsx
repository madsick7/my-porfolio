import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useTheme } from './contexts/ThemeContext';

function AppContent() {
  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ContactForm />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
