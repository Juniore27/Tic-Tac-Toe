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
          <h2>The winner is {props.winner}</h2> <button onClick={() => handelPlayAgain()}>Play again</button>
        </>
      )
    } else {
      return props.player ? <h2> Next  player is{props.player} </h2> :
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