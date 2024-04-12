import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Gray")

  return (
      <div className='w- full h-screen duration-200'
      style={{backgroundColor: color}}>
         
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
           
            <button onClick ={()=>setColor("red")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}>Red</button>

            <button onClick ={()=>setColor("Green")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{backgroundColor: "green"}}>Green</button>

            <button onClick ={()=>setColor("blue")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{backgroundColor: "blue"}}>Blue</button>

            <button onClick ={()=>setColor("Pink")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{backgroundColor: "Pink"}}>Pink</button>

            <button onClick ={()=>setColor("orange")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{backgroundColor: "Orange"}}>Orange</button>

            <button onClick ={()=>setColor("cyan")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{backgroundColor: "cyan"}}>Cyan</button>

          </div>
         </div>
         
      </div>
    )
}

export default App
