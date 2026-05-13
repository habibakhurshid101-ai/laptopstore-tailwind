import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-brand-primary' : 'text-text-secondary';
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-bg-main/90 backdrop-blur-md border-b border-border-primary z-[1000] flex items-center justify-between px-6 md:px-12">
      <Link to="/" className="text-2xl font-black tracking-tighter text-text-primary">
        Lap<span className="text-brand-primary">Elite</span>
      </Link>

      <ul className={`fixed lg:static top-20 left-0 w-full lg:w-auto bg-bg-main lg:bg-transparent flex flex-col lg:flex-row items-center gap-1 p-6 lg:p-0 border-b lg:border-none border-border-primary transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/products', label: 'Products' },
          { path: '/services', label: 'Services' },
          { path: '/about', label: 'About' },
          { path: '/contact', label: 'Contact' },
          { path: '/dashboard', label: 'Dashboard' },
        ].map((link) => (
          <li key={link.path} className="w-full lg:w-auto text-center">
            <Link 
              to={link.path} 
              onClick={() => setMenuOpen(false)}
              className={`block px-5 py-2 text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-all ${isActive(link.path)}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link to="/login" className="hidden md:flex px-6 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-sm hover:translate-y-[-1px] transition-all shadow-[0_6px_20px_rgba(26,86,219,0.35)]">
          LOGIN
        </Link>
        <button
          className="lg:hidden p-2 text-text-primary hover:bg-white/5 rounded-sm transition-all"
          onClick={toggleMenu}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
