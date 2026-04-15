import { motion } from 'motion/react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'AI-Powered Code Assistant',
      description:
        'Built an intelligent code completion and refactoring tool using GPT-4 and custom fine-tuned models. Increased developer productivity by 40% in user studies.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      tags: ['Python', 'PyTorch', 'React', 'FastAPI', 'OpenAI'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description:
        'Created a scalable analytics platform processing 1M+ events/day with real-time visualizations, anomaly detection, and predictive insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Computer Vision Object Detector',
      description:
        'Developed a custom object detection model achieving 95% accuracy on specialized industrial datasets using YOLOv8 and transfer learning.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800',
      tags: ['Python', 'PyTorch', 'OpenCV', 'Docker', 'AWS'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Natural Language Processing API',
      description:
        'Built a high-performance NLP API for sentiment analysis, entity recognition, and text classification serving 10K+ requests/minute.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
      tags: ['Python', 'Transformers', 'FastAPI', 'Kubernetes', 'GCP'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Recommendation Engine',
      description:
        'Designed and deployed a collaborative filtering recommendation system improving user engagement by 60% using deep learning techniques.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tags: ['Python', 'TensorFlow', 'Apache Spark', 'MongoDB', 'MLflow'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Blockchain Data Indexer',
      description:
        'Created a high-throughput blockchain indexer and query API processing 100K+ transactions/hour with sub-second query latency.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
      github: '#',
      demo: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in software engineering and machine
            learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                    <Star size={14} />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
