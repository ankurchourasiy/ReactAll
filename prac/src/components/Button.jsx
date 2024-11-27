import React from 'react'
import { useState } from 'react';
const Button = () => {
    let [number,setNumber]=useState(1);
    let [verify,SetVerify]=useState(true);
    function handleClick(){
      setNumber(number=>number+1);
    }
    function handleVerify(){
      SetVerify(verify=!verify);
    }
  return (
    <div>
      {number}
     <button onClick={()=>handleClick()}>Button!</button>
     <button onClick={()=>handleVerify()}>{verify?'Play':'Pause'}</button>
    </div>
  )
}

export default Button
