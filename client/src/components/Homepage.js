import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import Kittypawimage from './KittypawImage/Kittypawimage';


export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        
        {/* <h1>ITS THE HOMEPAGE</h1> */}

          <div>
            <Kittypawimage/>
          </div>

        <div>
          <Link to="/license">Image used details</Link>
        </div>
      </div>
    )
  }
}
