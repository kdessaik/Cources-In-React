import {useState}  from 'react'
export default function ReactForms() {
  const [input, setInput] = useState('')
  const handleSearch = (event) => {
    setInput(event.target.value)
  }
  const handleSubmit = (event) =>  {
   event.preventDefault()
   alert(`hey my name is ${input}`)
  }
  return (
    <>
      <h1>React Forms</h1>
      <form onSubmit={handleSubmit} className="form" >
        <label htmlFor="search">Search: </label>
        <input
           id="search" 
           type="text" 
            placeholder="Search"
            onChange={handleSearch}
            value={input}
           />
           <br />
           <button>Submit</button>
      </form>
    </>
  )
}