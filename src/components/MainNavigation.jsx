import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import LogoSRC from '../assets/profilehub_logo.png';

const LogoBox = styled.div`
@media (max-width: 650px){
  // 가로가 650px;아래면
    width: 100px;
    height: 56px;
}
width: 100px;
display: flex;
`;

const Logo = styled.img`
box-sizing: border-box;
width: 100%;
height: 100%;`;

const Header = styled.div`

max-width: 60rem;
flex-direction: row;
margin: auto;
padding: 2rem;
display: flex;
justify-content: flex-start

`;

const MenuItem = styled.div`

box-sizing: border-box;
color: rgb(0, 0, 0);

display: inline-block;
font-family: "Pretendard", sans-serif;

height: 56px;

text-decoration: none;
padding: 15px 10px;
border-radius: var(--muidocs-shape-borderRadius);
`;



const  MenuItemBox = styled.div`
@media (max-width: 650px){
  // 가로가 650px;아래면
    display: none;
}
flex-grow: 4; // 이렇게 해야 로그인이 맨 우측으로 감 
display:flex

`;
const LoginItemBox = styled.div`
@media (max-width: 650px){
  // 가로가 650px;아래면
    display: none;
}
display: flex
flex-direction:row;
order: 1
`;

function MainNavigation() {
  return (
   <Header>
    <LogoBox>
    <Logo src={LogoSRC} />
    </LogoBox>
      <MenuItemBox>
      <MenuItem>
        <Typography sx={{fontWeight: 'bold'}}> 배우 프로필 </Typography>
      </MenuItem>
      <MenuItem> 
      <Typography sx={{fontWeight: 'bold'}}> 캐스팅 공고 </Typography>
      </MenuItem>
      <MenuItem>
      <Typography sx={{fontWeight: 'bold'}}> 공지사항 </Typography>
      </MenuItem>
      </MenuItemBox>

      <LoginItemBox>
      <MenuItem>
        <Typography sx={{fontWeight: 'bold'}}> 
          <NavLink to="/auth">로그인</NavLink>
         </Typography>
      </MenuItem>
      <MenuItem>
        <Typography sx={{fontWeight: 'bold'}}> 
          <NavLink to="/signup">회원가입</NavLink>
         </Typography>
      </MenuItem>

      </LoginItemBox>


   </Header>
    // <header className={classes.header}>
    //   <nav>
    //     <ul className={classes.list}>
    //       <li>
    //           Home
    //         </NavLink>
    //       </li>
        
    //       <li>
    //         <NavLink
    //           to="/auth"
    //           className={({ isActive }) =>
    //             isActive ? classes.active : undefined
    //           }
    //         >
    //           Authentication
    //         </NavLink>
    //       </li>

    //     </ul>
    //   </nav>
    //   <AbcOutlinedIcon/>

    // </header>
  );
}

export default MainNavigation;
