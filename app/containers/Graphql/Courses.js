import React from 'react';
import { Query } from '@apollo/client';
import gql from 'graphql-tag';
import { ApolloClient } from '@apollo/client/core';
import Course from './CourseItem';

const customClient = new ApolloClient({
  uri: process.env.URL_BACKEND_SERVER_2,
});

const Courses = () => {
  const GET_DOGS = gql`
    {
      pokemons(first: 150) {
        id
        number
        name
        image
        evolutions {
          id
          number
          name
          image
        }
      }
    }
  `;
  return (
    <Query query={GET_DOGS} client={customClient}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return <Course data={data} />;
      }}
    </Query>
  );
};
export default Courses;
