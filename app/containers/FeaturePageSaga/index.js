/*
 * FeaturePage
 *
 * List all the features
 */
import React, {memo, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import {REDUX_LIST_PRODUCT} from "../Saga/listProduct/constants";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "../Saga/listProduct/reducer";
import {useInjectSaga} from "../../utils/injectSaga";
import saga from "../Saga/listProduct/saga";
import PropTypes from "prop-types";
import {createStructuredSelector} from "reselect";
import {makeSelectListProduct} from "../Saga/listProduct/selectors";
import {actionLoadProductByCategories} from "../Saga/listProduct/actions";
import {connect} from "react-redux";
import {compose} from "redux";

function FeaturePageSaga({ listProducts, loadList,}) {

    const key = REDUX_LIST_PRODUCT;
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    useEffect(() => {
        const categoriesId = '2';
        loadList(categoriesId);
    }, []);

  return (
    <div>
      <Helmet>
        <title>Product List Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <p>Product List Page</p>
      </H1>
        <div key={listProducts}>
            <div key={listProducts}>
                { listProducts.length &&
                listProducts.map(item => <p key={item}
                >{item}</p>)
                }
            </div>
        </div>
    </div>
  );
}

FeaturePageSaga.propTypes = {
    listProducts: PropTypes.any,
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
)(FeaturePageSaga);
