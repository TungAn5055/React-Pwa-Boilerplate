import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LoadingIndicator from 'components/LoadingIndicator';
import Item from './Item';
import GET_PRODUCTS_BY_CATEGORY from '../../queries/getProductsByCategory.graphql';
import CenteredSection from '../../containers/HomePage/CenteredSection';

const ListProduct = () => {
  const categoriesId = '2';
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category_id: categoriesId, pageSize: 12 },
  });
  if (loading) return <LoadingIndicator />;
  if (error || data.products.items.length === 0) {
    console.log(error);
    return null;
  }
  return (
    <CenteredSection>
      <div className="product-grid product-grid--flexbox">
        <div className="product-grid__wrapper">
          {/* eslint-disable-next-line array-callback-return */}
          {data.products.items.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Item item={item} key={index} />
          ))}
        </div>
      </div>
    </CenteredSection>
  );
};

export default ListProduct;
