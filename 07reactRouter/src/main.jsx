import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contactus/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"About",
//         element: <About/>
//       },
//       {
//         path:"Contact",
//         element: <Contact/>
//       }
//     ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
