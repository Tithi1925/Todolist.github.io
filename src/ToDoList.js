import React from "react";
import './index.css';
const ToDoLists = (props) => {
 return( 
    <>
 <div className="second_div">
    <button id="btn" onClick={() =>{
      props.onSelect(props.id)
    }}>x</button>
    <li>{props.text}</li>
 </div>
 </>
 );
};
export default ToDoLists;