import { NavLink } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Banner from '../assets/banner.png';

const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

max-width: 60rem;
flex-direction: row;
margin: auto;
padding: 2rem;
display: flex;
justify-content: flex-start

`;

const LogoBox = styled.div`
@media (max-width: 650px){
  // 가로가 650px;아래면
    width: 100px;
}
width: 100px;
display: flex;
`;

const Img = styled.img`
box-sizing: border-box;
width: 100%;
height: 100%;`;


export default function Card() {
  return (
    <Wrapper>

        
    <Img src={Banner} />
    </Wrapper>
  
  );
}

