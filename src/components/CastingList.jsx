import { styled } from "styled-components";
import CastingPreview from "./CastingPreview";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: brown;
    margin: auto;
    height: 100%;
    padding: 2rem;

    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 60rem;
margin: auto;
padding: 2rem;
`;


function CastingList(){
    return (
        <Wrapper>            
                <CastingPreview/>
                <CastingPreview/>
                <CastingPreview/>
                <CastingPreview/>
        </Wrapper>
    )

}

export default CastingList;