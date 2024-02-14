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

function App() {
  console.log('->', theme)
  const th = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deliverable, setDeliverable] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
          {/* <div> */}
          {!deliverable && <Sidebar />}
          {/* </div> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/users" element={<User />} />
            <Route path="/cd" element={<CreateDeliverables setDeliverable={setDeliverable} />} />
            {/* <Route path="/create-deliverables" element={<CreateDeliverables setDeliverable={setDeliverable} />} /> */}
          </Routes>
        </div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/users" element={<User />} />
            <Route path="/products" element={<Products />} /> */}

        </Routes>
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
