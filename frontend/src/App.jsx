import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material';

import Signup from './components/Authentication/Signup'
import Landing from './components/Landing'
import NavBar from './components/NavBar/Navbar'
import Login from './components/Authentication/Login'
import Student from './components/Student'
import Tutor from './components/Tutor'
import Forum from './components/Forums/Forums'
import NewPost from './components/Forums/NewPost'
import PostPage from './components/Forums/PostPage'
import Admin from './components/xx/Admin'
import Dashboard from './components/Dashboard'
import Account from './components/Account'
import Profile from './components/Profile'
import PasswordReset from './components/Authentication/PasswordReset'
import ForgotPassword from './components/Authentication/ForgotPassword'
import Subjects from './components/subjects/Subjects';
import SubjectPage from './components/subjects/SubjectPage';
import NewSubject from './components/subjects/NewSubject';

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

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1F2937',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#3B82F6',
        contrastText: '#FFFFFF',
      },
      success: {
        main: '#10B981',
      },
      background: {
        default: '#F9FAFB',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#111827',
        secondary: '#4B5563',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.25rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar
            user={user}
            logoutUser={logoutUser} />
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
                user={user} />}>
            </Route>

            <Route path='admin'
              element={<Admin
                user={user} />}>
            </Route>

            <Route path='student'
              element={<Student
                user={user}
                refreshUser={refreshUser} />}>
            </Route>

            <Route path='tutor'
              element={<Tutor
                user={user}
                refreshUser={refreshUser} />}>
            </Route>

            <Route path='forums'
              element={<Forum 
              user={user}/>}>
            </Route>

            <Route path='newpost'
              element={<NewPost
                user={user} />}>
            </Route>

            <Route
              path='/forums/:postId'
              element={<PostPage
                user={user}
              />}
            />

            <Route path='dashboard'
              element={<Dashboard
                user={user} />}>
            </Route>
            <Route path='account'
              element={<Account
                user={user} />}>
            </Route>
            <Route path='profile'
              element={<Profile
                user={user} />}>
            </Route>
            <Route
              path='forgotpassword'
              element={<ForgotPassword />}
            />
            <Route
              path='resetpassword'
              element={<PasswordReset />}
            />

            <Route
              path='subjects'
              element={<Subjects 
              user={user}/>}
            />
            <Route path='/newsubject'
              element={<NewSubject
              />}>
            </Route>
            <Route
              path='/subjects/:subjectId' // I dont actually know how i am going to set this up yet.,.,.
              element={<SubjectPage 
              user={user}/>}
            />
          </Routes>

        </Router>

        <br />
        <br />
        <footer>&copy; Drew Williams @ Dais</footer>
      </ThemeProvider>
    </>
  )
}

export default App
