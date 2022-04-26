import {useState} from 'react'
export  function Counter () {
  const [data, setData] = useState(0)
  return (
    <div>
      <button 
      type="button" 
      onClick = {() => setData(data + 1)}
      >Increment
      </button>
      <button 
      type="button" 
      onClick = {() => setData(data - 1)}
      >Decrement
      </button>
      <p>{data}</p>
    </div>
  )
}