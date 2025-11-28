import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cookies from "js-cookie"
import Login from './Components/Login'
import Signup from './Components/Signup'
import UserDash from './Components/UserDash'
import ProtectedRoute from './ProtectedRoute'
import ForgetPass from './Components/ForgetPass'
import OtpVerify from './Components/OtpVerify'
import ResetPass from './Components/ResetPass'
import SAdmin from './Components/SAdmin'


const App = () => {

  const token = Cookies.get("token")
  console.log(token)

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Home Route */}
          <Route path='/' element={
            token ?
              <UserDash />
              :
              <Login />
          } />

          {/* Signup */}
          <Route path='/signup' element={<Signup />} />

          {/* User Dashbord */}
          <Route path='/user' element={
            <ProtectedRoute>
              <UserDash />
            </ProtectedRoute>
          } />

          {/* Forget Password */}
          <Route path='/forget' element={<ForgetPass />} />

          <Route path='/otpverify' element={<OtpVerify />} />

          <Route path='/resetpass' element={<ResetPass />} />

          <Route path='/superadmin' element={<SAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
