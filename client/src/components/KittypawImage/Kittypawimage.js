import './Kittypawimage.css';


import React, { Component } from 'react'

export default class Kittypawimage extends Component {
  render() {
    return (
      <div>
          {/* <h3>Hi</h3> */}
        <div>
            <div className="kittypawContainer">

              <div className="kittypawRock">
              </div>
            
              <div className="kittypawPaper">
              </div>
            
              <div className="kittypawScissors">
              </div>
            </div>  

            
              <div className="kittypawImage">
                <img 
                  alt = "cute kitten paws demonstrate rock paper scissors"
                  src = '/paw-sign-of-rock-paper-scissors-game.jpg'>
                </img>
              </div>
           

        </div> 

      </div> //end return
    )
  }
}
