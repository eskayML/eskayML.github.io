import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-sky-900 opacity-90" />
      <div className="absolute inset-0">
        <div className="h-full w-full" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Samuel Kalu
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
              AI/ML Engineer
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Machine Learning Engineer with 4 years of experience building and optimizing models for real-world applications. Specializing in Python, TensorFlow, PyTorch, and MLOps.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://github.com/eskayML"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-colors"
            >
              GitHub
              <Github className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://huggingface.co/eskayML"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-sky-400 text-base font-medium rounded-lg text-sky-400 hover:bg-sky-400/10 transition-colors"
            >
              HuggingFace
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}