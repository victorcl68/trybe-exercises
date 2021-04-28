import React, { Component } from 'react';

import PokedexClassExported from './components/Pokedex'

import PokemonsData from './Data'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <PokedexClassExported PokedexDestructured={PokemonsData}/>
      </div>
    )
  }
}

export default App;
