import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const [userName] = useState('Admin');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      };
      setCurrentTime(now.toLocaleDateString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Add reveal animation on scroll
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

  // Chart Data
  const salesData = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Units Sold',
        data: [45, 52, 61, 58, 67, 72],
        backgroundColor: 'rgba(26, 86, 219, 0.8)',
      },
    ],
  };

  const categoryData = {
    labels: ['Laptops', 'Desktops', 'Gaming', 'Accessories', 'Workstations'],
    datasets: [
      {
        data: [44, 18, 18, 36, 8],
        backgroundColor: [
          'rgba(26, 86, 219, 0.8)',
          'rgba(124, 58, 237, 0.8)',
          'rgba(14, 165, 233, 0.8)',
          'rgba(6, 214, 160, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
      },
    ],
  };

  const revenueData = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Revenue (PKR)',
        data: [1800000, 2100000, 2400000, 2200000, 2600000, 2400000],
        borderColor: 'rgba(6, 214, 160, 1)',
        backgroundColor: 'rgba(6, 214, 160, 0.1)',
        fill: true,
      },
    ],
  };

  const stockStatusData = {
    labels: ['In Stock', 'Low Stock', 'Out of Stock'],
    datasets: [
      {
        data: [98, 18, 8],
        backgroundColor: [
          'rgba(6, 214, 160, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#cbd5e1',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#cbd5e1' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
      },
      y: {
        ticks: { color: '#cbd5e1' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: { color: '#cbd5e1' },
      },
    },
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-bg-main text-text-primary">
      {/* WELCOME BANNER */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 p-10 bg-[linear-gradient(135deg,rgba(26,86,219,0.12)_0%,rgba(124,58,237,0.08)_60%,transparent_100%)] border border-border-primary rounded-md relative overflow-hidden reveal">
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/15 border border-brand-secondary/30 text-purple-400 text-[10px] font-bold uppercase tracking-widest rounded-full">⚙️ Admin Panel</div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Stock Management <span className="text-brand-primary">Dashboard</span>
          </h1>
          <p className="text-text-secondary text-sm">
            Welcome back, <strong className="text-brand-primary">{userName}</strong> 👋 — <span className="text-text-muted">{currentTime}</span>
          </p>
        </div>
        <div className="flex gap-4 relative z-10">
          <button 
            className="px-6 py-3 bg-brand-primary text-white text-xs font-bold rounded-sm hover:translate-y-[-1px] transition-all shadow-[0_6px_20px_rgba(26,86,219,0.35)]"
            onClick={() => showToast('Quick Add Stock feature coming soon!')}
          >
            ➕ Quick Add Stock
          </button>
          <button className="px-6 py-3 bg-transparent border border-border-primary text-text-primary text-xs font-bold rounded-sm hover:bg-white/5 transition-all">View Store →</button>
        </div>
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-[radial-gradient(circle,rgba(26,86,219,0.18),transparent_70%)] rounded-full pointer-events-none"></div>
      </div>

      {/* STOCK ACTION CARDS */}
      <div className="text-[10px] font-bold text-text-muted uppercase tracking-[2px] mb-4 flex items-center gap-2 after:flex-1 after:h-[1px] after:bg-border-primary">📦 Stock Operations</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 reveal">
        {[
          { color: 'blue', icon: '📋', title: 'View All Stock', desc: 'Browse complete inventory with search tools', grad: 'linear-gradient(135deg,rgba(26,86,219,0.12),transparent)' },
          { color: 'green', icon: '➕', title: 'Insert New Stock', desc: 'Add new laptop or accessory to your inventory', grad: 'linear-gradient(135deg,rgba(6,214,160,0.12),transparent)' },
          { color: 'amber', icon: '✏️', title: 'Update Stock', desc: 'Edit product details, price, or stock quantity', grad: 'linear-gradient(135deg,rgba(245,158,11,0.12),transparent)' },
          { color: 'red', icon: '🗑️', title: 'Delete Stock', desc: 'Remove discontinued or out-of-stock items', grad: 'linear-gradient(135deg,rgba(239,68,68,0.12),transparent)' },
        ].map((action, i) => (
          <div 
            key={i} 
            className="group relative p-6 bg-bg-card border border-border-primary rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
            onClick={() => showToast(action.title)}
            style={{ '--hover-border': action.color === 'blue' ? '#1a56db' : action.color === 'green' ? '#06d6a0' : action.color === 'amber' ? '#f59e0b' : '#ef4444' } as React.CSSProperties}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: action.grad }}></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-full text-3xl shrink-0">{action.icon}</div>
              <div>
                <h3 className="text-sm font-bold group-hover:text-text-primary transition-colors">{action.title}</h3>
                <p className="text-[10px] text-text-muted mt-1 leading-relaxed">{action.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* KPI STAT CARDS */}
      <div className="text-[10px] font-bold text-text-muted uppercase tracking-[2px] mb-4 flex items-center gap-2 after:flex-1 after:h-[1px] after:bg-border-primary">📊 Key Metrics</div>
      <div className="flex flex-wrap gap-4 mb-12 reveal">
        {[
          { icon: '📦', val: '124', label: 'Total Stock Items' },
          { icon: '⚠️', val: '8', label: 'Low Stock Alerts', color: 'text-red-400' },
          { icon: '💰', val: 'Rs.2.4M', label: 'Revenue This Month', color: 'text-brand-accent' },
          { icon: '🛒', val: '47', label: 'Orders This Month' },
          { icon: '👥', val: '1.2K', label: 'Active Customers', color: 'text-purple-400' },
          { icon: '🛡️', val: '96%', label: 'Fulfilment Rate', color: 'text-sky-400' },
        ].map((stat, i) => (
          <div key={i} className="w-[210px] p-6 bg-bg-card border border-border-primary rounded-md flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-full text-xl shrink-0">{stat.icon}</div>
            <div>
              <h3 className={`text-2xl font-black ${stat.color || 'text-text-primary'}`}>{stat.val}</h3>
              <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS ROW */}
      <div className="text-[10px] font-bold text-text-muted uppercase tracking-[2px] mb-4 flex items-center gap-2 after:flex-1 after:h-[1px] after:bg-border-primary">📈 Analytics & Graphical View</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 reveal">
        <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Monthly Sales Volume</h3>
              <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Units sold per month — last 6 months</p>
            </div>
            <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-[9px] font-bold uppercase tracking-widest rounded-full border border-brand-primary/20">Bar Chart</span>
          </div>
          <div className="h-[300px]">
            <Bar data={salesData} options={chartOptions} />
          </div>
        </div>

        <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Stock by Category</h3>
              <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Current inventory distribution</p>
            </div>
            <span className="px-2 py-1 bg-brand-secondary/10 text-brand-secondary text-[9px] font-bold uppercase tracking-widest rounded-full border border-brand-secondary/20">Doughnut</span>
          </div>
          <div className="h-[300px]">
            <Doughnut data={categoryData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 reveal">
        <div className="lg:col-span-2 p-8 bg-bg-card border border-border-primary rounded-md space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Revenue Trend</h3>
              <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Monthly revenue (PKR) — last 6 months</p>
            </div>
            <span className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-[9px] font-bold uppercase tracking-widest rounded-full border border-brand-accent/20">Line Chart</span>
          </div>
          <div className="h-[300px]">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>

        <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Stock Status</h3>
              <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">In-stock vs low vs out-of-stock</p>
            </div>
            <span className="px-2 py-1 bg-orange-400/10 text-orange-400 text-[9px] font-bold uppercase tracking-widest rounded-full border border-orange-400/20">Pie Chart</span>
          </div>
          <div className="h-[300px]">
            <Pie data={stockStatusData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="text-[10px] font-bold text-text-muted uppercase tracking-[2px] mb-4 flex items-center gap-2 after:flex-1 after:h-[1px] after:bg-border-primary">🔗 Quick Navigation</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24 reveal">
        {[
          { icon: '🖥️', title: 'All Products', desc: 'Browse & manage' },
          { icon: '💻', title: 'Laptops', desc: '44 models' },
          { icon: '🎮', title: 'Gaming', desc: '18 models' },
          { icon: '🖱️', title: 'Accessories', desc: '36 items' },
          { icon: '📦', title: 'Orders', desc: 'Pending: 12' },
          { icon: '🛡️', title: 'Warranties', desc: 'Manage plans' },
        ].map((link, i) => (
          <a key={i} href="#" className="p-5 bg-bg-card border border-border-primary rounded-md hover:border-brand-primary transition-all group" onClick={(e) => { e.preventDefault(); showToast(link.title); }}>
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{link.icon}</div>
            <div className="space-y-0.5">
              <strong className="block text-xs group-hover:text-brand-primary transition-colors">{link.title}</strong>
              <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest">{link.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* ACCOUNT SECTION */}
      <div className="text-[10px] font-bold text-text-muted uppercase tracking-[2px] mb-4 flex items-center gap-2 after:flex-1 after:h-[1px] after:bg-border-primary">👤 Account Settings</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
        <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6">
          <h3 className="text-lg font-bold">Account Details</h3>
          <div className="space-y-4">
            {[
              ['Full Name', 'Ahmed Khan'],
              ['Email', 'ahmed@lapelite.pk'],
              ['Phone', '+92 300 1234567'],
              ['Role', 'Admin'],
              ['Member Since', 'Jan 2024'],
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-border-muted last:border-0">
                <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{row[0]}</p>
                <p className={`text-xs font-bold ${row[1] === 'Admin' ? 'text-purple-400' : 'text-text-primary'}`}>{row[1]}</p>
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-transparent border border-border-primary text-text-primary text-xs font-bold rounded-sm hover:bg-white/5 transition-all">Edit Profile</button>
        </div>

        <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6">
          <h3 className="text-lg font-bold">Shipping Address</h3>
          <div className="space-y-3 text-xs text-text-secondary leading-relaxed">
            <p className="font-bold text-text-primary">Ahmed Khan</p>
            <p>House #42, Street 7, F-8/4</p>
            <p>Islamabad, Punjab 44000, Pakistan</p>
            <p>+92 300 1234567</p>
          </div>
          <div className="flex gap-4 pt-2">
            <button className="flex-1 py-3 bg-transparent border border-border-primary text-text-primary text-xs font-bold rounded-sm hover:bg-white/5 transition-all">Edit</button>
            <button className="flex-1 py-3 bg-brand-primary text-white text-xs font-bold rounded-sm hover:translate-y-[-1px] transition-all">+ Add New</button>
          </div>
        </div>

        <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6 text-center">
          <h3 className="text-lg font-bold">Store Summary</h3>
          <div className="space-y-4">
            {[
              ['Total Products', '124'],
              ['Categories', '5'],
              ['Active Orders', '12'],
              ['Last Updated', 'Today'],
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-border-muted last:border-0">
                <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{row[0]}</p>
                <p className="text-xs font-black text-brand-primary">{row[1]}</p>
              </div>
            ))}
          </div>
          <button 
            className="w-full py-4 bg-brand-primary text-white text-xs font-bold rounded-sm hover:translate-y-[-1px] active:scale-95 shadow-[0_6px_20px_rgba(26,86,219,0.35)] transition-all duration-300 uppercase tracking-widest"
            onClick={() => showToast('Add Stock')}
          >
            ➕ Add Stock Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
