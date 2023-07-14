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
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getTokenToSessionStorage, getMemberInfoToSessionStorage } from './comm/common.js';
import ProfileList from './components/ProfileList';
import { Home } from '@mui/icons-material';

const router = createBrowserRouter([
  {
    path: '/',
    // 아래 children 컴포넌츠의 wrapper 
    // 메인 네비게이션 바 같은게 들어갈 수 있음
    element: <Root />,
    children: [
      // 메인페이지에 뜰것
      { index: true, element: <HomePage /> },
      {
        path: 'profileList',
        element: <ProfileList />,
        // action: actionProfileList,
      },

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
  const isLoginDispatch = useDispatch();

  useEffect(() => {
    const token = getTokenToSessionStorage();
    if (token) {
      const memberInfo = getMemberInfoToSessionStorage();
      isLoginDispatch({type: 'isLogin', token: token, data: memberInfo});
    }else{
      isLoginDispatch({type: 'isNonLogin'});
    }
  }, []);

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
    
    
    


