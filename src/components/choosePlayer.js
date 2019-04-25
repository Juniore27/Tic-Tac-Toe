import React, { Component } from 'react';
import './choosePlayer.css'
class Player extends Component {


 handelForm = (e) => {
  e.preventDefault()
  this.props.handelPlayer(e.target.player.value);



 }
 render() {
  return (
   <div className="setPlayer">

    <form onSubmit={(e) => this.handelForm(e)}>

     <label>
      <span class="playerX">Player X</span>
      <input type="radio" name="player" value="X" />
     </label>

     <label>

      <span class="playerY">Player O</span>
      <input type="radio" name="player" value="O" />

     </label>

     <label>

      <input class="start" type="submit" value="start" />
     </label>

    </form>
   </div>
  );
 }
}

export default Player; 