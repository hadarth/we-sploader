import React, { Component } from 'react';
import Sploader from './Sploader'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {percent: '', value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onClick (value) {
    this.setState({percent: value})
  }

  render() {
    return (
      <div className='ss'>
        <label className='padded'>
          Enter loading:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button onClick={() => this.onClick(this.state.value)}>Submit</button>
        </label>
        <Sploader percent={this.state.percent || 13}/>
      </div>
    );
  }
}

export default App;
