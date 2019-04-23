// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {

//   state = {
//     board: Array(9).fill(null),
//     player: "O"
//   }

//   board2 = Array(12).fill({ id: 1 })


// checkWinner = () => {

//   let winLines = [
//     ["0", "1", "2"],
//     ["3", "4", "5"],
//     ["6", "7", "8"],
//     ["0", "3", "6"],
//     ["1", "4", "7"],
//     ["2", "5", "8"],
//     ["0", "4", "8"],
//     ["2", "4", "6"],

//   ]
//   for (let index = 0; index < winLines.length; index++) {

//     const [a, b, c] = winLines[index]
//     console.log(this.state.board[a]);

//     if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] ===
//       this.state.board[c]) {

//       alert('you won')
//     }
//   }

// }
//   handelClick = (index) => {

//     let newBoard = this.state.board


//     if (this.state.board[index] === null) {

//       newBoard[index] = this.state.player
//       let newPlayer = this.state.player === "X" ? "0" : "X"

//       this.setState({
//         board: newBoard,
//         player: newPlayer
//       })
//       this.checkWinner()
//     }
//   }


//   render() {

//     const Box = this.state.board.map((box, index) => <div onClick={() => this.handelClick(index)} key={index} className="box">{box}</div>)
//     return (
//       <div className="container">
//         <h1>Tic-tac-toe-app</h1>
//         <div className="board">
//           {Box}
//         </div>
//       </div>

//     )

//   }
// }


// export default App;



import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    board: Array(9).fill(null),
    player: "X",
    winner: null
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

    for (let index = 0; index < winLines.length; index++) {

      const [a, b, c] = winLines[index]
      console.log(this.state.board[a])
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        alert("you won")
        this.setState({
          winner: this.state.player
        })
      }

    }

  }


  handelClick = (index) => {
    let newBoard = this.state.board
    if (this.state.board[index] === null && !this.state.winner) {
      newBoard[index] = this.state.player
      let newPlayer = this.state.player === "X" ? "0" : "X"

      this.setState({
        board: newBoard,
        player: newPlayer
      })
      this.checkWinner()
    }
  }

  render() {
    console.log(null)

    const Box = this.state.board.map((box, index) => <div
      onClick={() => this.handelClick(index)}
      key={index}
      className="box">
      {box}
    </div>)
    return (
      <div className="container">
        <h1>Tic Tac Toe Game</h1>
        <div className="board">
          {Box}
        </div>
      </div>

    )

  }
}


export default App;



