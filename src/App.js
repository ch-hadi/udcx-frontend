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

function App() {
  const classes = useStyles();
  // const th = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deliverable, setDeliverable] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  // console.log(classes)
  console.log(deliverable)
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
          {!deliverable && <Sidebar />}
          <Routes>
            <Route path="/" element={<User />} />
            {/* <Route path="/cd" element={<CreateDeliverables setDeliverable={setDeliverable} classes={classes}/>}/> */}
            <Route path="/cd" element={<CreateDeliverables setDeliverable={setDeliverable} classes={classes} />} />
            {/* <Route path="/create-deliverables" element={<CreateDeliverables setDeliverable={setDeliverable} />} /> */}
          </Routes>
        </div>
        <Routes>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
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
