import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*?"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[setPassword,length,numberAllowed,charAllowed])

  useEffect(()=>{
    passwordGenerator()
  },[numberAllowed,length,charAllowed,passwordGenerator])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  return (
    <>
      <h1 className='text-4xl text-black text-center my-10 font-bold'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto bg-gray-500 shadow-lg rounded-lg px-4 my-8 py-3 text-white'>
      <h1 className= 'text-center py-5'></h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text"
          value={password}
          className='w-full outerline-none py-2 px-3 text-black'
          placeholder='Password' 
          readOnly
          ref = {passwordRef}
          />
          <button className='bg-blue-500 px-5'
          onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 py-5'>
          <div className='flex item-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             /><label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={numberAllowed}
            id='inputNumber'
            onChange={()=>{setNumberAllowed(prev => !prev)}}/><label>Numbers</label>
            </div>
           
          <div className='flex item-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={setCharAllowed}
            id='inputNumber'
            onChange={()=>{setCharAllowed(prev => !prev)}}/><label>Symbols</label>
            </div> 
        </div>
      </div>
    </>
  )
}

export default App
