import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data/products';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Header />

        <main className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Latest Drops</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium quality graphic tees for the bold.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        <footer className="bg-black text-white py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">ASS CLOTHING</h2>
            <p className="text-gray-400">&copy; {2024} Ass Clothing. All rights reserved.</p>
          </div>
        </footer>

        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
