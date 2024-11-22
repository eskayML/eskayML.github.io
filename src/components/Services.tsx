import { Brain, Cpu, MessageSquare, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Custom LLM Development',
    description: 'Tailored language models designed specifically for your business needs and industry requirements.'
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Advanced chatbots and virtual assistants that provide natural, context-aware interactions.'
  },
  {
    icon: Shield,
    title: 'AI Security & Ethics',
    description: 'Implementing robust security measures and ethical AI practices in all our solutions.'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Seamless integration of AI capabilities into your existing systems and workflows.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive AI solutions tailored to your needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-sky-900/20 p-6 rounded-xl border border-sky-500/30 hover:border-sky-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <service.icon className="h-12 w-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}