import React, { useState } from 'react'

const CounterApplication = () => {

    const[IncCounter,SetIncCounter]=useState(0);
    const[DecCounter,SetDecCounter]=useState(IncCounter);
    const handleIncrementCounter=()=>{
        SetIncCounter(IncCounter=>IncCounter+3)
    }
    const handleDecrementCounter=()=>{
        SetDecCounter(DecCounter=>DecCounter-1);
        SetIncCounter(IncCounter=>IncCounter-1)
    }
    const handleReset=()=>{
        SetIncCounter(IncCounter=>IncCounter*0);
    }
  return (
    <div className='container'>
        {IncCounter}
      <button className='Inc-counter-3' onClick={()=>handleIncrementCounter()}>Increment!</button>
      <button className='dec-counter-1'onClick={()=>handleDecrementCounter()}>Decrement!</button>
      <button className='reaset it to zero'onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}

export default CounterApplication
