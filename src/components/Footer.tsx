import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <div className="text-xl font-bold text-primary mb-6">Legal Advocacy Plus</div>
          <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
            Premier immigration consultancy based in Ottawa, Ontario. Regulated by CICC and committed to legal excellence since 1999.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Navigation</p>
            <Link to="/services" className="text-on-surface-variant text-sm hover:underline decoration-secondary underline-offset-4">Services</Link>
            <Link to="/resume" className="text-on-surface-variant text-sm hover:underline decoration-secondary underline-offset-4">About Us</Link>
            <Link to="/contact" className="text-on-surface-variant text-sm hover:underline decoration-secondary underline-offset-4">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Legal</p>
            <a href="#" className="text-on-surface-variant text-sm hover:underline decoration-secondary underline-offset-4">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant text-sm hover:underline decoration-secondary underline-offset-4">Terms of Service</a>
            <a href="https://www.college-ic.ca/" target="_blank" rel="noreferrer" className="text-on-surface-variant text-sm hover:underline decoration-secondary underline-offset-4">CICC Verification</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="text-on-surface-variant text-sm">
          © {new Date().getFullYear()} VisaVisa Immigration Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
