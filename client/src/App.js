// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/navbar/Navbar';
import Game from './components/game/Game';
import License from './components/license/License';



class App extends Component {
  render() {
    return(
      <div>
        <Navbar> </Navbar>  
          <Switch>
            <Route exact path = "/" component = { Homepage } />
            <Route exact path = '/game' component = { Game } />
            <Route exact path = '/license' component = { License } />
          </Switch>
      </div>
    )
  }
  
}

export default App ;