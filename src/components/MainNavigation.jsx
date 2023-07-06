import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function MainNavigation() {
  return (
  //   <AppBar position="fixed" className={classes.header}>
  //   <Toolbar>
  //     <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
  //       My Website
  //     </Typography>
  //   </Toolbar>
  //   <Toolbar>
  //     <Typography variant="h6" component="div" sx={{ flexGrow:  }}>
  //       My Website
  //     </Typography>
  //   </Toolbar>

  // </AppBar>



    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
        
          <li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Authentication
            </NavLink>
          </li>

        </ul>
      </nav>
      
    </header>
  );
}

export default MainNavigation;
