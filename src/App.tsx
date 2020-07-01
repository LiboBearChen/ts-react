import React, {Component} from 'react';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <PokemonSearch name="Libo" />
      </div>
    );
  }
}

export default App;
