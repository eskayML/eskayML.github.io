import { ExternalLink } from 'lucide-react';

type Project = {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
};

const projectsData: Project[] = [
  {
    image: '/images/diagnosys_logo.png',
    alt: "diagnosys",
    title: "Automated AI Diagnostics & Feedback",
    description: "Deep learning system to detect symptoms of diseases through Q&A (other modalities incoming)",
    link: "https://diagnosys.streamlit.app/"
  },
  {
    image: '/images/project__nurse_nkiru.jpg',
    alt: "nurse nkiru",
    title: "Nurse Nkiru",
    description: "A smart AI powered Chatbot that helps with health related issues.",
    link: "https://hf.co/chat/assistant/65c71c79c7849c5d76d01f6c"
  },
  {
    image: '/images/searchy_logo.png',
    alt: "searchy img",
    title: "Searchy",
    description: "E-commerce search engine using image + text powered recommendations to filter products",
    link: "https://searchy.streamlit.app"
  },
  {
    image: '/images/project__startup_generator.jpg',
    alt: "startup generator",
    title: "Startup Idea Generator",
    description: "Generates innovative startup ideas using AI.",
    link: "https://sk-startup-idea-generator.streamlit.app/"
  },
  {
    image: '/images/project__skyhigh_recommender.jpg',
    alt: "skyhigh project",
    title: "SkyHigh Recommender",
    description: "VSCode Extension that recommends useful code snippets in Python",
    link: "https://github.com/eskayML/skyHigh",
    linkText: "View Source"
  },
  {
    image: '/images/project__image_segmentation.jpg',
    alt: "mask segmentation",
    title: "Automatic Image Segmentation",
    description: "Model that automatically segments identified objects in images",
    link: "https://eskayml-mask-segmentation.hf.space/"
  },
  {
    image: '/images/project__naija_senti.jpg',
    alt: "naijasenti",
    title: "Naija Senti",
    description: "Sentiment analysis model for Nigerian languages (Pidgin, Igbo, Yoruba, Hausa)",
    link: "https://huggingface.co/spaces/eskayML/naija_senti"
  },
  {
    image: '/images/project__nigerian_houses_prediction.jpg',
    alt: "rent image of houses",
    title: "Nigerian House Rent Prediction",
    description: "ML project for predicting dynamic rent prices across different parts of Nigeria",
    link: "https://propertycentreprediction.streamlit.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-400">
            Featured AI/ML projects and applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-sky-900/20 rounded-xl border border-sky-500/30 hover:border-sky-500 transition-all overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}