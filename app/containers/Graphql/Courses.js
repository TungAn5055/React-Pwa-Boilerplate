import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Course from './CourseItem';

const customClient = new ApolloClient({
  uri: process.env.URL_BACKEND_SERVER_2,
});
console.log(process.env.URL_BACKEND_SERVER);
console.log('annn1');
console.log(process.env.URL_BACKEND_SERVER_2);

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
  // import { useQuery } from '@apollo/react-hooks';
  // import GET_PRODUCTS_POKEMON from '../../queries/getPokemons.graphql';
  // import GET_PRODUCTS_BY_SKU from '../../queries/getProductsBySku.graphql';
  // const count = 10;
  // const {loading, error, data} = useQuery(GET_PRODUCTS_POKEMON, {
  //   variables: {first: count}
  // });
  // if (loading) return null;
  // if (error) return <p>Error :(</p>;
  // return (
  //   <Course data={data} />
  // );
};
export default Courses;
