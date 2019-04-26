import React, { Component } from 'react';
import './App.css';
import SetPlayerStatus from './components/SetPlayerStatus'


class App extends Component {

  state = {
    board: Array(9).fill(null),
    player: null,
    winner: null,
    number: 1,
    draw: null
  }

  reset = () => {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null,
      number: 1,
      draw: null
    })
  }
  handelPlayer = (player) => {

    this.setState({ player })
  }

  checkWinner = () => {

    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],

    ]

    this.checkMath(winLines)

  }

  checkMath = (winLines) => {
    const { board, player } = this.state

    for (let index = 0; index < winLines.length; index++) {

      const [a, b, c] = winLines[index]


      if (board[a] && board[a] === board[b] && board[a] === board[c]) {

        this.setState({
          winner: player
        })
      }

    }
  }
  checkDraw = () => {
    if (this.state.number === this.state.board.length) {
      this.setState({
        draw: true
      })

    }
  }


  handelClick = (index) => {


    if (this.state.player) {
      let newBoard = this.state.board
      if (this.state.board[index] === null && !this.state.winner) {
        newBoard[index] = this.state.player
        let newPlayer = this.state.player === "X" ? "O" : "X"
        let newNumber = this.state.number
        newNumber++
        this.setState({
          board: newBoard,
          player: newPlayer,
          number: newNumber
        })
        this.checkWinner()
        this.checkDraw()

      }
    }
  }
  createBox = () => {
    return this.state.board.map((box, index) => <div
      onClick={() => this.handelClick(index)}
      key={index}
      className="box">
      {box}
    </div>)
  }
  render() {

    console.log(this.state.board);





    return (
      <div className="container">

        <h1>Tic Tac Toe Game</h1>

        <SetPlayerStatus handelPlayer={(e) => this.handelPlayer(e)} player={this.state.player} winner={this.state.winner} draw={this.state.draw} reset={this.reset} />

        <div className="board">
          {this.createBox()}
        </div>

      </div>

    )

  }
}


export default App;



