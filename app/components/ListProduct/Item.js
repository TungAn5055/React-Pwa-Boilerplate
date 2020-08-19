import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './ListView.scss';
// eslint-disable-next-line import/order
import { useMutation } from '@apollo/react-hooks';
import ADD_SIMPLE_PRODUCT_TO_CART from '../../queries/addSimpleProductsToCart.graphql';
// eslint-disable-next-line import/order
import { createStructuredSelector } from 'reselect';
import { makeSelectCartId } from '../../containers/HomePage/selectors';

const Item = props => {
  // eslint-disable-next-line react/prop-types
  const { item, cartId } = props;

  // eslint-disable-next-line consistent-return
  function onClickAddToCart() {
    const quantitys = 1;
    const skus = item.sku;

    console.log('hhhr');
    console.log(cartId);
    console.log(quantitys);
    console.log(skus);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useMutation(ADD_SIMPLE_PRODUCT_TO_CART, {
      variables: { cart_id: cartId, quantity: quantitys, sku: skus },
    });
    if (loading) return null;
    if (error || data.products.items.length === 0) {
      console.log(error);
      return null;
    }
    console.log(data);
  }

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
            onClick={onClickAddToCart}
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
};

// export default Item;

Item.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  cartId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  cartId: makeSelectCartId(),
});
// export function mapDispactchToProps(dispatch) {
//   return {
//     onClickAddToCart: () => {
//       dispatch(actionAddToCart());
//     },
//   };
// }

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Item);
