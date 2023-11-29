import React from 'react';


const ProductCard = ({ name, price}) => {
  return (
    <div className="product-card">
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-price">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
