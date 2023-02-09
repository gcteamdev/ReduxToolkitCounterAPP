import React from 'react';
import {useState} from 'react';
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
    <div className="count"> {count}</div>   
    <div className="btnsCtn">
    <button className="btn lg-btn btn-dark" onClick={() =>{
        setCount(count+1)
    }}> Increment</button>
    <button className="btn lg-btn btn-dark"onClick={() =>{
        setCount(count-1)
    }}> Decrement</button>
    </div>
    </div>
  )
}

export default Counter