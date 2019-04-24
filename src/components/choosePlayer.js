import React, { Component } from 'react';

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
      Player X
     <input type="radio" name="player" value="X" />
     </label>

     <label>

      Player O
     <input type="radio" name="player" value="O" />

     </label>

     <label>

      <input type="submit" value="start" />
     </label>

    </form>
   </div>
  );
 }
}

export default Player; 