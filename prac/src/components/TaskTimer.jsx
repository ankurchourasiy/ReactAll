import React, { useState } from 'react'

const TaskTimer = () => {
    const [time,setTime]=useState(0);
    

    const handleStart=()=>{
        setInterval(()=>{
          setTime(time=>time+1);
        },1000)
    }
    const handleReset=()=>{
        setTime(time=>time*0);
    }
   


    
  return (
    <div>
        {time}
      <button onClick={()=>handleStart()}>Start Timer!</button>
      <button >Stop Timer!</button>
      <button onClick={()=>handleReset()}>Reset Timer!</button>

    </div>
  )
}

export default TaskTimer
