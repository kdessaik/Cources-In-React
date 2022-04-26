import {useState} from 'react'
export  function Counter1 () {
  const [data, setData] = useState("")
  return (
    <div>
  <input
  type="text" placeholder="enter my name" value={data} onChange={(event)=>{setData(event.target.value)}} width="100%">
  </input>,
    <p>
  {data} kdk
</p> </div>
  )}