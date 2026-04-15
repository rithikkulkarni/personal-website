import { Github, Linkedin, Mail, Heart, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/rithikkulkarni/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rithikkulkarni' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@rithikkulkarni' },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground/70 mb-2">
              Let's build something amazing together
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart size={14} className="text-primary fill-primary" /> using React &
              Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {2026} Rithik Kulkarni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
