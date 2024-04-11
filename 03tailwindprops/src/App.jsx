import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'



function App() {

  let myObj ={
    username : "Himanshu",
    age : 21
  }
  return (
   <>
   <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind Test</h1>
   <Card username = "Himanshu" btntext = "Click Me"/>
   <Card username = "Singh" btntext = "View Profile"/>
   </>
  )
}

export default App
