import React, { Component } from 'react';
import Header from './routes/Header';
import Main from './routes/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-view">
        <Header/>
        <Main/>  
      </div>
    );
  }
}

export default App;
