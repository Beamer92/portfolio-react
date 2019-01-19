import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router'
import Home from './Home'
import Project from './Project'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    state = {
      projects: []
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' Component={Home}/>
          <Route path='/p1' render={(props) => <Project props={this.state.projects[0]}/>}/>
          <Route path='/p2' render={(props) => <Project props={this.state.projects[1]}/>}/>
    <Route path='/p3' render={(props) => <Project props={this.state.projects[2]}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
