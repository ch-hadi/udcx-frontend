import React, { useEffect } from 'react';
import './App.css';
import { useStyles } from './theme/MainTheme';
import { Button } from '@mui/material';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Login from './Pages/Auth/Login';
import Logout from './Pages/Auth/Logout';
import Profile from './Pages/Profile/Profile';

function App() {
  // const navigate = useNavigat();
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
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
