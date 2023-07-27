import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import YouTube from 'react-youtube';
import { Modal } from "@mui/material";
import ImageSlider from "./ImageSlider";


const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 60rem;
margin: auto;
padding: 2rem;
background: linear-gradient(to right bottom, rgba(115, 186, 210, 0.8), rgba(231, 239, 243, 0.8), rgba(228, 121, 228, 0.8));
`;

const SliderWrapper = styled.div`
width: "500px",
height: "280px",
margin: "0 auto",

`;

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

const CastsListWarapper = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
text-align:center;
@media (max-width: 650px){
  // 가로가 650px;아래면
  width:640;
  height:360;
  

}  


`;
const CastWrapper = styled.div`
// border: 1px solid red;
display: flex;
flex-direction: column;

margin-left: 10px;
`;


const CastImage = styled.img`
border-radius: 50%;
height:40px;
width:100%
display: block;
margin-left: auto;
margin-right: auto;
`;

const CastName = styled.div`

`;

const Header = styled.div`
display: flex;
flex-direction: row;
width: "500px",
height: "280px",
margin: "0 auto",

justify-content: center;

  
@media (max-width: 650px){
    // 가로가 650px;아래면
      flex-direction: column;
  }  
`;



const HeaderImg = styled.img`
width:50%;
height:100%;
@media (max-width: 650px){
    // 가로가 650px;아래면
      flex-direction: column;
  }  

`;
const Video = styled.iframe`
width:640;
height:360;
flex-grow:1
@media (max-width: 650px){
    // 가로가 650px;아래면
    width:640;
    height:360;
    
    
  }  


`;
const MovieDescWrapper = styled.div`
`;

const MovieTitle = styled.div`
`;

const HashTagList = styled.div``;
const HashTag = styled.div``;

const MovieDescription = styled.div``
;
function FilmDetail (props){
    const param = useParams()
    const filmId = param.filmId;
    const slides = [
      {url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "패럴 윌리엄스", id:1 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "케이티 페리", id: 2},
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "마고 로비", id: 7 },
      {url:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230714/2f08e239-9056-4b54-87ed-4c951a6c5f16.jpeg",title: "조나단 킹슬러", id: 8 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "키스 도슨", id: 11 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "타이 커스타인", id:3 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "마이클 아이작",id:6},
      
    ];

    return(<Wrapper>
            
             <Header>
                <HeaderImg src='https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png'/>
                {/* <Video id="ytplayer" type="text/html" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" />*/}
                              <MovieDescWrapper>
                <HashTagList>
                    <HashTag>드라마</HashTag>
                    <HashTag>장르</HashTag>
                </HashTagList>
                <h1><MovieTitle>영화제목(개봉연도) 필름 ! {filmId} </MovieTitle></h1>
                <MovieDescription>영화 내용~~</MovieDescription>
             </MovieDescWrapper>

             </Header>
             <SliderWrapper>        <ImageSlider slides={slides} /></SliderWrapper>

    </Wrapper>)

}
export default FilmDetail;