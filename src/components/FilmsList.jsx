import { styled } from "styled-components"
import FilmPreview from "./FilmPreview";
import ProfilePreview from "./ProfilePreview";

import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";


const l = [{
    filmsId: 4444,
    title: "레디액션! 폭력영화 ",
    filmo_type: "MOVIE",
    default_image_id: 28, // starting from 28 
    genre: "ACTION",
    synopsis: "장르의 상상력 ‘미쟝센 단편영화제’가 검증했다!최우수작품상, 심사위원특별상, 심사위원특별언급에 빛나는 작품들의 ‘특급 콜라보’ 2002년, 장르의 상상력에 주목한 한국의 대표 감독들이 탄생시킨 미쟝센 단편영화제는 <황해>(2010)의 나홍진 감독, <범죄와의 전쟁 : 나쁜놈들 전성시대>(2011)의 윤종빈 감독 등을 배출한, 신인 감독의 등용문으로도 익히 알려져 있다. 오는 6월 5일 개봉을 앞두고 있는 <레디 액션! 폭력영화>의 정재웅, 최원경, 김도경 세 감독 또한 제11회 미쟝센 단편영화제(2012) 출신으로, 그들이 각각 선보인 작품은 926편이라는 어마어마한 경쟁률을 뚫고 액션/스릴러 섹션인 ‘4만 번의 구타’에 선정되었다. 나란히 같은 섹션에 초청된 세 작품은 각기 다른 개성 있는 스토리텔링과 폭력의 묘사를 통해 ‘폭력영화’만의 새로운 쾌감을 선사했다. 출연 배우 전원이 심사위원 특별상(연기부문)을 수상한 <민호가 착하니 천하무적>의 주인공들은 모두 ‘칼’을 통해 묻지마폭행과 그에 대한 살벌한 복수를 행한다. 마치 쿠엔틴 타란티노 감독의 <킬빌>을 연상시키는 현란한 칼의 놀림은 그 자체로 섬뜩한 감정을 전한다. 심사위원 특별언급을 통해 가능성을 주목 받은 두 번째 에피소드 <메이킹 필름>은 독특하게 ‘밧줄’을 이용하여 폭력을 묘사한다. 영화의 설정인 ‘결박’은 그 자체로 폭력인 셈. 그 결박을 가능케 하는 도구인 밧줄은 점차 예민해지고 무자비한 폭력을 당할 수밖에 없는 주인공과 관객들에게 극한의 공포를 선사한다. ‘4만 번의 구타’ 섹션의 최우수작품상을 수상한 <나의 싸움>은 ‘맨주먹’을 도구로 내세웠다. 두 달 여의 합숙생활을 통해 합을 맞춘 배우들의 노력과 맨주먹의 생생함을 포착하기 위한 감독의 세심한 연출력이 무엇보다 돋보인다. 매년 반짝거리는 가능성을 가진 신인감독들의 작품에 주목해온 미쟝센 단편영화제가 발견한 ‘특급 콜라보레이션’ 영화 <레디액션! 폭력영화>. 감독 각자가 추구하는 장르 영화와 개성 있는 스타일이 일치했기에 가능했던 이 장편 프로젝트는 오로지 폭력영화로 승부를 걸겠다는 다부진 포부로 시작되어, 파격으로 회자될 2014년의 문제적 데뷔작으로 관객 앞에 선다. ",
    release_date: "2014-06-05",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230707/d.png"
},

{
    filmsId: 5555,
    title: "블루 레어",
    filmo_type: "MOVIE",
    default_image_id: 28, // starting from 28 
    genre: "HORROR",
    synopsis: " 춘배와 수정은 좀비 고기를 판매하는 업자들이다. 어느 날, 올드맨 회장이 찾아와 춘배에게 인간을 좀비로 만들어 매매하는 좀비양식장 사업을 제안한다. 춘배는 이를 거절하자 올드맨은 춘배를 제거하기로 한다. ",
    release_date: "2016-07-19",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230707/%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%85%E1%85%A6%E1%84%8B%E1%85%A5.png"
    
},

{
    filmsId: 6666,
    title: "아들의 것",
    filmo_type: "DRAMA",
    default_image_id: 28, // starting from 28 
    genre: "DRAMA",
    synopsis: " 갯벌에서 홀로 생계를 꾸려 가시는 할머니. 아들을 기다리는 하루 동안의 이야기. ",
    release_date: "2006-01-22",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230707/%E1%84%8B%E1%85%A1%E1%84%83%E1%85%B3%E1%86%AF%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%A7%E1%86%A8.png"
    
}
]



const Wrapper = styled.div`
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 60rem;
margin: auto;
padding: 2rem;

`;

const MoviesWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;
justify-content: start;
width: 100%;
align-items: center;
`;

const SearchWrapper = styled.div`
display:flex;
flex
`;
const SearchField = styled.input``;
const SearchButton = styled.button`
`

const FilmList = () => {
    return (<Wrapper>

        <MoviesWrapper>
        
        {l.map((movie,idx)=>{
                           
          return(      <FilmPreview key={idx}
                    image_path={movie.image_path}
                    title={movie.title}
                    filmsId={movie.filmsId}
            />)
        })}
        
        </MoviesWrapper>
        
            <Pagination/>
        
    </Wrapper>
    )
}

export default FilmList;