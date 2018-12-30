import React, { Component } from 'react'
// css
import '../styles/Raffles.css';
import img from './images/dominos.png';

export default class raffles extends Component {
  render() {
    return (
      <div className='container'>
        <div className='raffles-container'>
            <div className='raffle'>
              <h2>Domino's</h2>
              <img className='raffle-image' src={img}/>
              <h3>$25 gift card</h3>
              <div className='raffle-info'>
                <span>Time left: 5:00</span>
                <span>Total entries: 200</span>
              </div>
            </div>
            
        </div>
      </div>
    )
  }
}
