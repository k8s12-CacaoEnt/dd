import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";


const ImgWrapper = styled.div`
border-radius: 0;
box-shadow: none;
box-sizing: border-box;
`;

const Img = styled.img`
transition: transform var(--duration-long) ease;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
-o-object-fit: cover;
object-fit: cover;
height: 238px;
width: 170px;
border-radius: 10px;
//width: 238px;
`;

const Wrapper = styled.div`
border-width: 1px;
border-color: var(--color-gray-border);
border-radius: 10px;
border-color: black;
padding: 0;
width: 170px;
//width: 240px;
text-align: left;
margin-bottom: 30px;
position: relative;
cursor: pointer;
`;

const ProfileName = styled.div`
background-color: rgba(51,51,51,255);
font-size: 16px;
font-weight: 500;
text-align: center;
line-height: 1.25em;
padding: 7px 10px 8px;
border-radius: 10px;
color:white;
height:100%;

`;

const ProfileDesc = styled.div`

padding: 3px 3px;
width: 100%;
overflow-y: auto;
overflow-x: hidden;
`;

function FilmPreview(props){
    const navigator = useNavigate();
    const clickHandle = (e) => {
        // 이동
        navigator(`/films/${props.filmsId}`)
    };

    return (<Wrapper onClick={clickHandle}>
        <Img src={props.image_path}/>
        <ProfileName>{props.title}</ProfileName>
    </Wrapper>)
}

export default FilmPreview;