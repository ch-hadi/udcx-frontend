import React, { useEffect } from 'react';

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/index'
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import { useState } from 'react';
import Sidebar from './components/CNavbar/Sidebar';
import { useTheme } from '@mui/material/styles';
import CreateDeliverables from './Pages/Deliverable/CreateDeliverables';
import { useStyles } from './theme/MainTheme';
import { Button } from '@mui/material';
import { Auth0Provider, useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Login from './Pages/Auth/Login';
import Logout from './Pages/Auth/Logout';
import Profile from './Pages/Profile/Profile';

function App() {
  // const navigate = useNavigat();
  const classes = useStyles();
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  // const th = useTheme()
  return (
    <Auth0Provider
      domain="dev-wdeogp5deeh1u8mz.us.auth0.com"
      clientId="M1NsStVCN3h6I6uI0tNyaippjWVfgpNd"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {!isAuthenticated && <Login />}
      <Profile />
      {/* <Logout /> */}


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
