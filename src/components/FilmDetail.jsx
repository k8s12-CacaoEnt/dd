import { useParams } from "react-router-dom";
import { styled } from "styled-components";


const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;
//


max-width: 60rem;
margin: auto;
padding: 2rem;

`;

function FilmDetail (props){
    const param = useParams()
    const filmId = param.filmId

    return(<Wrapper>
            자세히보기 페이지! 
            필름 ! {filmId}
    </Wrapper>)

}
export default FilmDetail;