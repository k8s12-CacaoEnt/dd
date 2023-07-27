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
position: absolute;

@media (max-width: 650px){
  // 가로가 650px;아래면
  padding: 0;
}


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
z-index:1;
position:relative;
height: 100%;`;

const TextWrapper = styled.div`
flex: 1 1 auto;
max-width: 100%;

`;
const BannerTitle = styled.div`
color:white;
font-size: 2.125em;
position:absolute;
font-weight: normal;
line-height: 1.25;
margin-top: 50px;
margin-left: 20px;

z-index:2;
@media (max-width: 650px){
  // 가로가 650px;아래면
  font-size: 1.5em;
}

`;
const BannerDesc = styled.div`
color:white;
position:absolute;
z-index:2;

margin-top: 100px;
font-size: 1.4em;
margin-left: 20px;
@media (max-width: 650px){
  // 가로가 650px;아래면
    display:none;
}
`;

const ApplyButton = styled.button`
position:absolute;
z-index:2;
margin-top: 170px;
margin-left: 20px;

font-size: 1.4em;
@media (max-width: 650px){
  // 가로가 650px;아래면
  margin-top: 100px;
}


`;


export default function Card() {
  return (
    <Wrapper>

        
    {/* <Img src={Banner} /> */}
    <TextWrapper>
      <BannerTitle>지금 바로 캐스팅 공고에 지원하세요!</BannerTitle>
      <BannerDesc>프로필 허브에는 가장 많은 <br/>
         캐스팅 공고와 전문가의 도움이 준비되어있습니다</BannerDesc>
         <ApplyButton>지금 지원하기</ApplyButton>
    </TextWrapper>
    <Img src="https://d3uscstcbhvk7k.cloudfront.net/static/images/homepagehero_03.jpg" />
    </Wrapper>
  
  );
}

