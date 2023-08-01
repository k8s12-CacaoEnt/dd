import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import YouTube from 'react-youtube';
import { Chip, Modal } from "@mui/material";
import ImageSlider from "./ImageSlider";
import { useEffect, useState } from "react";


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
margin: "auto"


`;



const CastsListWarapper = styled.div`
// border: 1px solid black;
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
justify-content: flex-start;

  
@media (max-width: 650px){
    // 가로가 650px;아래면
      flex-direction: column;
  }  
margin: 30px auto;
`;



const HeaderImg = styled.img`
width:20rem;
height:100%;
@media (max-width: 650px){
    // 가로가 650px;아래면
      flex-direction: column;
  }  
border-radius:50px;


`;

const MovieDescWrapper = styled.div`
`;

const MovieTitle = styled.h1`

`;

const HashTagList = styled.div`
font-weight:800;
`;

const MovieDescription = styled.div``
;

const TextWrapper = styled.div`
padding: 5px;
display: flex;
flex-direction: column;

`;
function FilmDetail (props){
    const param = useParams()
    const filmId = param.filmId;
    const slides = [
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230714/c96ee894-309c-4c83-b485-33b431612304.jpeg", title: "혜원(동수 역)", id: 17},
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230707/%E1%84%87%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%AB%E1%84%92%E1%85%A9.png", title: "제일(종석 역)", id: 19 },
      {url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230714/7b805564-d0fd-4457-bc73-0538c5127f98.png", title: "종형(수민 역)", id:18 },
    ];

    const [page, setPage] = useState(0)
    const totalPages = slides.length;

    return(<Wrapper>
            
             <Header>
                <HeaderImg src='https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230707/d.png'/>
                {/* <Video id="ytplayer" type="text/html" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" />*/}
                              <MovieDescWrapper>
                <TextWrapper>
                    <HashTagList>
                        <Chip label="#DRAMA"/>
                        <Chip label="#ACTION"/>
                    </HashTagList>
                  <MovieTitle>레디액션! 폭력영화(2014) </MovieTitle>
                  <MovieDescription>

                  #1. Extreme 민호가 착하니 천하무적
“도대체 저한테 왜 그러신 거예요?”
외딴 시골, 외근 후 서울로 향하던 ‘민호’는 길을 잃고 마을을 헤매다 동네 양아치들과 막장커플에게 돌연 무차별 폭행을 당한다. 그들을 향한 착하디 착한(?) 민호의 반격이 시작되는데…

#2. REAL 메이킹 필름
“XXX야, 줄 풀어. 줄 풀라고!”
허름한 방, 밧줄로 온몸이 묶인 남자와 복면을 쓴 정체 모를 남자가 언성을 높이고 있다. 갖은 욕설과 비난이 계속되던 중, 급기야 복면 남자가 억눌러왔던 분노를 참지 못하는데…

#3. BITTER 나의 싸움
“이기는 자가 강한 것이다”
한적한 동네 뒷골목, 어린 시절부터 유약했던 고등학생 ‘도경’은 강해지겠다는 일념으로 동네를 주름잡는 불량 일진회에게 겁 없이 대결을 신청하는데… 
                  </MovieDescription>
                </TextWrapper>
             </MovieDescWrapper>

             </Header>
             <SliderWrapper>        <ImageSlider slides={slides} page={page} setPage={setPage} totalPages={totalPages}/></SliderWrapper>

    </Wrapper>)

}
export default FilmDetail;