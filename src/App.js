import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/index'
import User from './Pages/User/User';
import Products from './Pages/Products/Products';
import { useState } from 'react';
import Sidebar from './components/CNavbar/Sidebar';
import { useTheme } from '@mui/material/styles';
import CreateDeliverables from './Pages/Deliverable/CreateDeliverables';
import { useStyles } from './theme/MainTheme';
import { Button } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Pages/Auth/Login';
import { replace } from 'formik';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const classes = useStyles();
  const { loginWithRedirect, logout } = useAuth0();
  // const th = useTheme()
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('')
  // const th = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deliverable, setDeliverable] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const user = localStorage.getItem('user');
    setUser(user);
    return () => { };
  }, [])
  return (
    <Auth0Provider
      domain="dev-wdeogp5deeh1u8mz.us.auth0.com"
      clientId="M1NsStVCN3h6I6uI0tNyaippjWVfgpNd"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
            {user && !deliverable && <Sidebar />}
            {user && <Routes>
              <Route path="/" element={<User />} />
              {/* <Route path="/cd" element={<CreateDeliverables setDeliverable={setDeliverable} classes={classes}/>}/> */}
              <Route path="/create-deliverable" element={<CreateDeliverables setDeliverable={setDeliverable} classes={classes} />} />
              {/* <Route path="/create-deliverables" element={<CreateDeliverables setDeliverable={setDeliverable} />} /> */}
            </Routes>}
            {!user &&
              <Routes>
                <Route path="*" element={<Login />} render={(routeProps) => (isLoggedIn ? routeProps : <Navigate to="/" replace />)} />
              </Routes>
            }
          </div>
          <Routes>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Auth0Provider>
  )
}

// const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={isLoggedIn ? <Element /> : <Navigate to="/login" />}
//     />
//   );
// };

export default App;
