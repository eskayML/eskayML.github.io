import { Mail, Phone, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-400">
            Let's discuss your AI/ML projects and requirements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:kalusam619@gmail.com"
            className="flex items-center space-x-3 bg-sky-900/20 p-6 rounded-xl border border-sky-500/30 hover:border-sky-500 transition-all"
          >
            <Mail className="h-6 w-6 text-sky-400" />
            <span className="text-gray-300">kalusam619@gmail.com</span>
          </a>
          <a
            href="tel:+2348057912344"
            className="flex items-center space-x-3 bg-sky-900/20 p-6 rounded-xl border border-sky-500/30 hover:border-sky-500 transition-all"
          >
            <Phone className="h-6 w-6 text-sky-400" />
            <span className="text-gray-300">+234 805 791 2344</span>
          </a>
          <a
            href="https://github.com/eskayML"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-sky-900/20 p-6 rounded-xl border border-sky-500/30 hover:border-sky-500 transition-all"
          >
            <Github className="h-6 w-6 text-sky-400" />
            <span className="text-gray-300">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}