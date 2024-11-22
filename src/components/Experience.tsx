import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Peepalytics AI',
    role: 'AI/LLM Engineer',
    period: 'Jan 2024 - Sep 2024',
    description: [
      'Integrated predictive analytics and AI-driven insights for B2B HR solutions',
      'Orchestrated Multi Agentic workflows for predicting attrition risks',
      'Utilized Docker and Kubernetes for production deployment',
      'Implemented AWS Athena for data querying'
    ]
  },
  {
    company: 'Cream Nig Ltd',
    role: 'ML Engineer',
    period: 'Feb 2023 - Jan 2024',
    description: [
      'Developed end-to-end ETL pipeline for housing price data',
      'Created intuitive dashboards with Excel and PowerBI',
      'Built automated data collection system with Github Actions',
      'Implemented RAG Pipeline using Langchain'
    ]
  },
  {
    company: 'DataBackedAfrica',
    role: 'Machine Learning Consultant',
    period: 'Dec 2020 - Aug 2022',
    description: [
      'Developed Audio Transcription system for medical use',
      'Implemented NLP models achieving 94% F1 score',
      'Built web application with MongoDB integration'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group bg-sky-900/20 p-8 rounded-xl border border-sky-500/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <div className="flex items-center space-x-2 text-sky-400 mt-1">
                    <Building2 className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}