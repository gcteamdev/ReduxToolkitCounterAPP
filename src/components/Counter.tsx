import React from 'react';
import "./Counter.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/CounterSlice';
import { RootState } from '../Redux/store';

function Counter() {
    const {value} = useSelector((state:RootState) => state.counter);
    const dispatch = useDispatch();

    
   


    return (
      <div>
        
     
      
        <div className="count"> {value}</div>   
        <div className="btnsCtn">
          <button className="btn lg-btn btn-dark" onClick={() => dispatch(increment())}> Increment</button>
          <button className="btn lg-btn btn-dark" onClick={() => dispatch(decrement())}> Decrement</button>
        </div>
      </div>
    );
}

export default Counter;
