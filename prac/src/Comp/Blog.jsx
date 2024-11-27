import React from 'react'
const Blog = ({title,desc,Image}) => {
   

  return (
    <div>
       TiTle: <h3>{title}</h3>
        <img src={Image}alt="image"/>
        <br></br>
        <p>{desc}</p>
    </div>
  )
}

export default Blog
