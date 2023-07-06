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
import AuthenticationPage,  {action as authAction}  from './pages/AuthenticationPage';
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
        action: authAction        
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> 
      
      {/* This Toolbar is needed to prevent content from being hidden behind the AppBar */}
      
      <Container>        
        <Box sx={{ my: 2 }}>

          <Grid container spacing={3} direction={'column'}>
            
            <Grid item xs={12} md={4}>
            
            <Box bgcolor="secondary.main" 

             sx={{position:"relative" 
            }}
            color="secondary.contrastText" p={2}>
            <LazyLoadImage src={Image}
                  className='img'
                  // width={100} height={100}
                  effect="blur"
                  alt="Image Alt"
              />
              <div className='d'>
                 <h1>제목제목</h1>
                 <p>어쩌구 저쩌구 그래서 저쩌구</p>
              </div>
            <NoticeListItem/>
                
              </Box>
            </Grid>

            {/* <Grid item xs={12} md={4}>
              <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
                Section 2
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box bgcolor="error.main" color="error.contrastText" p={2}>
                Section 3
              </Box>
            </Grid> */}

          </Grid>
        </Box>
      </Container>

      {/*  FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTER */ }
      <Box sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary" align="center">
            Footer content goes here.
          </Typography>
        </Container>
      </Box>
    </Box>
    


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
    
    
    


