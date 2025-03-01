import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
// import Landing from './components/Landing.jsx';
// import Signup from './components/Signup.jsx';
// import Student from './components/Student.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing/>
//   },
//   {
//     path: "signup",
//     element: <Signup />
//   }, 
//   {
//     path: "student/home",
//     element:<Student />
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
