import React from 'react'
import Button from './Comp/Button'
import data from './Data/data'
const Main = () => {
  return (
    <div>
      
{/* <Button  {data.map((itr,key)=>({

  id={itr.id}
  BlogTitle:'Games',
  BlogDesc:'hi hellow!',
  Image:'https://picsum.photos/200/300'

}
))

}></Button>     */}

{
  data.map((itr,key)=>(
     <Button
     id={itr.id}
  title={itr.title}
  desc={itr.desc}
  Image={itr.Image}

     >{itr.title}</Button>
  ))
}
    </div>
  )
}

export default Main
