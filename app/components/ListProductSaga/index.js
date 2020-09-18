import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actionLoadProductByCategories } from '../../containers/Saga/listProduct/actions';
import { makeSelectListProduct } from '../../containers/Saga/listProduct/selectors';
import { REDUX_LIST_PRODUCT } from '../../containers/Saga/listProduct/constants';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from '../../containers/Saga/listProduct/reducer';
import saga from '../../containers/Saga/listProduct/saga';
import Item from '../ListProductSaga/Item';
import CenteredSection from '../../containers/HomePage/CenteredSection';

function ListProductSaga({ listProducts, loadList }) {
  const key = REDUX_LIST_PRODUCT;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const categoriesId = '2';
    loadList(categoriesId);
  }, []);
  return (
    <CenteredSection>
      <div className="product-grid product-grid--flexbox">
        <div className="product-grid__wrapper">
          {/* eslint-disable-next-line array-callback-return */}
          {listProducts.length > 0 &&
            listProducts.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Item item={item} key={index} />
            ))}
        </div>
      </div>
    </CenteredSection>
  );
}

ListProductSaga.propTypes = {
  listProducts: PropTypes.array,
  loadList: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  listProducts: makeSelectListProduct(),
});
export function mapDispatchToProps(dispatch) {
  return {
    loadList: categoriesId => {
      dispatch(actionLoadProductByCategories(categoriesId));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ListProductSaga);
