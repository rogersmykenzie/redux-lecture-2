import React, { Component } from "react";
import {connect} from 'react-redux';
import {getStarWarsCharacters} from '../redux/starWarsReducer';
import {getRickMortyCharacters} from '../redux/rickMortyReducer';

class CharacterList extends Component {
  componentDidMount() {
    this.props.getRickMortyCharacters();
    this.props.getStarWarsCharacters();
  }
  render() {
    console.log(this.props)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <aside>
          <h1>Rick & Morty Characters</h1>
          <div>
            {/* Rick & Morty Characters Here */}
            {
              this.props.rickMorty.loading
                ? 'Loading...'
                : this.props.rickMorty.error || (this.props.rickMorty.characters.results && this.props.rickMorty.characters.results.map((val, i) => <p key={`bb${i}`}>{val.name}</p>))
            }
          </div>
        </aside>
        <aside>
          <h1>Star Wars Characters</h1>
          <div>
            {/* Star Wars Characters Here */}
            {
              this.props.starWars.loading
                ? 'Loading...'
                : this.props.starWars.error || this.props.starWars.characters.map((val, i) => <p key={`sw${i}`}>{val.name}</p>)
            }
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const {starWars, rickMorty} = reduxState;
  return {
    starWars,
    rickMorty
  }
}
export default connect(mapStateToProps, 
  {
    getRickMortyCharacters,
    getStarWarsCharacters
  })(CharacterList);