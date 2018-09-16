import React, { Component } from 'react';
import Body, { Body2, Body3 } from './components/Body'
// import { Header } from "./components/Header"
import './App.css';
import Header from './components/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello" num={5} />
        <Body title="sometitle"/>
        <Body2 />
        <Body3 />
         
      </div>
    );
  }
}

export default App;
