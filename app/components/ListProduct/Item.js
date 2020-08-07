import React from 'react';
import './ListView.scss';

const Item = props => {
  const { item } = props;
  return (
    <div className="product-grid__product">
      <div className="product-grid__img-wrapper">
        <img
          src={item.small_image.url}
          alt="Img"
          className="product-grid__img"
        />
      </div>
      <span className="product-grid__title">{item.name}</span>
      <span className="product-grid__price">
        {item.price.regularPrice.amount.value}
        {item.price.regularPrice.amount.currency === 'USD' ? '$' : null}
      </span>
      <div className="product-grid__extend-wrapper">
        <div className="product-grid__extend">
          <p className="product-grid__description">Sku: {item.sku}</p>
          <span className="product-grid__btn product-grid__add-to-cart">
            <i className="fa fa-cart-arrow-down" /> Add to cart
          </span>
          <span className="product-grid__btn product-grid__view">
            <i className="fa fa-eye" /> View more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
