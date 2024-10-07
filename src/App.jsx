import { useState } from 'react'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Forgot from './Pages/Forgot/Forgot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/forgotpassword",
    element: <Forgot/>,
  },
]);
function App() {
  
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
