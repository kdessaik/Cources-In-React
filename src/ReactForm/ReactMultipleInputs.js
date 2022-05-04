import {useState}  from 'react'
export default function ReactFormsMultiple() {
  const [input, setInput] = useState('')
  const handleSearch = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInput(values =>  ({...values, [name]: value}))
  }
  const handleSubmit = (event) =>  {
   event.preventDefault()
   alert(`hey my name is ${input.userName} and my password ${input.password}`)
  }
  return (
    <>
      <h1>Controle the Input Forms</h1>
      <form onSubmit={handleSubmit} className="form" >
        <label htmlFor="search">Login : </label> <br/>
        <input
           id="search" 
           type="text" 
            placeholder="Your Name"
            onChange={handleSearch}
            value={input.userName}
            name="userName"
            
           />
           <br />
           

           <input
           id="search" 
           type="password" 
            placeholder="password"
            onChange={handleSearch}
            value={input.password}
            name="password"
           />
           <br />
           <button>Submit</button>
           
      </form>
    </>
  )
}