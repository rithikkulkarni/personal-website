import { motion } from 'motion/react';
import { Github, Linkedin, Youtube, Mail, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/rithikkulkarni/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rithikkulkarni' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@rithikkulkarni' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headshot */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <ImageWithFallback
              src="/images/headshot.jpg"
              alt="Professional headshot"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-xl"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-4 text-foreground"
          >
            Rithik Kulkarni
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Software & Machine Learning Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8"
          >
            Building intelligent systems and elegant solutions that make a difference.
            Passionate about AI, full-stack development, and creating impactful products.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
