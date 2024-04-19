import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
   const [username , setUsername] = useState('')
   const [password, setpassword] = useState('')
    
   const {setUser} = useContext(UserContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username,password})
   }


  return (
    <>
    <h2>Login</h2>
    <input type="text" placeholder='User Name'
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />{"    "}
    <input type="text" placeholder='Password' 
    value={password}
    onChange={(e) => setpassword(e.target.value)}
    />
    <button type="button" onClick={handleSubmit}>Submit</button>
    
    </>
  )
}

export default Login