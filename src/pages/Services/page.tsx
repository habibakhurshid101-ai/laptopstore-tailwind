import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Services() {
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

  const showToast = (message: string) => {
    alert(message);
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto text-center reveal">
        <div className="space-y-8 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/30 text-text-focus text-sm font-semibold rounded-full uppercase tracking-wider">
            ⚙️ Premium Services
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Tech Support You Can <span className="bg-gradient-to-r from-brand-primary to-brand-third bg-clip-text text-transparent">Trust</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            From warranty coverage to expert repairs and cloud solutions — we keep your tech
            running at its best.
          </p>
          <button 
            className="px-10 py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 hover:scale-105 shadow-2xl shadow-brand-primary/30 transition-all duration-300"
            onClick={() => navigate('/contact')}
          >
            Get a Quote →
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Service Cards */}
        <div className="text-center mb-16 space-y-4 reveal">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-text-secondary text-lg">Comprehensive tech solutions for every need</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mb-24 reveal">
          {[
            { 
              icon: '🛡️', 
              title: 'Warranty Plans', 
              desc: 'Extended 2–4 year warranty plans with on-site service and accidental damage coverage.',
              prices: ['Basic — Rs. 5,000/yr', 'Pro — Rs. 12,000/yr', 'Elite — Rs. 22,000/yr'],
              btn: 'Get Plan'
            },
            { 
              icon: '🔧', 
              title: 'Repair Services', 
              desc: 'Certified technicians for screen replacement, battery, motherboard and liquid damage repairs.',
              prices: ['Screen Replacement from Rs. 8,000', 'Battery from Rs. 4,500', 'Diagnostics — Free'],
              btn: 'Book Repair'
            },
            { 
              icon: '☁️', 
              title: 'Cloud Backup', 
              desc: 'Secure cloud backup and recovery solutions. Never lose your data again with automated daily backups.',
              prices: ['100GB — Rs. 2,000/yr', '1TB — Rs. 6,500/yr', '5TB — Rs. 14,000/yr'],
              btn: 'Start Backup'
            },
            { 
              icon: '💻', 
              title: 'IT Consulting', 
              desc: 'Expert guidance for business IT infrastructure, hardware procurement, and network setup.',
              prices: ['1-hr session — Rs. 3,500', 'Monthly retainer from Rs. 25,000'],
              btn: 'Book Session'
            },
            { 
              icon: '🚀', 
              title: 'Setup & Configuration', 
              desc: 'Professional OS installation, driver setup, software configuration and data migration services.',
              prices: ['Basic setup — Rs. 2,000', 'Data migration — Rs. 3,500'],
              btn: 'Book Now'
            },
            { 
              icon: '🎧', 
              title: '24/7 Remote Support', 
              desc: 'Round-the-clock remote assistance via phone, chat or remote desktop for all technical issues.',
              prices: ['Per incident — Rs. 1,500', 'Annual pass — Rs. 8,000/yr'],
              btn: 'Get Support'
            },
          ].map((service, i) => (
            <div key={i} className="w-[340px] p-8 bg-bg-card border border-border-primary rounded-md space-y-6 group hover:border-brand-primary transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20 rounded-md text-3xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{service.desc}</p>
                <div className="space-y-1.5 pt-2">
                  {service.prices.map((p, j) => (
                    <p key={j} className={`text-[10px] font-bold uppercase tracking-widest ${p.includes('Elite') || p.includes('Annual') ? 'text-brand-accent' : 'text-text-muted'}`}>{p}</p>
                  ))}
                </div>
              </div>
              <button 
                className="w-full py-3 bg-brand-primary text-white text-[10px] font-bold rounded-sm hover:bg-brand-primary/90 transition-all uppercase tracking-widest shadow-[0_6px_20px_rgba(26,86,219,0.35)]"
                onClick={() => showToast(`${service.title} request sent!`)}
              >
                {service.btn}
              </button>
            </div>
          ))}
        </div>

        {/* Support Plans Table */}
        <div className="py-24 border-t border-white/5 reveal">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Support Plan Comparison</h2>
            <p className="text-text-secondary text-lg">Choose the right level of coverage for you</p>
          </div>
          <div className="overflow-x-auto rounded-md border border-border-primary shadow-2xl">
            <table className="w-full text-left border-collapse bg-bg-card">
              <thead>
                <tr className="bg-brand-primary">
                  <th className="p-4 text-white text-[11px] font-bold uppercase tracking-widest">Feature</th>
                  <th className="p-4 text-white text-[11px] font-bold uppercase tracking-widest">Basic</th>
                  <th className="p-4 text-white text-[11px] font-bold uppercase tracking-widest">Pro</th>
                  <th className="p-4 text-white text-[11px] font-bold uppercase tracking-widest">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-muted">
                {[
                  ['Warranty Period', '1 Year', '2 Years', '4 Years'],
                  ['On-Site Service', '—', '✓', '✓'],
                  ['Accidental Damage', '—', '—', '✓'],
                  ['Remote Support', 'Business hrs', 'Business hrs', '24/7'],
                  ['Response Time', '5 days', '2 days', 'Next day'],
                  ['Price / Year', 'Rs. 5,000', 'Rs. 12,000', 'Rs. 22,000'],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-brand-primary/5 transition-colors group">
                    <td className="p-4 text-text-primary font-bold text-xs">{row[0]}</td>
                    <td className="p-4 text-text-secondary text-xs">{row[1]}</td>
                    <td className="p-4 text-text-secondary text-xs">{row[2]}</td>
                    <td className={`p-4 font-bold text-xs ${i === 5 ? 'text-brand-primary' : 'text-brand-accent'}`}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <section className="py-24 reveal">
          <div className="p-12 md:p-20 bg-brand-primary rounded-[40px] flex flex-col lg:flex-row justify-between items-center gap-12 relative overflow-hidden text-center lg:text-left">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Need a Custom Solution?</h2>
              <p className="text-white/80 text-lg font-medium">Our enterprise team is ready to design a package for your business.</p>
            </div>
            <div className="flex flex-wrap gap-4 relative z-10 justify-center">
              <button 
                className="px-10 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl"
                onClick={() => navigate('/contact')}
              >
                Contact Us →
              </button>
              <button 
                className="px-10 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
                onClick={() => showToast('Calling +92 51 1234567...')}
              >
                📞 Call Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
