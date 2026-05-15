import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/30 text-text-focus text-sm font-semibold rounded-full uppercase tracking-wider">
            🏢 Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary leading-tight tracking-tight">
            Pakistan's Most <span className="bg-gradient-to-r from-brand-primary to-brand-third bg-clip-text text-transparent">Trusted</span> Laptop Store
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
            Founded in 2019 in Islamabad, LapElite was born from a simple belief — every
            Pakistani deserves access to world-class technology at fair prices, backed by
            genuine support.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              className="px-10 py-5 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/products')}
            >
              Shop Now
            </button>
            <button 
              className="px-10 py-5 bg-transparent border-2 border-brand-primary text-brand-primary font-bold rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-primary/20 blur-[100px] rounded-full"></div>
            <img 
              src="/img1.avif" 
              alt="LapElite Store" 
              className="relative w-full rounded-2xl border border-white/5 shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-y border-white/5 text-center mb-24">
          {[
            { val: '2019', label: 'Year Founded' },
            { val: '80K+', label: 'Happy Customers' },
            { val: '500+', label: 'Products' },
            { val: '15+', label: 'Brands' },
            { val: '6', label: 'Cities' },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-4xl font-extrabold text-brand-primary">{stat.val}</h2>
              <p className="text-sm text-text-muted font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Our Values</h2>
          <p className="text-text-secondary text-lg">The principles that guide everything we do</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mb-24">
          {[
            { icon: '💎', title: 'Authenticity', desc: 'Every product is 100% genuine with official manufacturer warranty. No grey-market items ever.' },
            { icon: '🤝', title: 'Transparency', desc: 'Clear pricing, no hidden fees, honest specs. We say what we mean and stand behind our products.' },
            { icon: '🚀', title: 'Innovation', desc: 'Always stocking the latest models, continuously improving our platform and services.' },
            { icon: '❤️', title: 'Customer First', desc: 'Our support team is trained to solve problems fast. Your satisfaction is our success metric.' },
          ].map((val, i) => (
            <div key={i} className="w-[260px] p-8 flex flex-col items-center text-center bg-bg-card border border-border-primary rounded-md space-y-4 hover:border-brand-primary transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-primary/10 border border-brand-primary/25 rounded-full text-3xl">
                {val.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{val.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Meet the Team</h2>
          <p className="text-text-secondary text-lg">The people behind LapElite</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mb-24">
          {[
            { icon: '👨‍💼', name: 'Usman Tariq', role: 'Founder & CEO', bio: '10+ yrs in tech retail. Former Dell Pakistan country manager.', color: 'blue' },
            { icon: '👩‍💻', name: 'Sana Malik', role: 'Head of Technology', bio: 'Full-stack engineer with expertise in e-commerce infrastructure.', color: 'purple' },
            { icon: '👨‍🔧', name: 'Ali Raza', role: 'Service Manager', bio: 'Certified technician with 8 years of laptop repair experience.', color: 'sky' },
            { icon: '👩‍🎨', name: 'Hira Baig', role: 'Marketing Lead', bio: 'Brand strategist who grew LapElite\'s social presence to 200K+.', color: 'green' },
          ].map((member, i) => (
            <div key={i} className="w-[220px] p-8 bg-bg-card border border-border-primary rounded-md text-center space-y-4 hover:border-brand-primary transition-all duration-300 group">
              <div className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full text-4xl border-2 transition-all duration-500
                ${member.color === 'blue' ? 'bg-[radial-gradient(circle,rgba(26,86,219,0.2),transparent)] border-brand-primary' : ''}
                ${member.color === 'purple' ? 'bg-[radial-gradient(circle,rgba(124,58,237,0.2),transparent)] border-brand-secondary' : ''}
                ${member.color === 'sky' ? 'bg-[radial-gradient(circle,rgba(14,165,233,0.2),transparent)] border-brand-third' : ''}
                ${member.color === 'green' ? 'bg-[radial-gradient(circle,rgba(6,214,160,0.2),transparent)] border-brand-accent' : ''}
              `}>
                {member.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-text-primary group-hover:text-brand-primary transition-colors">{member.name}</h3>
                <p className={`text-[10px] font-bold uppercase tracking-widest
                  ${member.color === 'blue' ? 'text-brand-primary' : ''}
                  ${member.color === 'purple' ? 'text-brand-secondary' : ''}
                  ${member.color === 'sky' ? 'text-brand-third' : ''}
                  ${member.color === 'green' ? 'text-brand-accent' : ''}
                `}>{member.role}</p>
                <p className="text-xs text-text-muted leading-relaxed pt-2 line-clamp-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <section className="py-24 mb-24">
          <div className="p-12 md:p-20 bg-brand-primary rounded-[40px] flex flex-col lg:flex-row justify-between items-center gap-12 relative overflow-hidden text-center lg:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Join the LapElite Family</h2>
              <p className="text-white/80 text-lg font-medium">Shop smarter, get exclusive member deals, and expert support — always.</p>
            </div>
            <div className="flex flex-wrap gap-4 relative z-10 justify-center">
              <button 
                className="px-10 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl"
                onClick={() => navigate('/signup')}
              >
                Create Account →
              </button>
              <button 
                className="px-10 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
                onClick={() => navigate('/products')}
              >
                Browse Products
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
