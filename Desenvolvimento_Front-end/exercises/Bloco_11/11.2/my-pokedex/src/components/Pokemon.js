import React, { Component } from 'react';

import PropTypes from 'prop-types';

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

PokemonClass.propTypes = {
  PokemonInformation: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
}

export default PokemonClass;
