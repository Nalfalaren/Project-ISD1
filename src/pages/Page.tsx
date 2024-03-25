import React from 'react'
import Login from '../components/Login/Login.tsx'
import {Routes, Route} from 'react-router-dom'
import Signup from '../components/Login/Signup.tsx'
import ForgetPassword from '../components/Login/ForgetPassword.tsx'
const Page = () => {
  return (
    <div>
    <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign_up' element={<Signup></Signup>}></Route>
        <Route path='/forgot-password' element={<ForgetPassword></ForgetPassword>}></Route>
    </Routes>    
    </div>
  )
}

export default Page
