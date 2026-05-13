import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-bg-main border-t border-border-primary pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter text-text-primary">
            Lap<span className="text-brand-primary">Elite</span>
          </Link>
          <p className="text-text-muted text-xs leading-relaxed max-w-xs uppercase tracking-widest font-medium">
            Pakistan's premium laptop & tech store since 2019. Providing genuine hardware with world-class support.
          </p>
          <div className="flex gap-4">
            {['𝕏', 'in', '📘', '📸'].map((icon, i) => (
              <a key={i} href="#" className="w-9 h-9 flex items-center justify-center bg-white/5 border border-border-primary rounded-sm hover:bg-brand-primary hover:border-brand-primary transition-all text-sm">
                {icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">Products</h2>
          <div className="flex flex-col gap-3 text-[10px] font-bold text-text-muted uppercase tracking-widest">
            {['Laptops', 'Desktops', 'Workstations', 'Gaming', 'Accessories'].map(l => (
              <Link key={l} to="/products" className="hover:text-brand-primary transition-colors">{l}</Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">Services</h2>
          <div className="flex flex-col gap-3 text-[10px] font-bold text-text-muted uppercase tracking-widest">
            {['Warranty Plans', 'Repair Service', 'Cloud Backup', 'IT Consulting'].map(l => (
              <Link key={l} to="/services" className="hover:text-brand-primary transition-colors">{l}</Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">Company</h2>
          <div className="flex flex-col gap-3 text-[10px] font-bold text-text-muted uppercase tracking-widest">
            <Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
            <a href="#" className="hover:text-brand-primary transition-colors">Careers</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Press</a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">Support</h2>
          <div className="flex flex-col gap-3 text-[10px] font-bold text-text-muted uppercase tracking-widest">
            <a href="#" className="hover:text-brand-primary transition-colors">Drivers & Downloads</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Warranty Check</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Track Order</a>
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-[9px] font-bold text-text-muted uppercase tracking-[0.2em]">
          &copy; 2026 LapElite Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-[9px] font-bold text-text-muted uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Terms of Sale</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
