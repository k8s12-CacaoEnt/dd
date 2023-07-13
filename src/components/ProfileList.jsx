import styled from "@emotion/styled";
import ProfilePreview from "./ProfilePreview";
import { useEffect } from "react";
import axios from "axios";

const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;

//


max-width: 60rem;
margin: auto;
padding: 2rem;

`;



function ProfileList(){
       useEffect(()=>{ 
              axios.get("https://user.profilehub.info/v1/open/profile")
              .then((resp)=>{
                     console.log(JSON.stringify(resp))
              })


        }, [])

 return (<Wrapper>
       <ProfilePreview/>
       <ProfilePreview/>
       <ProfilePreview/>

 </Wrapper>);
}

export default ProfileList;