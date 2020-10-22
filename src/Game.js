import React, { useState } from 'react';
import Cell from './Cell';
const queryString = require('query-string');

const Game = (props) => {
    const parsed = queryString.parse(props.location.search);
    console.log(parsed);
    let col=parsed.dim;
    let row=parsed.dim;
    let initBoard=[];
    for(let i=0;i<row;i++){
        let array=[];
        for(let j=0;j<col;j++){
            array.push("");
        }
        initBoard.push(array);
    }
    const [board,setBoard]=useState(initBoard);
    const [chance,setChance]=useState(1);
    //console.log(initBoard);
    const handleBoardChange=(id)=>{
        let newboard=board.map((cell_row,index_col)=>{
            return cell_row.map((cell,index_row)=>{
                if(String(index_col)+String(index_row)===id && cell===""){
                    //console.log(`${index_col}${String(index_row)} selected`);
                    if(chance%2===1)
                    return "X";
                    else 
                    return "O";
                }
                else{
                    return cell;
                }
            })
        });
        
        setBoard(newboard);
        setChance(chance+1);

        if(chance===parsed.dim*parsed.dim){
            window.alert("draw");
        }
        //console.log(checkWinner(board));
        if(checkWinner(newboard)){
            let winner=chance%2===1?parsed.p1:parsed.p2; 
            window.alert(`${winner} is winner`);
        }
    }
    const checkWinner=(board_check)=>{
        console.log(board_check);
        if(chance<(parsed.dim)){
            return false;
        }
        let dimension=+parsed.dim;
        let count=0;
        for(let i=0;i<dimension;i++){
            let first=board_check[i][0];
            if(first!=="")
            {
                count++;
                for(let j=1;j<dimension;j++){
                    if(first===board_check[i][j])
                    count++;
                }
                
                if(count===dimension){
                    return true;
                }
                count=0;
            }
        }
    
        /*Check every column*/
        count=0;
        for(let i=0;i<dimension;i++){
            let first=board_check[0][i];
            if(first!=="")
            {
                count++;
                for(let j=1;j<dimension;j++){
                    if(first===board_check[j][i])
                    count++;
                }
                if(count===dimension){
                    return true;
                }
                count=0;
            }
        }
    
        /*Check both Diagonal */
        //First diagonal
        count=0;
        if(board_check[0][0]!==""){
        for(let i=0;i<dimension;i++){
            if(board_check[0][0]===board_check[i][i])
            count++;
        }
        if(count===dimension){
            return true;
        }
        }
        //Second diagonal
        count=0;
        if(board_check[dimension-1][0]!==""){
        for(let i=0;i<dimension;i++){
            if(board_check[dimension-1][0]===board_check[dimension-1-i][i])
            count++;
        }
        if(count===dimension){
            return true;
        }
        }
        return false;
    }
    const Restart=()=>{
        props.history.replace("/intro");
    }
    return (
        <>
        <section id="grid-holder">
        <div id="turn" class="turn">{chance%2===1 ?parsed.p1:parsed.p2}</div>
        <div  id="grid-container" class="grid">
            {board.map((cell_intial,index1)=>{
                return <div className="row">{cell_intial.map((cell,index2)=>{
                    let id1=String(index1)+String(index2);
                    return <Cell data={cell} id={id1} onClick={()=>handleBoardChange(id1)}/>
                })}</div>;
            })}
        </div>
        <button id="restart" class="btn-grad" onClick={Restart}>restart</button>
        </section>
        </>
    )
}

export default Game
