import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/Authentication/Signup'
import Landing from './components/Landing'
import NavBar from './components/NavBar/Navbar'
function App() {

  return (
    <>
      <Router>
      <NavBar  />
          
        <br />
        <br />
        <Routes>

          <Route path='/'
          element={<Landing />}>
          </Route>

          <Route path='signup'
          element={<Signup />}>
          </Route>

          <Route path='login'
          element={<Login />}>
          </Route>
          
        </Routes>
      </Router>
      
    </>
  )
}

export default App
