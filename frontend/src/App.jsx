import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/Authentication/Signup'
import Landing from './components/Landing'
import NavBar from './components/NavBar/Navbar'
import Login from './components/Authentication/Login'
import Student from './components/Student'
import Tutor from './components/Tutor'

function App() {

  const [user, setUser] = useState("");
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("user");
    if (storedData) {
      setSessionData(JSON.parse(storedData));
      setUser(JSON.parse(storedData));
    }
    
  }, []);

  const refreshUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/userservices/getUser", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Fetched current user:", userData);
        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));
      } else {
        console.error("Failed to find user.");
        setUser();
      }
    } catch (error) {
      console.error("Error refreshing user:", error);
      setUser();
    }
  };

  const logoutUser = async (e) => {
    try {
      const response = await fetch("http://localhost:8080/userservices/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setUser("");
        sessionStorage.removeItem("user")
        console.log("Logout successful")
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <Router>
      <NavBar  
      user={user}
      logoutUser={logoutUser}/>
          
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
          element={<Login 
            refreshUser={refreshUser}
            user={user}/>}>
          </Route>

          <Route path='student'
          element={<Student 
            user={user}/>}>
          </Route>

          <Route path='tutor'
          element={<Tutor 
            user={user}/>}>
          </Route>
          
        </Routes>
      </Router>
      
    </>
  )
}

export default App
