import React from 'react';
import { Helmet } from 'react-helmet';
import Courses from './Courses';
// import ApolloClient from '@apollo/client';
// const client = new ApolloClient({
//   uri: process.env.URL_BACKEND_SERVER_BK,
// });

// const {  client } = this.props.client;

// console.log(process.env.URL_BACKEND_SERVER);
export default function Graphql() {
  return (
    <div>
      <Helmet>
        <title>Graphql Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <div className="container">
        <nav className="navbar navbar-dark bg-primary" />
        <div>
          <Courses />
        </div>
      </div>
    </div>
  );
}
