import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const slideStyles = {
  width: "50px",
  height: "50px",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  
};

const RightArrow = styled.div`
// position: absolute;
top: 50%;
transform: translate(0, -50%);
right: -100;
font-size: 55px;
color: #fff;
z-index: 1;
cursor: pointer;
}
`;

const LeftArrow = styled.div`
// position: absolute;
top: 50%;
transform: translate(0, -50%);
left: 32px;
font-size: 55px;
position:abolute;
color: #fff;
z-index: 1;
cursor: pointer;
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

const ImageSlider = ({ slides }) => {
  const nav= useNavigate()
  const [currentIndex, setCurrentIndex] = useState(3);
  const [step, setStep] = useState(3);
  const [start, setStart] = useState(0);
  const goToPrevious = () => {
    const newIndex = currentIndex - 3;
    const newStart = start - 3;

    if(newStart < 0 ){
      setCurrentIndex(3);      
      setStart(0) 
    }else{
      setStart(newStart)
      setCurrentIndex(newIndex);
    }
    console.log(newStart, newIndex)
  };

  const goToNext = () => {
    const newIndex = currentIndex + 3;
    const newStart = start + 3;

    if(slides.length - newIndex < 0){
      setCurrentIndex(slides.length-1);      
      setStart(slides.length-4)
    }else{
      setStart(newStart)
      setCurrentIndex(newIndex);
    }
    
    console.log(newStart,newIndex)
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
        ...slideStyles,
    position: "relative",
    height: "100%",
  
};




  return (
    <Wrapper>
      
      <DotsContainerStyles >
      <LeftArrow onClick={goToPrevious} >❰</LeftArrow>
        {slides.slice(start,currentIndex).map((slide, slideIndex) => (
          <CastingWrapper>
          
          <CastingImg src={slide.url}      
            key={slideIndex}
            onClick={() => nav(`/actorProfile/${slide.id}`)}
          />
        <CastingName>{slide.title}</CastingName>

          
          </CastingWrapper>
        ))}
        <RightArrow onClick={goToNext} >❱</RightArrow>
      </DotsContainerStyles>
    </Wrapper>
  );
};

export default ImageSlider;