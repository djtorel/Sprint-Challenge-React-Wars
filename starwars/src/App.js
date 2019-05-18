import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      next: '',
      prev: '',
      starwarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(({ results, next, previous }) => {
        console.log();
        this.setState({ starwarsChars: results, next, prev: previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNext = () => this.getCharacters(this.state.next);

  getPrevious = () => this.getCharacters(this.state.prev);

  render() {
    const { starwarsChars, next, prev } = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button disabled={prev ? false : true} onClick={this.getPrevious}>
          Previous
        </button>
        <button disabled={next ? false : true} onClick={this.getNext}>
          Next
        </button>
        {starwarsChars.length > 0 ? (
          <CharacterList list={starwarsChars} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default App;
