// src/pages/ProductPage.js
import React, { useEffect, useState } from 'react';
import { getProductById } from '../api';

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data); // Assuming data is the product object fetched by ID
      } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability ? 'Available' : 'Out of stock'}</p>
    </div>
  );
};

export default ProductPage;
