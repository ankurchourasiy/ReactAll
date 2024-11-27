import { useState } from "react";
import "./App.css";
// import Button from "./components/Button";
import Page from "./components/Page";
import obj from './Data/data'
import Form from "./components/Form";
// import CounterApplication from "./components/CounterApplication";
// import TaskTimer from "./components/TaskTimer";
// import Form from "./components/Form";
function App() {

  const [object,setObject]=useState(obj);
  // const [title,setTitle]=useState("");
  const handleAdd=()=>{

    
    setObject([...object,{
      id:object.length+1,
      title:'dsjbfs',
      ChannelName: "coder dost",
        Views: "1M",
        Subs: "2M",
        verify:true
    
    }])
  }
   const handleDelete=({id})=>{
      setObject(object.filter(object=>object.id!==id))
   }
  // const handleChange=(e)=>{
  //   setTitle(e.target.value);
  //   console.log(e.target.name,e.target.value);
  // }
  // const handleNewAdd=(e)=>{
  //   setObject([...object,{
  //       title : title,
  //     ChannelName: "coder dost",
  //       Views: "1M",
  //       Subs: "2M",
  //       verify:true
    
  //   }])
  //   setTitle("");
  // }
  
  return (
    <>
    {
      object.map((object,key)=>(
            <Page
            key={object.id}
            id={object.id}
            title={object.title}
            ChannelName= {object.ChannelName}
            Views= {object.Views}
            Subs= {object.Subs}
            verify={object.verify}
            handleDelete={handleDelete}
            ></Page>
      ))
    }
     <button onClick={()=>handleAdd()}>Add!</button>
    {/* <Button>Play!</Button>

    <CounterApplication/> */}
    {/* <TaskTimer/>  */} 
    {/* <input name='title'placeholder="Enter title!" onChange={handleChange}/>
    
    <button onClick={handleNewAdd}>Add</button> */}
    <Form object={object}setObject={setObject} />
    </>
  );}


export default App;
