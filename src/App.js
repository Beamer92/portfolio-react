import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router'
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
