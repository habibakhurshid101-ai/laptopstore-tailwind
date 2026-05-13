import { useState } from 'react';

function Products() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterBrand, setFilterBrand] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');
  const [filterSort, setFilterSort] = useState('featured');

  const showToast = (message: string) => {
    alert(message);
  };

  const addToCart = (name: string) => {
    showToast(`${name} added to cart!`);
  };

  const filterProducts = () => {
    showToast('Filters applied ✓');
  };

  const clearFilters = () => {
    setFilterCategory('all');
    setFilterBrand('all');
    setFilterPrice('all');
    setFilterSort('featured');
    showToast('Filters cleared');
  };

  const products = [
    { id: 1, name: 'Dell XPS 15', brand: 'DELL', cat: 'LAPTOP', specs: 'Intel i7-13700H · 16GB · 512GB NVMe', price: 'Rs. 289,000', badge: 'Bestseller', img: '/img8.png' },
    { id: 2, name: 'HP Spectre x360', brand: 'HP', cat: 'LAPTOP', specs: 'Intel i9 · 32GB · 1TB NVMe', price: 'Rs. 349,000', badge: 'Pro', img: '/img9.png' },
    { id: 3, name: 'ThinkPad X1 Carbon', brand: 'LENOVO', cat: 'LAPTOP', specs: 'AMD Ryzen 9 · 32GB · 1TB · 4K OLED', price: 'Rs. 420,000', badge: 'New', img: '/img10.png' },
    { id: 4, name: 'ROG Zephyrus G14', brand: 'ASUS', cat: 'GAMING', specs: 'Ryzen 9 · RTX 4080 · 32GB · 2TB', price: 'Rs. 520,000', badge: 'Sale', img: '/img11.png' },
    { id: 5, name: 'MacBook Pro 14"', brand: 'APPLE', cat: 'LAPTOP', specs: 'M3 Pro · 18GB · 512GB SSD', price: 'Rs. 580,000', badge: '', img: '/img10.png' },
    { id: 6, name: 'MSI Titan GT77', brand: 'MSI', cat: 'GAMING', specs: 'i9-13980HX · RTX 4090 · 64GB · 4TB', price: 'Rs. 750,000', badge: 'Hot', img: '/img11.png' },
    { id: 7, name: 'Dell Inspiron 15', brand: 'DELL', cat: 'LAPTOP', specs: 'Intel i5 · 8GB · 512GB SSD', price: 'Rs. 115,000', badge: '', img: '/img9.png' },
    { id: 8, name: 'HP EliteBook 840', brand: 'HP', cat: 'BUSINESS', specs: 'Intel i7 · 16GB · 512GB SSD · 14" FHD', price: 'Rs. 195,000', badge: '', img: '/img8.png' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-bg-main">
      {/* Page Header */}
      <div className="mb-12 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">All Products</h1>
        <p className="text-text-secondary">Explore 500+ laptops, desktops, workstations and accessories</p>
      </div>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-8 bg-bg-card border border-white/5 rounded-2xl mb-12 items-end">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Category</label>
          <select
            className="bg-bg-main border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:border-brand-primary outline-none transition-all"
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value);
              filterProducts();
            }}
          >
            <option value="all">All Categories</option>
            <option value="laptop">Laptops</option>
            <option value="desktop">Desktops</option>
            <option value="workstation">Workstations</option>
            <option value="gaming">Gaming</option>
            <option value="accessory">Accessories</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Brand</label>
          <select
            className="bg-bg-main border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:border-brand-primary outline-none transition-all"
            value={filterBrand}
            onChange={(e) => {
              setFilterBrand(e.target.value);
              filterProducts();
            }}
          >
            <option value="all">All Brands</option>
            <option value="dell">Dell</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="asus">ASUS</option>
            <option value="apple">Apple</option>
            <option value="msi">MSI</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Price Range</label>
          <select
            className="bg-bg-main border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:border-brand-primary outline-none transition-all"
            value={filterPrice}
            onChange={(e) => {
              setFilterPrice(e.target.value);
              filterProducts();
            }}
          >
            <option value="all">Any Price</option>
            <option value="under100k">Under Rs.100,000</option>
            <option value="100-300k">Rs.100K – 300K</option>
            <option value="300-500k">Rs.300K – 500K</option>
            <option value="above500k">Above Rs.500K</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Sort By</label>
          <select
            className="bg-bg-main border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:border-brand-primary outline-none transition-all"
            value={filterSort}
            onChange={(e) => setFilterSort(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
        <button 
          className="px-6 py-3.5 bg-transparent border border-white/10 text-text-primary text-xs font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-all"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* Results Count */}
      <p className="text-sm text-text-muted mb-8">
        Showing <strong>{products.length}</strong> products
      </p>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-5 mb-16">
        {products.map((prod) => (
          <div key={prod.id} className="w-[280px] bg-bg-card border border-border-primary rounded-md overflow-hidden hover:-translate-y-1.5 hover:border-brand-primary hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-all duration-300 group">
            <div className="relative h-[200px] p-8 flex items-center justify-center bg-[radial-gradient(circle,_rgba(26,86,219,0.08),_transparent)]">
              <img src={prod.img} alt={prod.name} className="relative z-10 max-h-full object-contain group-hover:scale-110 transition-transform duration-700" />
              {prod.badge && (
                <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full bg-brand-primary text-white">
                  {prod.badge}
                </span>
              )}
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{prod.brand} · {prod.cat}</p>
                <h3 className="text-base font-bold text-text-primary">{prod.name}</h3>
                <p className="text-xs text-text-muted line-clamp-1">{prod.specs}</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border-muted">
                <span className="text-lg font-bold text-brand-primary">{prod.price}</span>
                <button 
                  className="px-4 py-2 bg-brand-primary text-white text-xs font-bold rounded-sm hover:bg-brand-primary/90 transition-all"
                  onClick={() => addToCart(prod.name)}
                >
                  Add to Cart
                </button>
              </div>
              <button 
                className="w-full text-left text-xs font-bold text-brand-primary hover:text-text-highlight transition-all"
                onClick={() => showToast('Product details coming soon!')}
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-12">
        <button 
          className="px-10 py-4 bg-transparent border-2 border-brand-primary text-brand-primary font-bold rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300"
          onClick={() => showToast('Loading more products...')}
        >
          Load More Products
        </button>
      </div>
    </div>
  );
}

export default Products;
