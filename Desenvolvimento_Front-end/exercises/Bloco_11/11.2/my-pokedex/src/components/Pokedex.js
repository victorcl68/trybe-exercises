import React, { Component } from 'react';

import PokemonClassExported from './Pokemon';

class PokedexClass extends Component {
  render() {
    const { PokedexDestructured } = this.props;
    return (
      <div className='PokemonsDiv'>
        {PokedexDestructured.map((EachPokemon) => {
          return (
          <PokemonClassExported key={EachPokemon.id} PokemonInformation={EachPokemon}/>
          )
        })}
      </div>
    );
  }
}

export default PokedexClass;
