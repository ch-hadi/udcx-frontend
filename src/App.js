import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/index'
import Login from './Pages/Login/Login';
import { Box } from '@mui/system';
import User from './Pages/User/User';
import Products from './Pages/Products/Products';
import { useState } from 'react';
import Sidebar from './components/CNavbar/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
          {/* <div> */}
          <Sidebar />
          {/* </div> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/users" element={<User />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default App;
