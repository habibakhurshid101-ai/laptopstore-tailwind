import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  specs: string;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Dell XPS 15',
      price: 289000,
      quantity: 1,
      image: '/img8.png',
      specs: 'Intel Core i7-13700H · 16GB RAM · 512GB SSD',
    },
    {
      id: 2,
      name: 'HP Spectre x360',
      price: 349000,
      quantity: 1,
      image: '/img9.png',
      specs: 'Intel Core i9 · 32GB RAM · 1TB SSD',
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50000 ? 0 : 500;
  const tax = subtotal * 0.17; // 17% GST
  const total = subtotal + shipping + tax;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-bg-main text-text-primary">
      {/* HEADER */}
      <div className="mb-12 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Shopping <span className="text-brand-primary">Cart</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Review your items before checkout
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 space-y-6">
          <div className="text-6xl">🛒</div>
          <h2 className="text-2xl font-bold text-text-secondary">
            Your cart is empty
          </h2>
          <a
            href="/products"
            className="inline-block px-8 py-4 bg-brand-primary text-white text-sm font-bold rounded-md hover:bg-brand-primary/90 transition-all"
          >
            Continue Shopping →
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-bg-card border border-border-primary rounded-md flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain bg-white/5 rounded-md p-2"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-xs text-text-muted">{item.specs}</p>
                  <p className="text-xl font-extrabold text-brand-primary">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/5 border border-border-primary rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-lg font-bold hover:bg-white/10 transition-all"
                    >
                      −
                    </button>
                    <span className="px-4 text-sm font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-lg font-bold hover:bg-white/10 transition-all"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-400 hover:bg-red-400/10 rounded-md transition-all"
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6 sticky top-24">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="font-bold">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="font-bold">
                    {shipping === 0 ? (
                      <span className="text-brand-accent">FREE</span>
                    ) : (
                      `Rs. ${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tax (17% GST)</span>
                  <span className="font-bold">
                    Rs. {tax.toLocaleString('en-PK', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="pt-3 border-t border-border-muted flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-extrabold text-brand-primary">
                    Rs. {total.toLocaleString('en-PK', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
              <button className="w-full py-4 bg-brand-primary text-white text-sm font-bold rounded-md hover:translate-y-[-2px] transition-all shadow-[0_6px_20px_rgba(26,86,219,0.35)]">
                Proceed to Checkout →
              </button>
              <a
                href="/products"
                className="block text-center text-sm text-brand-primary hover:underline"
              >
                ← Continue Shopping
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
