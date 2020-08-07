/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
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
      <H1>
        <p>Product List Page</p>
      </H1>
      <ListProduct />
    </div>
  );
}
