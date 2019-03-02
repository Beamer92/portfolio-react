import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Project from './Project'
import './App.css';
import myData from './projects.json'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      projects: [],
      homePage: {}
    }
  }

  componentWillMount(){
    const jData = myData
    this.setState({
      projects: jData.projects.map(x => x),
      homePage: jData.homePage
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/p0' render={(props) => <Project projData={this.state.projects[0]}/>}/>
          <Route path='/p1' render={(props) => <Project projData={this.state.projects[1]}/>}/>
          <Route path='/p2' render={(props) => <Project projData={this.state.projects[2]}/>}/>
          <Route path='/' render={(props) => <Home homePage={this.state.homePage} proj={this.state.projects}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
