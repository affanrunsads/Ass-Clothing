import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-800 shadow-lg flex items-center justify-center"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
