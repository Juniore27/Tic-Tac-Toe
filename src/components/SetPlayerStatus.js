import React from 'react';
import Player from './choosePlayer'

const SetPlayerStatus = (props) => {


  const handelPlayAgain = () => {
    props.reset()


  }
  const checkWinner = () => {
    if (props.winner) {
      return (
        <>
          <h2 class="winner">The winner is {props.winner}</h2> <button class="playAgain" onClick={() => handelPlayAgain()}>Play again</button>
        </>
      )
    } else if (props.draw) {

      return (
        <>
          <h2 class="draw">Result draw {props.winner}</h2>
          <button class="playAgain" onClick={() => handelPlayAgain()}>Play again</button>
        </>
      )

    }
    else {
      return props.player ? <h2 class="nextPlayer"> Next  player is {props.player} </h2> :
        <Player handelPlayer={props.handelPlayer} player={props.player} />
    }
  }

  return (

    <>
      {checkWinner()}
    </>
  );
}

export default SetPlayerStatus;