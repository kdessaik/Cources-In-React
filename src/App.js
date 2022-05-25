import './App.css'
import { Counter } from "./Counter.js";
import{Counter1} from "./NavBar/Namedisplay"
import UsePreferencedHook from "./user/Userpropriete"

import { useState,useEffect } from "react";
import { ListJsx } from "./list/List"
import Navbar from "./NavBar/Navbar";

import SearchWithProps from"./state/LiftingState";
import ListWithKeys from './list/List'
import ListWithKeys1 from "./list/ListWithKeys"
import CustomLocalStorage from './CustomLocalStorage/CusstomLocalStorage';
import ReactForms from "./ReactForm/ReactForm"
import ReactFormsMultiple from './ReactForm/ReactMultipleInputs';
import ReactSelectInput from './Selector/SelecteItemsReact'
import Home from "./NavBar/Home"
import About from "./NavBar/About"
import Contact from "./NavBar/Contact"
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import getAsyncDataStories from "./AssychroniseWithReact/AssychroniseData"
import RegisterComponent from "./Registration/Login"
import Footer from "./Footer/Footer"
import Registration from './Registration/Registration'
import RegisterOrLogin from "./Registration/RegisterOrLogin"

const App = () => {
  const initialStories = [
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
  const [stories,setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  
  


  const handleData = () => {
    return (event) => {setData(event.target.value)}
  }
  const [inputValue,UpdateValue]=useState(localStorage.getItem('search') || '')
  //useEffect
  useEffect(() => {
    localStorage.setItem('search', inputValue)
  }, [inputValue])
  const KeepUpdateValue=()=>{
    return (e)=>{ UpdateValue(e.target.value)}
  }
  //search Function
  const SearchTitle=stories.filter((storyValue)=>{ return storyValue.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())})
  
  //NavBar Function

  const [searchTerm, setSearchTerm] = CustomLocalStorage('search')

  // useEffect(() => {
  //   getAsyncDataStories(initialStories)
  //   .then((result) => {
  //     setStories(result.data.stories)
  //   })
  //   .catch((error) => {console.log(error)})
  // }, [])
  useEffect(() => {
    //set the spinner loader
    setIsLoading(true);
    getAsyncDataStories(initialStories)
    .then((result) => {
      setStories(result.data.stories)
      //stop spinner loader after data is rendered
      setIsLoading(false)
    })
    //else catch error/exceptions
    
  }, [])
  
  return (
    
     <>
     <h1>My course in React</h1>
     <BrowserRouter>
     <h4>A NavBar</h4>
  <Navbar/>
  <Routes>
<Route path='/'  element={<Home/>}/>
  
  
  <Route path='/about'  element={<About/>} />
  
  
  <Route path="/contact"  element={<Contact/>}/>
  
  </Routes>
  </BrowserRouter>

  
  
  
  <p></p>


  <h4>A Counter</h4>
  <Counter1/>
  <h4>A Use of useState</h4>
  <UsePreferencedHook
    type='text'
    placeholder='Enter your Text'
    value={data}
    onChange={handleData()}
    />
      <h4>Display a List </h4>
      <ListJsx/>
      <p>{data}</p>
      <hr />
      <h4>A Counter again</h4>
      <Counter/><hr />
      <h4>List Keys</h4>
      <ListWithKeys/><hr />
      <h4>Search Element</h4>
      <SearchWithProps
      value={inputValue}
      onChange={KeepUpdateValue()}

      /><hr />
      {isLoading ? (<p>loading.........</p>) : ( <ListWithKeys1
      list={SearchTitle}
      />)
      }
       <hr/>

      <h1>How to export and import a localStorage</h1>

      <h4>Search Element</h4>
      <SearchWithProps
      value={searchTerm}
      onChange={()=>{return (e)=>{setSearchTerm(e.target.value)}}}/>
      <h4>A react Forms</h4>
      <ReactForms/>
      <br/>
      <ReactFormsMultiple/>
      <h4>Selector in react</h4>

      <ReactSelectInput/> <hr/> <br/>
      <h4>Login In react</h4>
      

      <RegisterOrLogin/>
      
       <hr/><br/>

      <h4>My Footer in React</h4>
      <Footer/>


     

       


      </>
      
      

   );
}
 
export default App;