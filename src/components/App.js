import React, { Component } from 'react';
import Curious from './Curious';
import Small from './Small';
import Grumpy from './Grumpy';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Curious />
        <Small />
        <Grumpy />
      </div>
    );
  }
}

export default App;
