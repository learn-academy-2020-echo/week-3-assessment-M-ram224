// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags

// src/App.js

import React, { Component } from "react"
// 1) import Dice from is importing the child class component Dice to the Board component to be used in the parent render.
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
  // 2) The constructor() block creates an object in the parent to give an ability to use the current instant value of state. establishes initial values of the state when the component mounts.
  constructor(props) {
    super(props)
    // 3) this.state is initializing the state to be used and declares its value or items.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: [],
    }
  }

  handleRoll = () => {
    // 4) Local variable that destructures this.state to manipulate the values of rollImages and diceLog.
    let { rollImages, diceLog } = this.state
    // 5) Declaring a local variable randomNum to round up to nearest whole number rollImages.length between 1 and 6.
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6) this.setState adds a new state of the currentPic to log a new dice roll changing the old state. Uses the spread operator to add the value of dicelog + the newRoll.
    this.setState({ currentPic: newRoll, diceLog: [...diceLog, newRoll] })
  }

  // 7) The render is rendering the react element/ elements into the DOM to display the spcecified HTML elements onto the webpage. It re-runs when state is updated using this.setState, also loaded when component is initially called.
  render() {
    const { currentPic, diceLog } = this.state
    return (
      <div id="board-container">
        {/* // 8) Dice is being called to be rendered on the page from its child component. */}
        <Dice
          // 9) roll= Calls the instance of the function of this.handleRoll to be displayed on the webpage. Child component will refer to the method as { this.props.roll }
          roll={this.handleRoll}
          currentPic={currentPic}
        />
        <Log diceLog={diceLog} />
      </div>
    )
  }
}

// 10) export default Board, exports all of the data in our class Board to return to react and update as a component.
export default Board
