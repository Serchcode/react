import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Routes from './routes';


injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <AppBar title="Peliculas" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Routes/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
