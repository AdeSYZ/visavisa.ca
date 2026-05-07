import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(17,28,44,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl md:text-2xl font-black text-primary tracking-tighter" onClick={closeMenu}>
          Legal Advocacy Plus
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors duration-300 ease-in-out hover:text-primary ${
                location.pathname === link.path 
                  ? 'text-primary border-b-2 border-secondary pb-1 font-bold' 
                  : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="bg-gradient-to-b from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-headline font-bold shadow-md hover:shadow-lg transition-all"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-lg font-medium py-2 ${
                    location.pathname === link.path ? 'text-primary font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={closeMenu}
                className="bg-primary text-white text-center py-4 rounded-xl font-headline font-bold mt-4"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
