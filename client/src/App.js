import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Homepage from './components/Homepage';



class App extends Component {
  render() {
    return(
      <div>
        <Route exact path = "/" component = { Homepage } />
      </div>
    )
  }
  
}

export default App ;