import { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Services', path: '/#services' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/4689be72-b857-4bf0-ac74-a16cb716f54b.png"
              alt="YVS Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="nav-link">
                {link.name}
              </a>
            ))}
            <a 
              href="/#contact" 
              className="ml-4 px-4 py-2 bg-editor-red hover:bg-editor-red/90 text-white rounded-md text-sm font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <button 
            className="md:hidden p-2 rounded-md text-foreground" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path}
                  className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#contact"
                className="py-3 px-4 bg-editor-red hover:bg-editor-red/90 text-white rounded-md text-center font-medium mt-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
