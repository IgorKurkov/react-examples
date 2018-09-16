import React, { Component } from 'react';
import Body from './components/Body'
import Header from "./components/Header"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello" num={5} />
        <Body title="sometitle"/>
        
      </div>
    );
  }
}

export default App;
