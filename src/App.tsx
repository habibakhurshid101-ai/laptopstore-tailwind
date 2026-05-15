import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Products from './pages/Products/page';
import About from './pages/About/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Services from './pages/Services/page';
import Contact from './pages/Contact/page';
import Cart from './pages/Cart/page';
import Reviews from './pages/Reviews/page';
import Profile from './pages/Profile/page';

// Home Component (inline)
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <div className="bg-bg-main text-text-primary">
      {/* HERO */}
      <section className="pt-32 pb-24 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <span className="badge">
            ✦ New 2026 Collection — Just Arrived
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Laptops Built for <span className="text-gradient">Achievers</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
            Discover Pakistan's finest selection of premium laptops, workstations, and
            accessories. Engineered for speed, built for durability — delivered to your door.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              className="lg-button"
              onClick={() => navigate('/products')}
            >
              Shop Now →
            </button>
            <button className="lg-button border-button">
              Compare Models
            </button>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-text-muted font-medium">
            <div className="flex items-center gap-2">
              <span className="text-brand-accent text-lg">✓</span> Free Shipping Over Rs.50,000
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-accent text-lg">✓</span> 2-Year Warranty
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-accent text-lg">✓</span> 24/7 Support
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-primary/20 blur-[100px] rounded-full group-hover:bg-brand-primary/30 transition-all duration-700"></div>
            <img 
              src="/img1.avif" 
              alt="LapElite Premium Laptop" 
              className="relative w-full max-w-[520px] drop-shadow-2xl transition-transform duration-700 hover:scale-105 hero-image-float"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto reveal">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <p className="text-text-secondary text-lg">Find the perfect machine for your needs</p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            { img: '/img2.png', label: 'Laptops', price: 'Rs.55,000' },
            { img: '/img3.png', label: 'Desktops', price: 'Rs.80,000' },
            { img: '/img4.png', label: 'Workstations', price: 'Rs.150,000' },
            { img: '/img5.png', label: 'Accessories', price: 'Rs.2,500' },
            { img: '/img6.png', label: 'Gaming', price: 'Rs.120,000' },
            { img: '/img7.png', label: 'Support Plans', price: 'Rs.5,000/yr', link: '/services' },
          ].map((cat, i) => (
            <div 
              key={i} 
              className="w-[180px] p-6 bg-bg-card border border-border-primary rounded-md hover:border-brand-primary transition-all duration-300 cursor-pointer text-center group"
              onClick={() => cat.link && navigate(cat.link)}
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img src={cat.img} alt={cat.label} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-text-primary group-hover:text-brand-primary transition-colors">{cat.label}</h4>
                <p className="text-[11px] text-text-muted uppercase tracking-widest font-bold">From {cat.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto reveal bg-bg-card border-y border-border-muted">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold">Featured Laptops</h2>
          <p className="text-text-secondary text-lg">Top-rated machines engineered for excellence</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { img: '/img8.png', name: 'Dell XPS 15', specs: 'Intel Core i7-13700H · 16GB RAM · 512GB NVMe SSD', price: 'Rs. 289,000', badge: 'Bestseller', grad: 'blue', color: 'green' },
            { img: '/img9.png', name: 'HP Spectre x360', specs: 'Intel Core i9 · 32GB RAM · 1TB NVMe SSD', price: 'Rs. 349,000', badge: 'Pro', grad: 'purple', color: 'purple' },
            { img: '/img10.png', name: 'Lenovo ThinkPad X1', specs: 'AMD Ryzen 9 · 32GB RAM · 1TB SSD · 4K OLED', price: 'Rs. 420,000', badge: 'New', grad: 'sky', color: 'sky' },
            { img: '/img11.png', name: 'ASUS ROG Zephyrus', specs: 'AMD Ryzen 9 · RTX 4080 · 32GB RAM · 2TB SSD', price: 'Rs. 520,000', badge: 'Sale', grad: 'green', color: 'red' },
          ].map((prod, i) => (
            <div key={i} className="standard-card !w-[300px]">
              <div className={`relative h-[220px] p-8 flex items-center justify-center bg-radial-gradient`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_var(--grad-color),_transparent)]" style={{ '--grad-color': prod.grad === 'blue' ? '#1a56db' : prod.grad === 'purple' ? '#7c3aed' : prod.grad === 'sky' ? '#0ea5e9' : '#06d6a0' } as React.CSSProperties}></div>
                <img src={prod.img} alt={prod.name} className="relative z-10 max-h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                <span className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white ${prod.color === 'green' ? 'bg-brand-accent' : prod.color === 'purple' ? 'bg-brand-secondary' : prod.color === 'sky' ? 'bg-brand-third' : 'bg-red-500'}`}>
                  {prod.badge}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-text-primary">{prod.name}</h3>
                  <p className="text-xs text-text-muted mt-1">{prod.specs}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border-muted">
                  <span className="text-lg font-extrabold text-brand-primary">{prod.price}</span>
                  <button className="px-4 py-2 bg-brand-primary text-white text-xs font-bold rounded-sm hover:bg-brand-primary/90 transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button 
            className="border-button px-10 py-4 font-bold rounded-md transition-all duration-300"
            onClick={() => navigate('/products')}
          >
            View All Products →
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto reveal">
        <div className="flex flex-wrap justify-center gap-10 p-10 bg-bg-card border border-border-primary rounded-md">
          {[
            { val: '80K+', label: 'Happy Customers' },
            { val: '500+', label: 'Laptop Models' },
            { val: '99%', label: 'Satisfaction Rate' },
            { val: '24/7', label: 'Expert Support' },
            { val: '15+', label: 'Brands Available' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 min-w-[120px]">
              <h2 className="text-3xl font-extrabold text-[#1a56db]">{stat.val}</h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY LAPELITE */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700 reveal">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl font-bold">Why Choose LapElite?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">We deliver more than hardware — we deliver confidence</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { icon: '🚀', title: 'Latest Models', desc: '2025-2026 flagship laptops from every top brand — always in stock.' },
            { icon: '💎', title: 'Genuine Products', desc: '100% authentic, manufacturer-sealed laptops with official warranty.' },
            { icon: '🛡️', title: '2-Year Warranty', desc: 'Every product covered with comprehensive warranty and on-site service.' },
            { icon: '🎧', title: '24/7 Support', desc: 'Expert tech team ready via chat, phone, or walk-in service center.' },
          ].map((item, i) => (
            <div key={i} className="w-[260px] p-8 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#1a56db]/10 border border-[#1a56db]/25 rounded-full text-3xl">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700 reveal">
        <div className="p-10 md:p-12 bg-[linear-gradient(135deg,rgba(26,86,219,0.18),rgba(14,165,233,0.10))] border border-[#1a56db]/25 rounded-md flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">Stay Ahead of the Curve</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Exclusive deals, new arrivals, and tech insights — delivered weekly.</p>
          </div>
          <form className="flex flex-wrap justify-center gap-3 w-full lg:w-auto" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="w-[280px] max-w-full px-4 py-3 bg-white/5 border border-black/10 dark:border-white/10 rounded-sm text-slate-900 dark:text-slate-50 outline-none focus:border-[#1a56db] transition-all"
            />
            <button type="submit" className="px-8 py-3 bg-[#1a56db] text-white text-xs font-bold rounded-sm hover:translate-y-[-1px] transition-all shadow-[0_6px_20px_rgba(26,86,219,0.35)] uppercase tracking-widest">
              Subscribe →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080e1c] text-slate-900 dark:text-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
