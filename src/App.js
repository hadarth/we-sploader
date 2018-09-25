import React, { Component } from 'react';
import Sploader from './Sploader'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {percent: 13, value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onClick (value) {
    if (!isNaN(parseFloat(value))) { this.setState({percent: parseInt(value, 10)}) }
  }

  render() {
    return (
      <div>
        <label>
          Enter loading:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button onClick={() => this.onClick(this.state.value)}>Submit</button>
        </label>
        <Sploader percent={this.state.percent}/>
      </div>
    );
  }
}

export default App;
