import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  companyLogo?: string;
  achievements: string[];
  technologies: string[];
};

function getCompanyInitials(company: string) {
  return company
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: 'Stealth Startup',
      role: 'Machine Learning Engineer',
      period: 'Jan 2026 - Present',
      location: 'Chapel Hill, NC',
      companyLogo: '/images/logos/ss_logo.jpg',
      achievements: [
        'Built and deployed a real-time computer vision posture analysis system delivering live feedback to 100+ active users',
        'Designed a patent-pending scoring algorithm using pose estimation, temporal smoothing, and weighted heuristics',
        'Developed a low-latency streaming pipeline and feature extraction system for future ML model training',
      ],
      technologies: ['Python', 'MediaPipe', 'Next.js', 'TypeScript', 'Computer Vision'],
    },
    {
      company: 'SitSense',
      role: 'Chief Product Officer',
      period: 'May 2025 - Mar 2026',
      location: 'Raleigh, NC',
      companyLogo: '/images/logos/sitsense_logo.jpg',
      achievements: [
        'Built and deployed a real-time computer vision posture analysis system delivering live feedback to 100+ active users',
        'Designed a patent-pending scoring algorithm using pose estimation, temporal smoothing, and weighted heuristics',
        'Developed a low-latency streaming pipeline and feature extraction system for future ML model training',
      ],
      technologies: ['Python', 'MediaPipe', 'Next.js', 'TypeScript', 'Computer Vision'],
    },
    {
      company: 'North Carolina State University',
      role: 'Machine Learning Research Associate',
      period: 'Jan 2025 - May 2025',
      location: 'Raleigh, NC',
      companyLogo: '/images/logos/ncstate_logo.jpg',
      achievements: [
        'Developed a machine learning pipeline to detect student wheelspinning in an AI tutoring system',
        'Implemented an ensemble model that reduced false negative detections by 35%',
        'Processed 2M+ interaction logs to identify early learning stagnation patterns',
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'BKT'],
    },
    {
      company: 'Axtra3D',
      role: 'Data Science Intern',
      period: 'May 2024 - Jul 2024',
      location: 'Charlotte, NC',
      companyLogo: '/images/logos/axtra3d_logo.jpg',
      achievements: [
        'Developed an automated lead scoring and qualification pipeline reducing manual sales workload by 30%',
        'Built data enrichment workflows integrating external APIs to rank and prioritize high-quality leads',
      ],
      technologies: ['Python', 'n8n', 'Relevance AI', 'APIs', 'Automation'],
    },
    {
      company: 'Syntelli Solutions',
      role: 'Software Engineer Intern',
      period: 'Apr 2022 - May 2022',
      location: 'Charlotte, NC',
      companyLogo: '/images/logos/syntellisolutions_logo.jpg',
      achievements: [
        'Designed and iterated on UI components for an enterprise workflow application in an agile environment',
        'Conducted usability testing to guide design decisions, increasing System Usability Score from 62 to 79',
        'Collaborated with developers to contribute pull requests for frontend improvements',
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'UI/UX Design', 'Usability Testing', 'Agile'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative w-14 h-14 rounded-lg border border-border bg-card overflow-hidden shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground/80">
                      {getCompanyInitials(exp.company)}
                    </div>
                    {exp.companyLogo && (
                      <img
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        className="relative z-10 w-full h-full object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl text-foreground mb-1">{exp.role}</h3>
                    <p className="text-xl text-primary">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:text-right md:ml-6">
                  <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="flex items-center gap-2 text-foreground mb-3">
                  <Briefcase size={18} />
                  Key Achievements
                </h4>
                <ul className="space-y-2 list-disc pl-6 marker:text-primary">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-foreground/70">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full text-sm"
                  >
                    {tech}
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
