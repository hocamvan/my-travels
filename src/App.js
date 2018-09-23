import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <p className="App-intro">
        <Travel
          photo="MontFuji.jpg"
          destination="Fuji"
          country="Japon"
          distance="10000km"
        />
         <Travel
          photo="SongDoong-Cave-2.jpg"
          destination="Son Doong Cave"
          country="VIet Nam"
          distance="10000km"
        />
        </p>
      </div>
    );
  }
}

export default App;
