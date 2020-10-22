import React from 'react'

const Cell = (props) => {
    return (
        <>
           <div className="cell" id={props.id} onClick={props.onClick}>{props.data}</div> 
        </>
    )
}

export default Cell
