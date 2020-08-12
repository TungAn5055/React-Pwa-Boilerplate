import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actionLoadProductByCategories } from '../../containers/Saga/listProduct/actions';
import {
  makeSelectListProduct
} from '../../containers/Saga/listProduct/selectors';
import { REDUX_LIST_PRODUCT } from '../../containers/Saga/listProduct/constants';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from '../../containers/Saga/listProduct/reducer';
import saga from '../../containers/Saga/listProduct/saga';
import Wrapper from './Wrapper';

function ListProductSaga({
     listProducts, loadList,
   }) {
  const key = REDUX_LIST_PRODUCT;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

    useEffect(() => {
        const categoriesId = '2';
        loadList(categoriesId);
    }, []);

  return (
      <div key={listProducts}>
          <p>123</p>
          {/*<button onClick={() => {*/}
          {/*    const categoriesId = '2';*/}
          {/*    loadList(categoriesId);*/}
          {/*}} >aaa</button>*/}
          <div key={listProducts}>
              { listProducts.length &&
                  listProducts.map(item => <p key={item}
                  >{item}</p>)
              }
          </div>
      </div>
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

