import React, { Component } from "react";
import Header from "./routes/Header.jsx";
import Main from "./routes/Main.jsx";

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
