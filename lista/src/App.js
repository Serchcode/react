import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Lista from './Components/Lista/Lista';

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
      <div className="App">
        <AppBar title="Menu" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Lista/>
      </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
