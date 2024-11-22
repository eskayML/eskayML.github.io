import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-black border-t border-sky-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Samuel Kalu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}