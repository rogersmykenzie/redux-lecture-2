import React, { Component } from "react";
import axios from "axios";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakingBadLoading: true,
      breakingBad: [],
      starWarsLoading: true,
      starWars: []
    };
  }

  componentDidMount() {
    axios
      .get("https://www.breakingbadapi.com/api/character/random?limit=10")
      .then(response => {
        this.setState({
          breakingBad: response.data,
          breakingBadLoading: false
        });
      });

    axios.get("https://swapi.co/api/people").then(response => {
      this.setState({
        starWars: response.data.results,
        breakingBadLoading: false
      });
    });
  }

  render() {
    console.log(this.props);
    return (
      <div style={{ display: "flex", borderBottom: "1px solid gray" }}>
        <aside style={{ borderRight: "1px solid gray" }}>
          <h1>Breaking Bad Characters</h1>
          <div>
            {this.state.breakingBadLoading && "Loading..."}
            {this.state.breakingBad.map(character => (
              <p key={character.char_id}>{character.name}</p>
            ))}
          </div>
        </aside>
        <aside>
          <h1>Star Wars Characters</h1>
          <div>
            {this.state.breakingBadLoading && "Loading..."}
            {this.state.starWars.map(character => {
              return <p key={character.name}>{character.name}</p>;
            })}
          </div>
        </aside>
      </div>
    );
  }
}

export default CharacterList;
