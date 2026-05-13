import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account created successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-bg-main text-text-primary">
      <div className="w-full max-w-md space-y-10 animate-in fade-in zoom-in duration-700">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">Create Your Account ✨</h2>
          <p className="text-text-secondary">Join 80,000+ satisfied LapElite customers</p>
        </div>

        <div className="p-10 bg-bg-card border border-white/5 rounded-3xl shadow-2xl shadow-black/50 space-y-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Full Name</label>
              <input
                type="text"
                placeholder="Ahmed Khan"
                required
                className="w-full bg-bg-main border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full bg-bg-main border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Phone Number</label>
              <input
                type="tel"
                placeholder="+92 300 0000000"
                className="w-full bg-bg-main border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Password</label>
              <input
                type="password"
                placeholder="Min. 6 characters"
                required
                className="w-full bg-bg-main border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                required
                className="w-full bg-bg-main border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer group pt-2">
              <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-white/10 bg-bg-main text-brand-primary focus:ring-brand-primary" />
              <span className="text-xs text-text-muted leading-relaxed">
                I agree to the <a href="#" className="text-brand-primary hover:underline">Terms of Service</a> and <a href="#" className="text-brand-primary hover:underline">Privacy Policy</a>
              </span>
            </label>

            <button type="submit" className="w-full py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-100 shadow-2xl shadow-brand-primary/30 transition-all duration-300 uppercase tracking-widest text-sm">
              Create Account →
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="px-4 bg-bg-card text-text-muted">Or join with</span></div>
          </div>

          <button className="w-full py-4 border border-white/5 rounded-xl hover:bg-white/5 transition-all text-sm font-medium flex items-center justify-center gap-2">
            <span>🔍</span> Sign up with Google
          </button>

          <div className="text-center text-sm font-medium">
            <p className="text-text-muted">
              Already have an account?
              <button 
                onClick={() => navigate('/login')} 
                className="ml-2 text-brand-primary font-bold hover:text-text-highlight transition-all underline underline-offset-4"
              >
                Sign in →
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
