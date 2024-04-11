import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  const addValue = ()=>{
    if(count < 30) setCount(count + 1)
  } 

  const removeValue = ()=>{
    if(count > 0)setCount(count - 1)
     
  }

  return (
   <div>
    <h1>First Project of React</h1>
    <h2>Count Value: {count}</h2>
    <button
    onClick={addValue}
    >Add value: {count}</button>
    <br />
    <button
    onClick={removeValue}>Remove value: {count}</button>

   </div>
  )
}

export default App
