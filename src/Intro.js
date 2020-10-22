import React, { useState } from 'react';
import image from './fans.svg';

function Intro(props) {
    const [player1,setPlayer1]=useState("");
    const [player2,setPlayer2]=useState("");
    const [dimension,setDimension]=useState(3);
    const handleplayerChange=(event,player)=>{
        if(player==="player1"){
            setPlayer1(event.target.value);
        }
        else{
            setPlayer2(event.target.value);
        }
    }
    const startGame=()=>{
        //console.log(player1+" "+player2+" "+dimension+" "+ new URLSearchParams({p1: player1,p2:player2}).toString());
        props.history.push({
            pathname: '/intro/game',
            search: "?" + new URLSearchParams({p1: player1,p2:player2,dim:dimension}).toString()
        })
    }
  return (
    <>
      <div class="main-content">
        <div id="side-content" class="side-content">
            <img src={image} alt=""/>
            <h2>Tic Tac Toe</h2>
            <p>Everyone is a player when they come to the board not aboard.</p>
        </div>
        <div class="form-container">
            <form id="form">
                <div id="form-content">
                    
                    <div class="floating-placeholder">
                    <input type="text" id="p1" name="p1" placeholder="1st Player Name :" value={player1} onChange={(event)=>{handleplayerChange(event,"player1")}}/>
                    </div>
                    
                    <div class="floating-placeholder">
                    <input type="text" id="p2" name="p2" placeholder="2nd Player Name :" value={player2} onChange={(event)=>{handleplayerChange(event,"player2")}}/>
                    </div>
                    
                    
                    <div class="floating-placeholder">
                    <input type="number" id="dimensions" name="dimension" min="3" max="10" placeholder="Dimension" value={dimension} onChange={(event)=>setDimension(event.target.value)}/>
                    </div>
                    
                    <br/>
                </div>
            </form>
            <button id="start" class="btn-grad" onClick={startGame}>Start Game</button>
        </div>
    </div>
    </>
  );
}

export default Intro;
