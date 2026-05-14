import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login successful!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-25 bg-bg-main text-text-primary">
      <div className="w-full max-w-md space-y-12 animate-in fade-in zoom-in duration-700">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">Welcome Back 👋</h2>
          <p className="text-text-secondary">Sign in to your LapElite account</p>
        </div>

        <div className="p-10 bg-bg-card border border-white/5 rounded-3xl shadow-2xl shadow-black/50 space-y-8">
          <form onSubmit={handleLogin} className="space-y-6">
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
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full bg-bg-main border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-bg-main text-brand-primary focus:ring-brand-primary" />
                <span className="text-text-muted group-hover:text-text-primary transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-brand-primary hover:text-text-highlight transition-all">Forgot password?</a>
            </div>

            <button type="submit" className="w-full py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-100 shadow-2xl shadow-brand-primary/30 transition-all duration-300 uppercase tracking-widest text-sm">
              Sign In →
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="px-4 bg-bg-card text-text-muted">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <button className="py-4 border border-white/5 rounded-xl hover:bg-white/5 transition-all text-sm font-medium flex items-center justify-center gap-2">
              <span>🔍</span> Google
            </button>
            <button className="py-4 border border-white/5 rounded-xl hover:bg-white/5 transition-all text-sm font-medium flex items-center justify-center gap-2">
              <span>🍎</span> Apple
            </button>
          </div>

          <div className="text-center text-sm font-medium">
            <p className="text-text-muted">
              Don't have an account?
              <button 
                onClick={() => navigate('/signup')} 
                className="ml-2 text-brand-primary font-bold hover:text-text-highlight transition-all underline underline-offset-4"
              >
                Create one →
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-bold">
          By signing in you agree to our <a href="#" className="text-text-secondary hover:text-brand-primary underline">Terms of Use</a> and <a href="#" className="text-text-secondary hover:text-brand-primary underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
