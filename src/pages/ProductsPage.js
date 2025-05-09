import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../components/RatingStars';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  
  if (loading) return <div className="loading">Loading...</div>;
  
  return (
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`} className="product-name">
            {product.title}
          </Link>
          <div className="divider"></div>
          <RatingStars rating={product.rating.rate} />
        </div>
      ))}
    </div>
  );
}