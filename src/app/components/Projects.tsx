import { motion } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink, Star, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';

export function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    featured: boolean;
    githubLabel?: string;
    isPaperLink?: boolean;
  };

  // const projects = [
  //   {
  //     title: 'AI-Powered Code Assistant',
  //     description:
  //       'Built an intelligent code completion and refactoring tool using GPT-4 and custom fine-tuned models. Increased developer productivity by 40% in user studies.',
  //     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  //     tags: ['Python', 'PyTorch', 'React', 'FastAPI', 'OpenAI'],
  //     github: '#',
  //     demo: '#',
  //     featured: true,
  //   },
  //   {
  //     title: 'Real-Time Analytics Dashboard',
  //     description:
  //       'Created a scalable analytics platform processing 1M+ events/day with real-time visualizations, anomaly detection, and predictive insights.',
  //     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  //     tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
  //     github: '#',
  //     demo: '#',
  //     featured: true,
  //   },
  //   {
  //     title: 'Computer Vision Object Detector',
  //     description:
  //       'Developed a custom object detection model achieving 95% accuracy on specialized industrial datasets using YOLOv8 and transfer learning.',
  //     image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800',
  //     tags: ['Python', 'PyTorch', 'OpenCV', 'Docker', 'AWS'],
  //     github: '#',
  //     demo: '#',
  //     featured: true,
  //   },
  //   {
  //     title: 'Natural Language Processing API',
  //     description:
  //       'Built a high-performance NLP API for sentiment analysis, entity recognition, and text classification serving 10K+ requests/minute.',
  //     image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
  //     tags: ['Python', 'Transformers', 'FastAPI', 'Kubernetes', 'GCP'],
  //     github: '#',
  //     demo: '#',
  //     featured: false,
  //   },
  //   {
  //     title: 'Recommendation Engine',
  //     description:
  //       'Designed and deployed a collaborative filtering recommendation system improving user engagement by 60% using deep learning techniques.',
  //     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  //     tags: ['Python', 'TensorFlow', 'Apache Spark', 'MongoDB', 'MLflow'],
  //     github: '#',
  //     demo: '#',
  //     featured: false,
  //   },
  //   {
  //     title: 'Blockchain Data Indexer',
  //     description:
  //       'Created a high-throughput blockchain indexer and query API processing 100K+ transactions/hour with sub-second query latency.',
  //     image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
  //     tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
  //     github: '#',
  //     demo: '#',
  //     featured: false,
  //   },
  // ];

  const projects: Project[] = [
  {
    title: 'CacheForge (LLM Research)',
    description:
      'Explored LLM-driven optimization strategies for CPU cache systems using a novel multi-agent framework where larger models guide smaller ones to improve policy performance.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Python', 'PyTorch', 'LLMs', 'Systems', 'Research'],
    github: '/CacheForge_Paper.pdf',
    githubLabel: 'Paper',
    isPaperLink: true,
    demo: '#',
    featured: true,
  },
  {
    title: 'Food Finder',
    description:
      'A group decision-making web app with a versus-style interface for choosing restaurants. Built full-stack system with real-time voting and location-based search.',
    image: 'https://images.unsplash.com/photo-1651440204296-a79fa9988007?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'APIs'],
    github: 'https://github.com/rithikkulkarni/csc-510-proj-2',
    demo: '#',
    featured: true,
  },
  {
    title: 'Content Insights',
    description:
      'An ML-powered web tool that analyzes YouTube videos pre-publication using visual and textual features. Trained models on 150K+ videos and deployed a FastAPI backend for real-time feedback.',
    image: 'https://images.unsplash.com/photo-1686061592315-af9342dc8d74?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Python', 'FastAPI', 'PyTorch', 'OpenCV', 'scikit-learn'],
    github: 'tbd',
    demo: '#',
    featured: true,
  }
];

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

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
                <div className="relative mb-4">
                  <p className="text-foreground/70 line-clamp-3">{project.description}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedProjectIndex(index)}
                    className="absolute right-0 bottom-0 bg-card/95 pl-2 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    More
                  </button>
                </div>

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
                  {project.github?.trim().toLowerCase() === 'tbd' ? (
                    <div className="flex items-center gap-2 text-foreground/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground border border-border">
                        <Github size={16} />
                      </span>
                      <span className="text-sm">Code unavailable (undergoing development)</span>
                    </div>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-orange-300 bg-orange-200/70 text-orange-700 transition-colors hover:bg-orange-300/80 hover:text-orange-800">
                        {project.isPaperLink ? <FileText size={16} /> : <Github size={16} />}
                      </span>
                      <span className="text-sm">{project.githubLabel ?? 'Code'}</span>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-orange-300 bg-orange-200/70 text-orange-700 transition-colors hover:bg-orange-300/80 hover:text-orange-800">
                        <ExternalLink size={16} />
                      </span>
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedProjectIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProjectIndex(null);
        }}
      >
        <DialogContent className="max-w-3xl w-[min(92vw,900px)] p-0 overflow-hidden [&>[data-slot=dialog-close]]:left-4 [&>[data-slot=dialog-close]]:right-auto [&>[data-slot=dialog-close]]:rounded-md [&>[data-slot=dialog-close]]:border [&>[data-slot=dialog-close]]:border-red-700 [&>[data-slot=dialog-close]]:bg-red-600 [&>[data-slot=dialog-close]]:text-white [&>[data-slot=dialog-close]]:opacity-100 [&>[data-slot=dialog-close]]:cursor-pointer [&>[data-slot=dialog-close]]:hover:bg-red-600/80 [&>[data-slot=dialog-close]]:hover:opacity-100 [&>[data-slot=dialog-close]]:data-[state=open]:bg-red-600">
          {selectedProject && (
            <div className="bg-card">
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {selectedProject.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                    <Star size={14} />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <DialogTitle className="text-2xl mb-3 text-foreground pr-8">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-foreground/80 leading-relaxed mb-6">
                  {selectedProject.description}
                </DialogDescription>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {selectedProject.github?.trim().toLowerCase() === 'tbd' ? (
                    <div className="flex items-center gap-2 text-foreground/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground border border-border">
                        <Github size={16} />
                      </span>
                      <span className="text-sm">Code unavailable (undergoing development)</span>
                    </div>
                  ) : (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-orange-300 bg-orange-200/70 text-orange-700 transition-colors hover:bg-orange-300/80 hover:text-orange-800">
                        {selectedProject.isPaperLink ? <FileText size={16} /> : <Github size={16} />}
                      </span>
                      <span className="text-sm">{selectedProject.githubLabel ?? 'Code'}</span>
                    </a>
                  )}
                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-orange-300 bg-orange-200/70 text-orange-700 transition-colors hover:bg-orange-300/80 hover:text-orange-800">
                        <ExternalLink size={16} />
                      </span>
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
