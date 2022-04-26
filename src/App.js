import './App.css'
import { Counter } from "./Counter.js";
import{Counter1} from "./NavBar/Namedisplay"
import UsePreferencedHook from "./user/Userpropriete"

import { useState } from "react";
import { ListJsx } from "./list/List"
import {Navbar } from "./NavBar/Navbar";

import SearchWithProps from"./state/LiftingState";
import ListWithKeys from './list/List'
import ListWithKeys1 from "./list/ListWithKeys"


const App = () => {
  const list = [
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }
    
  ];

  const [data, setData] = useState('')
  
  


  const handleData = () => {
    return (event) => {setData(event.target.value)}
  }
  const [inputValue,UpdateValue]=useState('')
  const KeepUpdateValue=()=>{
    return (e)=>{ UpdateValue(e.target.value)}
  }
  
console.log(inputValue)
  return (
     <>
  <Navbar/>
  <Counter1/>
  <UsePreferencedHook
    type='text'
    placeholder='Enter your Text'
    value={data}
    onChange={handleData()}
    />
      <p>{data}</p>
      <ListJsx/>
      <Counter/>
      <ListWithKeys/>
      <SearchWithProps/>
      <ListWithKeys1 
       
       onChange={KeepUpdateValue()}
       value={inputValue}
       />

       <p>{inputValue} dessai</p>


      </>
      

   );
}
 
export default App;