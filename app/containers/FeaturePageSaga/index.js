import React from 'react';
import { Helmet } from 'react-helmet';
import ListProductSaga from '../../components/ListProductSaga/index';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Product List Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <h1>Product List Page</h1>
      <ListProductSaga />
    </div>
  );
}
