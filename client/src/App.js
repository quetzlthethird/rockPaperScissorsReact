import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/navbar/Navbar';
import Game from './components/game/Game';



class App extends Component {
  render() {
    return(
      <div>
        <Navbar> </Navbar>  
          <Switch>
            <Route exact path = "/" component = { Homepage } />
            <Route exact path = '/game' component = { Game } />
          </Switch>
      </div>
    )
  }
  
}

export default App ;