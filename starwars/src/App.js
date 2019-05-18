import React, { Component } from 'react';
import styled from 'tachyons-components';

import './App.css';
import CharacterList from './components/CharacterList';
import PageButton from './components/PageButton';

const AppContainer = styled('div')`
  flex
`;

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

  componentDidUpdate() {
    window.scrollTo(0, 0);
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
        this.setState({ starwarsChars: results, next, prev: previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNext = () => this.getCharacters(this.state.next);

  getPrevious = () => this.getCharacters(this.state.prev);

  render() {
    const {
      state: { starwarsChars, next, prev },
      getNext,
      getPrevious,
    } = this;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <AppContainer>
          <PageButton
            direction="left"
            action={getPrevious}
            active={prev ? true : false}
          >
            {'<'}
          </PageButton>
          {starwarsChars.length > 0 ? (
            <CharacterList list={starwarsChars} />
          ) : (
            <div>Loading...</div>
          )}
          <PageButton
            direction="right"
            action={getNext}
            active={next ? true : false}
          />
        </AppContainer>
      </div>
    );
  }
}

export default App;
