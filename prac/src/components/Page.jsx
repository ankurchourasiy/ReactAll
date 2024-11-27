import React from "react";

const Page = ({id,title, ChannelName = "coder dost", Views, Subs,verify,handleDelete,handleEdit}) => {
  
  return (
    <div>
{verify &&<><img alt="image" src="https://picsum.photos/seed/picsum/200/300" />
    <p> {title}</p>
     <p> {ChannelName}</p>
      <p>{Views}</p>
       <p>{Subs}</p> 
       </> }
       <button onClick={()=>handleDelete({id})}>Delete</button>
       <button onClick={()=>handleEdit({id})}>Edit</button>
    </div>
  );
};

export default Page;
