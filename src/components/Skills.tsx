import { Code2, Database, Cloud, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn']
  },
  {
    icon: Brain,
    title: 'AI/ML',
    skills: ['Huggingface Transformers', 'Langchain', 'LlamaIndex', 'OpenAI Agents']
  },
  {
    icon: Database,
    title: 'Backend',
    skills: ['Flask', 'FastAPI', 'MongoDB', 'ETL Pipelines']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-sky-900/20 p-6 rounded-xl border border-sky-500/30">
              <category.icon className="h-8 w-8 text-sky-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}