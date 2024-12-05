import React, { useState } from 'react'
import NotionNav from '../Components/NotionNav'
import { Route, Routes } from 'react-router-dom'
import NotionHome from './NotionHome'
import NotionLogin from './NotionLogin'
import NotionSignup from './NotionSignup'
import NotionDashboard from './NotionDashboard'
import PrivateRoute from '../Components/PrivateRoute'
 
const StudyNotionApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className=' select-none h-screen bg-slate-500 flex flex-col'>
        
        <NotionNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        {/* all routes */}
        <Routes>
            <Route path='/' element={<NotionHome/>}/>
            <Route path='/login' element={<NotionLogin setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path='/signup' element={<NotionSignup setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path='/dashboard' element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <NotionDashboard/>
              </PrivateRoute>
              }/>
            <Route path="*" element={<h1>404 - Page Not Found</h1>} /> 
        </Routes>

    </div>
  )
}

export default StudyNotionApp