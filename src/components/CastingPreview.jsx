import { styled } from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;

max-width: 60rem;
height: 50%;
padding: 2rem;
// display: flex;
// justify-content: flex-start
    
`;

const CardLeft = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
//align-items: center;
background-color: blue;
width: 60%;
padding: 10px;

`;

const CardTitle = styled.h3`
`;

const CardSubTitle = styled.div`
    font-weight: 900;
`;
const CardDesc = styled.div``;

const CardChip = styled.div`
// film type,  film role 
`;


const CardRight = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
//align-items: center;
background-color: yellow;
width: 40%;
padding: 10px;


`;

function CastingPreview(){
    return (<Wrapper>
        <CardLeft>
                <CardTitle>제목!</CardTitle>
                <CardSubTitle>description:</CardSubTitle>
                <CardDesc>Casting a male actor for the Baltimore 48 Hour film project.</CardDesc>
                <CardSubTitle>film starts, ends at </CardSubTitle>
                <CardDesc>Casting a male actor for the Baltimore 48 Hour film project.</CardDesc>

        </CardLeft>
        <CardRight>
        

        </CardRight>
    </Wrapper>)
}
export default CastingPreview;