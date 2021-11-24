import React from 'react';

const Card = ({ category, brand, images, price, rating, title }) => (
  <div className="product-card">
    <div className="product-img-wrapper">
      <img className="product-img" src={images[0]} />
    </div>
    
    <div className="product-price-wrapper">
        <div className="product-rating">
          <span className="product-rating-text">{rating}</span>
        </div>
        <span className="product-price">{price}</span>
    </div>

    <div className="product-title">
        <h3 className="product-name">{title}r</h3>
        <span className="product-description">{category} | {brand}</span>
    </div>
      
    <div className="product-buttons-block">
      <button className="product-btn btn btn-default btn-m">
        <span className="product-wishlist">WISHLIST</span>
      </button>
      <button className="product-btn btn btn-primary btn-m">
        <span className="product-cart">ADD TO CART</span>
      </button>
    </div>
  </div>
);

export default Card;
