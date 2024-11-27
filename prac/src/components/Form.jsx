import React, { useState } from 'react'

const Form = ({setObject,object}) => {

  const [title,setTitle]=useState('');
  const handleChange=(e)=>{
    console.log(e.target.name,e.target.value)
    setTitle(e.target.value);
  }
  function handleAddition(){
    setObject([...object,{
      id:object.length+1,
      title : title,
           ChannelName: "coder dost",
            Views: "1M",
            Subs: "2M",
            verify:true
    }])
    setTitle("");
  }
  return (
    <div>
      <input name='title'placeholder='Enter title' type='text' onChange={handleChange}/>
      <button onClick={handleAddition}>Add</button>
    </div>
  )
}

export default Form
