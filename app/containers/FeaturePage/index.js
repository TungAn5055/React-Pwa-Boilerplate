/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import ListProduct from '../../components/ListProduct/index';

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
      <ListProduct />
    </div>
  );
}
