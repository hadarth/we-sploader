import React, { Component } from 'react';
import Sploader from './Sploader'
import './Sploader.css';

class App extends Component {
  render() {
    return (
      <Sploader percent={25}/>
    );
  }
}

export default App;
