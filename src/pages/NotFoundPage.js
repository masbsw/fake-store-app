import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 - Страница не найдена</h1>
      <Link to="/products">
        <button>Вернуться к списку товаров</button>
      </Link>
    </div>
  );
}