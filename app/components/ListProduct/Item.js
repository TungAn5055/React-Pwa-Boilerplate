import React, { memo } from 'react';
import './ListView.scss';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useMutation } from '@apollo/react-hooks';
import { makeSelectCartId } from '../../containers/HomePage/selectors';
import ADD_SIMPLE_PRODUCT_TO_CART from '../../queries/addSimpleProductsToCart.graphql';
// eslint-disable-next-line no-unused-vars
import LoadingIndicator from 'components/LoadingIndicator';

function Item(props) {
  // eslint-disable-next-line react/prop-types
  const { item, cartId } = props;
  const quantitys = 1;
  const skus = item.sku;

  console.log('hhhr');
  console.log(cartId);
  console.log(quantitys);
  console.log(skus);

  // eslint-disable-next-line no-shadow
  const [onClickAddToCart, { loading: LoadingIndicator }] = useMutation(
    ADD_SIMPLE_PRODUCT_TO_CART,
    {
      variables: { cart_id: cartId, quantity: quantitys, sku: skus },
      fetchPolicy: 'no-cache',
      onCompleted(data) {
        console.log(data);
      },
      onError(error) {
        console.log(error.message);
        return <LoadingIndicator />;
      },
    },
  );

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
}

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
