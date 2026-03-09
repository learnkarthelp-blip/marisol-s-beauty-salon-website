import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="text-2xl md:text-3xl font-serif font-bold text-charcoal hover:text-rosegold transition-colors"
          >
            Marisol's Beauty Salon
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 lg:px-4 py-2 text-base lg:text-lg text-charcoal hover:text-rosegold font-medium transition-colors min-h-[44px] min-w-[44px]"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:7472798532"
              className="ml-2 lg:ml-4"
            >
              <Button
                size="default"
                className="bg-rosegold hover:bg-rosegold-dark text-white font-medium min-h-[44px] text-base lg:text-lg px-4 lg:px-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-charcoal hover:text-rosegold transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-cream shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-lg text-charcoal hover:bg-cream hover:text-rosegold font-medium transition-colors rounded-lg min-h-[44px]"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:7472798532"
              className="block w-full"
            >
              <Button
                size="lg"
                className="w-full bg-rosegold hover:bg-rosegold-dark text-white font-medium min-h-[44px] text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (747) 279-8532
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
