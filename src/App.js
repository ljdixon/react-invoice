import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IncorporationForm from './IncorporationForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IncorporationForm />
      </div>
    );
  }
}

export default App;
