import React, { Component } from 'react';
import curious from './curious.jpg';
import small from './small.png';
import grumpy from './grumpy.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <button>Test Button</button>
        <img src={curious} />
        <img src={small} />
        <img src={grumpy} />
      </div>
    );
  }
}

export default App;
