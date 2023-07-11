import * as React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NoticeListItem from './components/NoticeListItem';
import Image from './main.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import HomePage from './pages/Home';
import Root  from './pages/Root';
// import AuthenticationPage,  {action as authAction}  from './pages/AuthenticationPage';
import AuthenticationPage  from './pages/AuthenticationPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        // action: authAction
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
        
      },
      

    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;

function App1() {
  return (
    <div></div>


  //       <div className="App">
  //         <div className="navbar">Navigation Bar</div>
    
  //         <div className="content">
  //           <div className="section">
  // <NoticeListItem/>

  //           </div>
  //           <div className="section">Section 2</div>
  //           <div className="section">Section 3</div>
  //         </div>
    
  //         <div className="footer">Footer</div>
  //       </div>
      );
    }
    
    
    


