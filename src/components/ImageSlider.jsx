
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";



const Arrow = styled.button`
border: none;
border-radius: 8px;
padding: 8px;
margin: 0;
background: black;
color: white;
font-size: 1rem;

&[disabled] {
  background: grey;
  cursor: revert;
  transform: revert;
}
`;



const CastingName = styled.div`

`;

const CastingWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;

`;
const CastingImg = styled.img`
height: 120px;
width: 120px;
border-radius: 50%;
`;
const DotsContainerStyles = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`



const Wrapper = styled.div`
display: flex;
flex-direction: column;
text-align:center;
@media (max-width: 650px){
  // 가로가 650px;아래면
  width:640;
  height:360;
}  
`;

const ImageSlider = ({ slides, page, setPage, totalPages }) => {
  const nav= useNavigate()


  return (
    <Wrapper>
      
      <DotsContainerStyles >

      <Arrow onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </Arrow>
                  
      
        {slides.slice(page,page+3).map((slide, slideIndex) => (
          <CastingWrapper>
          
          <CastingImg src={slide.url}      
            key={slideIndex}
            onClick={() => nav(`/actorProfile/${slide.id}`)}
          />
        <CastingName>{slide.title}</CastingName>

          
          </CastingWrapper>
        ))}
          <Arrow onClick={() => setPage(page + 1)} disabled={page === totalPages-3}>
            &gt;
          </Arrow>        
        
      </DotsContainerStyles>
    </Wrapper>
  );
};

export default ImageSlider;