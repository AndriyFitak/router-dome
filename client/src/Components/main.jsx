
import "../styles/main.css"
import React, { useState } from 'react';

const Main = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };

    setProducts([...products, newProduct]);

    setProductName('');
    setProductPrice('');
    setProductDescription('');
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Форма створення продукту</h1>
      <div>
        <label className="form-input name">
          
          <input
            type="text"
            value={productName}
            placeholder="Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className="form-input">
          
          <input
            type="text"
            value={productPrice}
            placeholder="Price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className="form-input description">
          
          <textarea
            value={productDescription}
            placeholder="Description"
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddProduct} className="button">
        Додати продукт
      </button>

      <div>
        <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Список продуктів</h2>
        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index} className="product-item">
              <strong>{product.name}</strong> - {product.price} грн
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;