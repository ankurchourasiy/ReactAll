import React from 'react'
import BlogData from '../Data/data'

const Button = () => {
    function handleRoute(){
        console.log('clicked!')
    }
  return (
    <div>
      <button onClick={()=>handleRoute()}>Button!</button>
    </div>
  )
}

export default Button
