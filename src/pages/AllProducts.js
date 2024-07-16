// src/pages/AllProducts.js
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data); // Assuming data is an array of products from your backend
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>Name: {product.name}</p>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}</p>
            <p>Availability: {product.availability ? 'Available' : 'Out of stock'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
