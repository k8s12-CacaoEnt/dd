import styled from "@emotion/styled";
import ProfilePreview from "./ProfilePreview";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Pagination from "./Pagination"
import { Link, NavLink, useNavigate } from "react-router-dom";



const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 60rem;
margin: auto;
padding: 2rem;

`;

const ProfileWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;
justify-content: start;
width: 100%;
align-items: center;

`;

/** TODO:
 * 전체 62개의 프로필이 온다고하면
 * 한번에 보여줄 수 있는 리스트가 4*5 = 20 대략 20개
 * 이때 나올 수 있는 페이지는
 * 62 / 20 = 4페이지
 * - 전체 profile 배우수가 온다고 가정하고
 * - 백엔드 api에 offset이랑 limit넣을 수 있다고함
 */

const PageButtonWrapper = styled.div`
border-color: black;
background-color:black
display: flex;

`;

const PageButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;



function ProfileList(props){
       const [profileList, setProfileList] = useState([]);
       // 페이지 네이션 수 
       const perPage = 10; 
       const [page, setPage] = useState(1); // // 현재 선택한 페이지
       const [totalPages, setTotalPages] = useState(1); //all page count
       const navigator = useNavigate();
       

       const handleTest = useCallback(()=>{
        let tempProfileList = []    
        axios.get(`https://user.profilehub.info/v1/open/profiles?offset=${page}&limit=${perPage}&sortKey=profileId`
        ).then(resp=>{
            let profileListData = resp.data.data;
            setTotalPages(profileListData.allPageCount);            
             if (profileListData.profileList.length >0){
                profileListData.profileList.map((profile)=>{                        
                    tempProfileList.push(profile)
                     })
                 setProfileList(tempProfileList)
             }
             
          })


       })

       useEffect(()=>{ 
        handleTest();
           },[page])
    //    },[handleTest])


 return (<Wrapper>

    
    <ProfileWrapper>
    
       {profileList.map((profile, idx) => 
       {
        return <article key={idx}>
                    {/* <span>{profile.profileId}</span> */}
            <NavLink to={`/actorProfile/${profile.profileId}`}>
              <ProfilePreview 
                    profileId={profile.profileId}
                     filePath={profile.images[0].filePath}
                     memberName={profile.memberInfo.memberName}
              />
            </NavLink>
          </article>
              
}

)}
       </ProfileWrapper>
       <Pagination               
              setPage={setPage}
              page={page}              
              totalPages = {totalPages}
       
       />

 </Wrapper>);
}

export default ProfileList;