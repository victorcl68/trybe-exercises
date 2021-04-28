import React, { Component } from 'react';

class PokemonClass extends Component {
  render() {
    const { PokemonInformation: { name, type, image, moreInfo, averageWeight: { value, measurementUnit } }} = this.props;
    return(
      <div className='EachPokemonDiv'>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ value} { measurementUnit }</p>
        <img src={image} alt={name}></img>
        <a href={moreInfo}><button>More Info</button></a>
      </div>
    );
  }
}

export default PokemonClass;
