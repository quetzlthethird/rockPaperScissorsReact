import './Kittypawimage.css';
import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class Kittypawimage extends Component {
  render() {
    return (
      <div>
          {/* <h3>Hi</h3> */}
        <div className="kittypawContainerAll">

          <div className="kittypawImage"
            // style = {{ backgroundImage: `url(${process.env.PUBLIC_URL +'/paw-sign-of-rock-paper-scissors-game.svg'})` }}
          >

          </div>
          <div className="kittypawContainer">
            
            <div><a href="/rock" className="kittypaw"></a></div>
            {/* <div className="kittypaw"><a href="/rock">ROCKS</a></div> */}
            <div ><a href="/paper" className="kittypaw"></a></div>
            <div ><a href="/scissors" className="kittypaw"></a></div>
            {/* <button></button> */}
          </div>
            
        </div> 

      </div> //end return
    )
  }
}
            // <div className="kittypawImage">
            //   <img 
            //     alt = "cute kitten paws demonstrate rock paper scissors"
            //     src = '/paw-sign-of-rock-paper-scissors-game.jpg'>
            //   </img>
            // </div>


            // <div className="kittypawContainer">

            //   <button className="kittypawRock">
            //     <Link to="/rock">
            //       ROCK
            //     </Link>
            //   </button>
            
            //   <button className="kittypawPaper">
            //     PAPER
            //   </button>
            
            //   <button className="kittypawScissors">
            //     SCISSORS
            //   </button>
            // </div>  