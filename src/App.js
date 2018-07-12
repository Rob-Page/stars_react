import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './component/Rating';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Rating/>
      </div>
    );
  }
}

export default App;
