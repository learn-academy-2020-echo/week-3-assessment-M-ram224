// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1)
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2)
  constructor(props){
    super(props)
    // 3)
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4)
    let { rollImages, diceLog } = this.state
    // 5)
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6)
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7)
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 8)
        <Dice
          // 9)
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10)
export default Board
