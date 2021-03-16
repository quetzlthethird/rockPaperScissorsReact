import React from 'react';
import './navbar.css' ;
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      
      <div className="navbar"> 
        <Link className = "navbar-link" to= "/">
          Home
        </Link>
        
        <Link className = "navbar-link" to="/game">
          Game
        </Link>
      </div>
    </div>
  )
}
