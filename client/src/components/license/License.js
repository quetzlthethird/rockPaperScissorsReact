import React, { Component } from 'react'
import Kittypawimage from '../KittypawImage/Kittypawimage'
import './license.css';

export default class License extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="image"><Kittypawimage/></div>
          <p>
            Image used under free license agreement from
            <a href="https://www.vecteezy.com/free-vector/rock-paper-scissors">
              Rock Paper Scissors Vectors by Vecteezy
            </a>
          </p>
        </div>
      </div>
    )
  }
}
