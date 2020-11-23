// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags

// src/App.js

import React, { Component } from "react"
// 1) importing the child class component Dice to be used in the render.
import Dice from "./Dice"
import Log from "./Log"

import dice from "../assets/dice.png"
import dice1 from "../assets/dice-1.png"
import dice2 from "../assets/dice-2.png"
import dice3 from "../assets/dice-3.png"
import dice4 from "../assets/dice-4.png"
import dice5 from "../assets/dice-5.png"
import dice6 from "../assets/dice-6.png"

class Board extends Component {
  // 2) creates an object to be used in the parent to be called on from the child and creates an ability to use the current instant value of state.
  constructor(props) {
    super(props)
    // 3) Initializing the state to be used and declares its value or item.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: [],
    }
  }

  handleRoll = () => {
    // 4) Destructures this.state to manipulate the values of rollImages and diceLog.
    let { rollImages, diceLog } = this.state
    // 5) Declaring a variable randomNum to round up to nearest whole number of the length of rollImages.
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6) adds a new state of the currentPic to log a new dice roll changing the old state.
    this.setState({ currentPic: newRoll, diceLog: [...diceLog, newRoll] })
  }

  // 7) The render is rendering the react element/ elements into the DOM to display the spcecified HTML elements onto the webpage.
  render() {
    const { currentPic, diceLog } = this.state
    return (
      <div id="board-container">
        {/* // 8) Dice is being called to be rendered on the page from its child component. */}
        <Dice
          // 9) Calles the instance of the function of this.handleRoll to be displayed on the webpage.
          roll={this.handleRoll}
          currentPic={currentPic}
        />
        <Log diceLog={diceLog} />
      </div>
    )
  }
}

// 10) exports all of the data in our class Board to return to react and update as a component.
export default Board
