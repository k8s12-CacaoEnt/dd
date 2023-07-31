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
      {url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "패럴 윌리엄스", id:1 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "케이티 페리", id: 2},
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "마고 로비", id: 7 },
      {url:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230714/2f08e239-9056-4b54-87ed-4c951a6c5f16.jpeg",title: "조나단 킹슬러", id: 8 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "키스 도슨", id: 11 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "타이 커스타인", id:3 },
      { url: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png", title: "마이클 아이작",id:6},
      
    ];

    const [page, setPage] = useState(1)
    const totalPages = slides.length;

    return(<Wrapper>
            
             <Header>
                <HeaderImg src='https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png'/>
                {/* <Video id="ytplayer" type="text/html" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" />*/}
                              <MovieDescWrapper>
                <TextWrapper>
                    <HashTagList>
                        <Chip label="#DRAMA"/>
                        <Chip label="#ACTION"/>
                    </HashTagList>
                  <MovieTitle>영화제목(개봉연도) 필름 ! {filmId} </MovieTitle>
                  <MovieDescription>
                  엠바고가 풀린 뒤 로튼 토마토 평가는 90%를 받으며 신선 마크를 획득했고, 메타스코어는 80/100을 기록했고, 레터박스는 4.2점을 기록하며 그레타 거윅 감독의 전작들에 이어 상당한 호평을 받고 있다. 관객 점수도 로튼 토마토 90%, IMDB 7.7점, 시네마스코어 등급 A로 시작하며 높은 점수를 기록했다.

국내 평점은 CGV 골든 에그가 87%, 롯데시네마와 메가박스 평점이 8점 중반대에 형성되었다. 특이한 점은 보통 골든 에그 지수는 좋아요/별로예요로만 지표를 산출하는 만큼 타사 평점제와 비교하면 점수가 높게 찍히는데, 이 영화는 골든 에그와 타사 평점이 거의 동일한 수준에 머무르고 있다. 이는 영화에 대한 호불호가 크게 갈려 호평하는 쪽은 10점을, 혹평하는 쪽은 1점을 주는 비중이 비교적 높다는 자료로 볼 수 있다.

                  </MovieDescription>
                </TextWrapper>
             </MovieDescWrapper>

             </Header>
             <SliderWrapper>        <ImageSlider slides={slides} page={page} setPage={setPage} totalPages={totalPages}/></SliderWrapper>

    </Wrapper>)

}
export default FilmDetail;