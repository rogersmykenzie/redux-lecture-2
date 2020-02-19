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
        <section>
          <h1>Rick & Morty Characters</h1>
          <div>
            {/* Rick & Morty Characters Here */}
            {
              this.props.rickMorty.loading
                ? <img src='https://resources.humandx.org/static/img/loading_spinner.gif' alt='Loading..' />
                : this.props.rickMorty.error || (this.props.rickMorty.characters.results && this.props.rickMorty.characters.results.map((val, i) => <p key={`bb${i}`}>{val.name}</p>))
            }
          </div>
        </section>
        <section>
          <h1>Star Wars Characters</h1>
          <div>
            {/* Star Wars Characters Here */}
            {
              this.props.starWars.loading
                ? <img src='https://resources.humandx.org/static/img/loading_spinner.gif' alt='Loading..' />
                : this.props.starWars.error || this.props.starWars.characters.map((val, i) => <p key={`sw${i}`}>{val.name}</p>)
            }
          </div>
        </section>
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

// If we didn't need to use mapStateToProps, we still need something in that spot since our object with the functions we needed MUST be in the spot of the second argument. If this were the case, our export would look like the following using null as a fill-in:

// export default connect(null, 
//   {
//     getRickMortyCharacters,
//     getStarWarsCharacters
//   })(CharacterList);