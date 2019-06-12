import React, { Component } from "react";
import {connect} from 'react-redux';
import {getStarWarsCharacters} from '../redux/starWarsReducer';
import {getBreakingBadCharacters} from '../redux/breakingBadReducer';


class CharacterList extends Component {
  componentDidMount() {
    this.props.getStarWarsCharacters();
    this.props.getBreakingBadCharacters();
  }
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <aside>
          <h1>Breaking Bad Characters</h1>
          <div>
            {/* Breaking Bad Characters Here */}
            {this.props.breakingBad.error}
            {this.props.breakingBad.loading ? '...Loading'
            : this.props.breakingBad.characters.map(val => (
              <p>{val.name}</p>
            ))}
          </div>
        </aside>
        <aside>
          <h1>Star Wars Characters</h1>
          <div>
            {/* Star Wars Characters Here */}
            {this.props.starWars.loading ? '...Loading'
            : this.props.starWars.characters.map(val => (
              <p>{val.name}</p>
            ))}
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const {starWars, breakingBad} = reduxState;
  return {
    starWars,
    breakingBad
  }
}
export default connect(mapStateToProps, 
  {
    getStarWarsCharacters,
    getBreakingBadCharacters
  })(CharacterList);