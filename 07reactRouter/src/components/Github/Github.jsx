import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
   const [data, setdata] = useState([])
  useEffect(() => {
       fetch('https://api.github.com/users/Himanshu-229')
       .then(response => response.json())
       .then(data => {
        console.log(data)
        setdata(data)

       })
  }, [])
    

  return (
    <div className='bg-gray-500 text-center text-3xl m-4 p-4 text-white'>Github Follower : {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300}/></div>
  )
}

export default Github