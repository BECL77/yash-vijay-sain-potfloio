import { Instagram, Youtube, Linkedin, Mail, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-editor-red" />
            <span className="font-heading font-bold text-3xl">Yash Vijay Sain</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-white/80 mb-4">
              Professional software engineer with expertise in full-stack development, creating efficient and scalable solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-editor-red transition-colors hover:scale-110 transform"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-editor-red transition-colors hover:scale-110 transform"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-editor-red transition-colors hover:scale-110 transform"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@ajaysaini.com" 
                className="hover:text-editor-red transition-colors hover:scale-110 transform"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#about" 
                  className="text-white/80 hover:text-editor-red transition-colors hover:translate-x-1 inline-block transform"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="/#portfolio" 
                  className="text-white/80 hover:text-editor-red transition-colors hover:translate-x-1 inline-block transform"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="/#services" 
                  className="text-white/80 hover:text-editor-red transition-colors hover:translate-x-1 inline-block transform"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  className="text-white/80 hover:text-editor-red transition-colors hover:translate-x-1 inline-block transform"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  className="text-white/80 hover:text-editor-red transition-colors hover:translate-x-1 inline-block transform"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-white/80 mb-2">Email: contact@ajaysaini.com</p>
            <p className="text-white/80 mb-2">Location: Mumbai, India</p>
            <p className="text-white/80">Available for freelance worldwide</p>
            <div className="mt-4">
              <a 
                href="/#contact" 
                className="inline-flex items-center px-4 py-2 bg-editor-red hover:bg-editor-red/90 text-white text-sm font-medium rounded transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">© {currentYear} Ajay Saini. All rights reserved.</p>
          <div className="mt-4 md:mt-0 text-sm text-white/60">
            <a href="/privacy-policy" className="hover:text-white transition-colors mr-6">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
