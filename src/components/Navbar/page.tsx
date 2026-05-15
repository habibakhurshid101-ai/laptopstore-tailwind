import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [shopDropdown, setShopDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const defaultTheme = savedTheme ?? 'dark'; // Default to dark mode (blue theme)

    setTheme(defaultTheme);
    if (defaultTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-brand-primary' : 'text-text-secondary';
  };

  const toggleShopDropdown = () => {
    setShopDropdown(!shopDropdown);
    setCompanyDropdown(false);
    setAccountDropdown(false);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdown(!companyDropdown);
    setShopDropdown(false);
    setAccountDropdown(false);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdown(!accountDropdown);
    setShopDropdown(false);
    setCompanyDropdown(false);
  };

  const closeAllDropdowns = () => {
    setShopDropdown(false);
    setCompanyDropdown(false);
    setAccountDropdown(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-bg-main/90 backdrop-blur-md border-b border-border-primary z-[1000] flex items-center justify-between px-6 md:px-12">
      <Link to="/" className="text-2xl font-black tracking-tighter text-text-primary">
        Lap<span className="text-[#1a56db]">Elite</span>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden lg:flex items-center gap-1">
        {/* HOME */}
        <li>
          <Link 
            to="/" 
            onClick={closeAllDropdowns}
            className={`block px-5 py-2 text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-all ${isActive('/')}`}
          >
            Home
          </Link>
        </li>

        {/* SHOP DROPDOWN */}
        <li className="relative dropdown-container">
          <button 
            onClick={toggleShopDropdown}
            className={`flex items-center gap-1 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-all ${shopDropdown ? 'text-brand-primary' : 'text-text-secondary'}`}
          >
            Shop
            <svg className={`w-3 h-3 transition-transform ${shopDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {shopDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-bg-card border border-border-primary rounded-md shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                to="/products"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 Products
              </Link>
              <Link 
                to="/services"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                Services
              </Link>
              {/* <Link 
                to="/cart"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                🛒 Cart
              </Link> */}
            </div>
          )}
        </li>

        {/* COMPANY DROPDOWN */}
        <li className="relative dropdown-container">
          <button 
            onClick={toggleCompanyDropdown}
            className={`flex items-center gap-1 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-all ${companyDropdown ? 'text-brand-primary' : 'text-text-secondary'}`}
          >
            Company
            <svg className={`w-3 h-3 transition-transform ${companyDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {companyDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-bg-card border border-border-primary rounded-md shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                to="/about"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 About Us
              </Link>
              {/* <Link 
                to="/contact"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 Contact
              </Link> */}
              <Link 
                to="/reviews"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 Reviews
              </Link>
            </div>
          )}
        </li>

        {/* ACCOUNT DROPDOWN */}
        <li className="relative dropdown-container">
          <button 
            onClick={toggleAccountDropdown}
            className={`flex items-center gap-1 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-all ${accountDropdown ? 'text-brand-primary' : 'text-text-secondary'}`}
          >
            Account
            <svg className={`w-3 h-3 transition-transform ${accountDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {accountDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-bg-card border border-border-primary rounded-md shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                to="/profile"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 Profile
              </Link>
              <Link 
                to="/dashboard"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 Dashboard
              </Link>
              <Link 
                to="/login"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 Login
              </Link>
              <Link 
                to="/signup"
                onClick={closeAllDropdowns}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
              >
                 Sign Up
              </Link>
            </div>
          )}
        </li>
      </ul>

      {/* MOBILE MENU */}
      <div className={`fixed lg:hidden top-20 left-0 w-full bg-bg-main/95 backdrop-blur-md border-b border-border-primary transition-all duration-300 ${menuOpen ? 'opacity-100 visible max-h-[calc(100vh-5rem)]' : 'opacity-0 invisible max-h-0'} overflow-y-auto`}>
        <div className="p-6 space-y-2">
          <Link 
            to="/" 
            onClick={() => { setMenuOpen(false); closeAllDropdowns(); }}
            className={`block px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white/5 transition-all ${isActive('/')}`}
          >
            🏠 Home
          </Link>

          {/* SHOP SECTION */}
          <div className="space-y-1">
            <button 
              onClick={() => setShopDropdown(!shopDropdown)}
              className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${shopDropdown ? 'bg-brand-primary/10 text-brand-primary' : 'text-text-secondary hover:bg-white/5'}`}
            >
              <span>🛍️ Shop</span>
              <svg className={`w-3 h-3 transition-transform ${shopDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${shopDropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-1 pt-1">
                <Link to="/products" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Products
                </Link>
                <Link to="/services" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Services
                </Link>
                <Link to="/cart" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Cart
                </Link>
              </div>
            </div>
          </div>

          {/* COMPANY SECTION */}
          <div className="space-y-1">
            <button 
              onClick={() => setCompanyDropdown(!companyDropdown)}
              className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${companyDropdown ? 'bg-brand-primary/10 text-brand-primary' : 'text-text-secondary hover:bg-white/5'}`}
            >
              <span>🏢 Company</span>
              <svg className={`w-3 h-3 transition-transform ${companyDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${companyDropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-1 pt-1">
                <Link to="/about" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  About Us
                </Link>
                <Link to="/contact" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Contact
                </Link>
                <Link to="/reviews" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Reviews
                </Link>
              </div>
            </div>
          </div>

          {/* ACCOUNT SECTION */}
          <div className="space-y-1">
            <button 
              onClick={() => setAccountDropdown(!accountDropdown)}
              className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${accountDropdown ? 'bg-brand-primary/10 text-brand-primary' : 'text-text-secondary hover:bg-white/5'}`}
            >
              <span>👤 Account</span>
              <svg className={`w-3 h-3 transition-transform ${accountDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${accountDropdown ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-1 pt-1">
                <Link to="/profile" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Profile
                </Link>
                <Link to="/dashboard" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Dashboard
                </Link>
                <Link to="/login" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Login
                </Link>
                <Link to="/signup" onClick={() => { setMenuOpen(false); closeAllDropdowns(); }} className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-primary hover:bg-white/5 rounded-md transition-all">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-text-primary hover:bg-white/5 rounded-sm transition-all"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <Link to="/cart" className="hidden md:flex relative p-2 text-text-primary hover:bg-white/5 rounded-sm transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">2</span>
        </Link>
        <Link 
          to="/login" 
          className="hidden md:flex px-6 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-sm hover:translate-y-[-1px] transition-all shadow-[0_6px_20px_rgba(26,86,219,0.35)]"
        >
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
