import { useState, useEffect } from 'react';

function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.remove('opacity-0', 'translate-y-8');
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll reply within 2 hours ✓");
    (e.target as HTMLFormElement).reset();
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const showToast = (message: string) => {
    alert(message);
  };

  const faqs = [
    {
      question: 'Do you offer installment plans?',
      answer:
        'Yes! We offer 0% installment plans via HBL, UBL, and Meezan Bank on purchases above Rs. 50,000. Apply at checkout.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Islamabad/Rawalpindi: Same day. Lahore/Karachi: 1–2 business days. Other cities: 2–3 business days.',
    },
    {
      question: 'What is your return policy?',
      answer:
        '7-day hassle-free returns on all products in original sealed condition. Manufacturing defects covered for full warranty period.',
    },
    {
      question: 'Are products genuine / warranty sealed?',
      answer:
        '100% yes. Every product comes manufacturer-sealed with official Pakistan warranty. We do not stock grey-market items.',
    },
    {
      question: 'Do you offer bulk / corporate pricing?',
      answer:
        'Yes! For orders of 5+ units, contact our corporate sales team at corporate@lapelite.pk for special pricing and dedicated support.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-bg-main text-text-primary">
      <div className="text-center mb-16 space-y-4 reveal">
        <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/30 text-text-focus text-sm font-semibold rounded-full uppercase tracking-wider">
          📬 Get in Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          We'd Love to <span className="bg-gradient-to-r from-brand-primary to-brand-third bg-clip-text text-transparent">Hear</span> From You
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Whether you need product advice, support, or have a business inquiry — our team is ready.
        </p>
      </div>

      {/* Info Cards */}
      <div className="flex flex-wrap justify-center gap-5 mb-24 reveal">
        {[
          { icon: '📞', title: 'Phone', details: ['+92 51 123 4567', 'Mon–Sat, 9am–8pm'] },
          { icon: '✉️', title: 'Email', details: ['support@lapelite.pk', 'Reply within 2 hours'] },
          { icon: '📍', title: 'Showroom', details: ['Blue Area, Jinnah Ave', 'Islamabad, Pakistan'] },
          { icon: '💬', title: 'Live Chat', details: ['Available 24/7'], btn: true },
        ].map((info, i) => (
          <div key={i} className="w-[240px] p-8 bg-bg-card border border-border-primary rounded-md text-center space-y-4 hover:border-brand-primary transition-all duration-300">
            <div className="text-4xl">{info.icon}</div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{info.title}</h3>
              {info.details.map((line, j) => (
                <p key={j} className="text-text-secondary text-sm">{line}</p>
              ))}
              {info.btn && (
                <button 
                  className="mt-4 px-6 py-2 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-sm hover:bg-brand-primary hover:text-white transition-all"
                  onClick={() => showToast('Chat started! 💬')}
                >
                  Start Chat
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Form + FAQ Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Send Us a Message</h2>
          <div className="p-8 bg-bg-card border border-border-primary rounded-md shadow-2xl">
            <form onSubmit={submitContact} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="Ahmed Khan" required className="w-full bg-white/5 border border-border-primary rounded-sm px-4 py-3 text-text-primary outline-none focus:border-brand-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Phone</label>
                  <input type="tel" placeholder="+92 300 0000000" className="w-full bg-white/5 border border-border-primary rounded-sm px-4 py-3 text-text-primary outline-none focus:border-brand-primary transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="you@example.com" required className="w-full bg-white/5 border border-border-primary rounded-sm px-4 py-3 text-text-primary outline-none focus:border-brand-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Subject</label>
                <select className="w-full bg-white/5 border border-border-primary rounded-sm px-4 py-3 text-text-primary outline-none focus:border-brand-primary transition-all cursor-pointer">
                  <option>Product Inquiry</option>
                  <option>Order Support</option>
                  <option>Repair & Service</option>
                  <option>Warranty Claim</option>
                  <option>Business / Bulk Order</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Message</label>
                <textarea placeholder="Tell us how we can help…" required className="w-full bg-white/5 border border-border-primary rounded-sm px-4 py-3 text-text-primary outline-none focus:border-brand-primary transition-all min-h-[140px] resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-brand-primary text-white font-bold rounded-sm hover:translate-y-[-1px] transition-all shadow-[0_6px_20px_rgba(26,86,219,0.35)] uppercase tracking-widest text-xs">
                Send Message →
              </button>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-bg-card border border-border-primary rounded-md overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="text-sm font-bold text-text-primary group-hover:text-brand-primary transition-colors">{faq.question}</span>
                  <span className={`text-brand-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>▾</span>
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-6 opacity-100 max-h-40' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-text-secondary text-xs leading-relaxed border-t border-border-muted pt-3">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
