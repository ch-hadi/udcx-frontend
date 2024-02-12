import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ThemeProvider from './theme';
import Login from './Pages/Login/Login';

function App() {
  return (
   <>
   <BrowserRouter>
   <ThemeProvider>
   <Login/> 
   </ThemeProvider>
   </BrowserRouter>
   </>
  );
}

export default App;
