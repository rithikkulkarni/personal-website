import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const THEME_STORAGE_KEY = 'portfolio-theme';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((currentValue) => {
      const nextValue = !currentValue;
      document.documentElement.classList.toggle('dark', nextValue);
      localStorage.setItem(THEME_STORAGE_KEY, nextValue ? 'dark' : 'light');
      return nextValue;
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to olive dark mode'}
              aria-pressed={isDarkMode}
              className="group inline-flex h-9 w-16 items-center rounded-full border border-border bg-secondary/70 p-1 text-foreground shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer"
            >
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                {isDarkMode ? <Moon size={15} /> : <Sun size={15} />}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to olive dark mode'}
              aria-pressed={isDarkMode}
              className="inline-flex h-9 w-16 items-center rounded-full border border-border bg-secondary/70 p-1 text-foreground shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer"
            >
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                {isDarkMode ? <Moon size={15} /> : <Sun size={15} />}
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
