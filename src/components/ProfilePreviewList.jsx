import styled from "@emotion/styled";
import ProfilePreview from "./ProfilePreview";

const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;

//


max-width: 60rem;
margin: auto;
padding: 2rem;

`;

function ProfilePreviewList(){
 return (<Wrapper>
        <ProfilePreview/>
        <ProfilePreview/>
        <ProfilePreview/>

 </Wrapper>);
}

export default ProfilePreviewList;