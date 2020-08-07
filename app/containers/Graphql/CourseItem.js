import React from 'react';

const CourseItem = props => (
  <React.Fragment>
    <h1>Pokémons</h1>
    <p>
      <a href="https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon">
        The Pokémon franchise
      </a>
    </p>
    <div className="container1">
      {/* eslint-disable-next-line react/prop-types */}
      {props.data &&
        props.data.pokemons &&
        props.data.pokemons.map((pokemon, index) => (
          <div key={index} className="card">
            <img src={pokemon.image} />
            <div className="card-body">
              <h5>{pokemon.name}</h5>
            </div>
          </div>
        ))}
    </div>
  </React.Fragment>
);
export default CourseItem;
