import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Brain,
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  Workflow,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'TypeScript', 'C++', 'JavaScript', 'Java', 'C', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'ML/AI',
      icon: Brain,
      skills: ['PyTorch', 'TensorFlow', 'LLMs', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision'],
    },
    {
      title: 'Web Development',
      icon: Layers,
      skills: ['React', 'Next.js', 'Node.js', 'HTML/CSS', 'UI Design', 'Supabase'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'Neon', 'PLpgSQL', 'Data Modeling', 'Schemas'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'CI/CD', 'Render', 'Vercel', 'GitHub Actions'],
    },
    {
      title: 'Data Science',
      icon: Cpu,
      skills: ['Pandas', 'NumPy', 'Jupyter', 'NLTK', 'EDA', 'Modeling'],
    },
    {
      title: 'Tools & Workflows',
      icon: Workflow,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Agile', 'Figma'],
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'GitLab', 'CI/CD Pipelines', 'Code Review'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building cutting-edge software and AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <category.icon size={20} />
                </div>
                <h3 className="text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
