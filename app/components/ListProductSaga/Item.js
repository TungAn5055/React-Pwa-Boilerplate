import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './ListView.scss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCartId } from '../../containers/HomePage/selectors';
import { actionAddToCartSimpleProduct } from '../../containers/Saga/listProduct/actions';

// eslint-disable-next-line react/prop-types
function Item({ item, cartId, onClickAddToCart }) {
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
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            className="product-grid__btn product-grid__add-to-cart"
            onClick={() => {
              onClickAddToCart(cartId, 1, item.sku);
            }}
          >
            <i className="fa fa-cart-arrow-down" /> Add to cart
          </button>
          <span className="product-grid__btn product-grid__view">
            <i className="fa fa-eye" /> View more
          </span>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  cartId: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  onClickAddToCart: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cartId: makeSelectCartId(),
});
export function mapDispactchToProps(dispatch) {
  return {
    onClickAddToCart: (cartId, itemQuantity, itemSkus) => {
      dispatch(actionAddToCartSimpleProduct(cartId, itemQuantity, itemSkus));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispactchToProps,
);

export default compose(
  withConnect,
  memo,
)(Item);
