import React from 'react';
import toast from 'react-hot-toast';
import { useShoppingCart } from 'use-shopping-cart';

export default function RemoveFromCart({ product }) {
  const { removeItem, cartCount } = useShoppingCart();

  function handleRemoveItem() {
    removeItem(product.sku);
    toast.success(`${product.name} is removed from your cart`);
  }

  return (
    <button
      onClick={handleRemoveItem}
      disabled={!cartCount}
      className={`flex ml-2 text-white border-0 py-2 px-6 focus:outline-none  rounded ${
        !cartCount ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-600'
      }`}
    >
      Remove
    </button>
  );
}
