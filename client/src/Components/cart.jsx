import React from 'react';
import ProductCard from './ProductCard';
import '../styles/cart.css';

const Cart = () => {

  const products = [
    { id: 1, name: 'Product 1', price: 20,  },
    { id: 2, name: 'Product 2', price: 30,  },
    { id: 3, name: 'Product 3', price: 25,  },
    { id: 4, name: 'Product 4', price: 40,  },
  ];

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Cart;
