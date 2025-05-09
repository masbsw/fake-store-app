import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RatingStars from '../components/RatingStars';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        navigate('/404');
      });
  }, [id, navigate]);
  
  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return null;
  
  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        Назад
      </button>
      <h1 className="product-title">{product.title}</h1>
      <img className="product-image" src={product.image} alt="#"/>
      <div className="product-price">Price: {product.price} $</div>
      <RatingStars rating={product.rating.rate} />
      <div className="divider"></div>
      <p className="product-description">{product.description}</p>
    </div>
  );
}