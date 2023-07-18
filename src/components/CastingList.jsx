import { styled } from "styled-components";
import CastingPreview from "./CastingPreview";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: brown;
    margin: auto;
    height: 100%;
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