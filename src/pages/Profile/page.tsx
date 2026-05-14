import { useState } from 'react';

function Profile() {
  const [user] = useState({
    name: 'Habiba Khurshid',
    email: 'habibakhurshid101@gmail.com',
    phone: '+92 300 1234567',
    role: 'Premium Member',
    memberSince: 'January 2024',
    address: 'House #42, Street 7, F-8/4, Islamabad, Punjab 44000, Pakistan',
    avatar: 'AK',
  });

  const [orders] = useState([
    {
      id: '#ORD-2024-001',
      date: 'May 10, 2026',
      product: 'Dell XPS 15',
      status: 'Delivered',
      amount: 289000,
    },
    {
      id: '#ORD-2024-002',
      date: 'April 15, 2026',
      product: 'Logitech MX Master 3',
      status: 'Delivered',
      amount: 15000,
    },
    {
      id: '#ORD-2024-003',
      date: 'March 8, 2026',
      product: 'HP Spectre x360',
      status: 'Processing',
      amount: 349000,
    },
  ]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-bg-main text-text-primary">
      {/* HEADER */}
      <div className="mb-12 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          My <span className="text-brand-primary">Profile</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Manage your account and view your orders
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* PROFILE CARD */}
        <div className="lg:col-span-1">
          <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6 text-center">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-4xl font-extrabold text-white border-4 border-border-primary">
                {user.avatar}
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold">{user.name}</h2>
              <p className="text-sm text-text-secondary">{user.email}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full border border-brand-accent/30">
                ✦ {user.role}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-muted">
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-brand-primary">
                  {orders.length}
                </p>
                <p className="text-xs text-text-muted uppercase tracking-widest">
                  Orders
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-brand-primary">12</p>
                <p className="text-xs text-text-muted uppercase tracking-widest">
                  Reviews
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4">
              <button className="w-full py-3 bg-brand-primary text-white text-sm font-bold rounded-md hover:translate-y-[-2px] transition-all">
                Edit Profile
              </button>
              <button className="w-full py-3 bg-transparent border border-border-primary text-text-primary text-sm font-bold rounded-md hover:bg-white/5 transition-all">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* DETAILS & ORDERS */}
        <div className="lg:col-span-2 space-y-8">
          {/* ACCOUNT DETAILS */}
          <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span>👤</span> Account Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">
                  Full Name
                </p>
                <p className="text-sm font-bold">{user.name}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">
                  Email Address
                </p>
                <p className="text-sm font-bold">{user.email}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">
                  Phone Number
                </p>
                <p className="text-sm font-bold">{user.phone}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">
                  Member Since
                </p>
                <p className="text-sm font-bold">{user.memberSince}</p>
              </div>
            </div>
          </div>

          {/* SHIPPING ADDRESS */}
          <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span>📍</span> Shipping Address
              </h3>
              <button className="px-4 py-2 bg-transparent border border-border-primary text-text-primary text-xs font-bold rounded-md hover:bg-white/5 transition-all">
                Edit
              </button>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {user.address}
            </p>
          </div>

          {/* ORDER HISTORY */}
          <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span>📦</span> Recent Orders
            </h3>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 bg-white/5 border border-border-muted rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-bold">{order.product}</p>
                    <p className="text-xs text-text-muted">
                      {order.id} • {order.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                          : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                      }`}
                    >
                      {order.status}
                    </span>
                    <p className="text-sm font-extrabold text-brand-primary">
                      Rs. {order.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 bg-transparent border border-border-primary text-text-primary text-sm font-bold rounded-md hover:bg-white/5 transition-all">
              View All Orders →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
