import React from 'react';

export default function RatingStars({ rating }) {
  const fullStars = Math.round(rating);
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className="star">
        {i <= fullStars ? '★' : '☆'}
      </span>
    );
  }
  
  return <div className="rating">{stars}</div>;
}