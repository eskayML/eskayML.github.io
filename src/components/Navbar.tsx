import { Menu, X, Brain } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-sky-500" />
              <span className="text-white font-bold text-xl">eskayML</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Featured Projects</a>
              {/* <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Experience</a> */}
              <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Skills</a>
              <a href="#contact" className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white block px-3 py-2">Featured Projects</a>
            {/* <a href="#experience" className="text-gray-300 hover:text-white block px-3 py-2">Experience</a> */}
            <a href="#skills" className="text-gray-300 hover:text-white block px-3 py-2">Skills</a>
            <a href="#contact" className="bg-sky-600 text-white block px-3 py-2 rounded-lg">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}