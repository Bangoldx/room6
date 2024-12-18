import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import RoleSelect from './components/RoleSelect.jsx';
import Landing from './components/Landing.jsx';
import Signup from './components/Signup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
  },
  // {
  //   path:"roleselect",
  //   element: <RoleSelect role={role}/>
  // },
  {
    path: "signup",
    element: <Signup />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
