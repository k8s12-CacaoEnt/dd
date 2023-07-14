import styled from "@emotion/styled";
import ProfilePreview from "./ProfilePreview";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Pagination from "./Pagination"
import { Link } from "react-router-dom";



const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
gap : 10px;

//


max-width: 60rem;
margin: auto;
padding: 2rem;

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
       // 그냥 전체 들어왔다고 가정하고 
       //  재렌더링마다
       const [profileList, setProfileList] = useState([]);

       // 페이지 네이션 수 
       const perPage = 10; 

       // 현재 선택한 페이지
       const [page, setPage] = useState(1);


       const offset = (page - 1) * perPage;

       let temp = []
       useEffect(()=>{ 
             
              for (let i=0; i<=63; i++){
                     temp.push({
                            "status": "SUCCESS",
                            "message": "프로필 리스트 조회 성공했습니다.",
                            "data": [
                                {
                                    "profileId": `${i}`,
                                    "title": `타이틀입니다 ㅎㅎ ${i}`,
                                    "content": `저는 춤을 잘 춥니다 ${i}`,
                                    "defaultImageId": null,
                                    "createDt": "2023-07-09T16:25:47.575135",
                                    "memberInfo": {
                                        "memberId": 1,
                                        "memberType": "ADMIN",
                                        "memberEmail": `heewon${i}@test.com`,
                                        "memberName": `heewon ${i}`,
                                        "gender": "FEMALE",
                                        "telNo": "010-1234-5678",
                                        "birthDt": "2023-06-28"
                                    },
                                    "images": [
                                        {
                                            "imageId": 14,
                                            "fileName": "0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png",
                                            "filePath": "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png",
                                            "fileRealName": "image1.png",
                                            "createDt": "2023-07-09T16:25:50.212635"
                                        },
                                        {
                                            "imageId": 15,
                                            "fileName": "8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png",
                                            "filePath": "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/8d2ef2cd-6dcd-447c-a711-af29c6227fa7.png",
                                            "fileRealName": "image2.png",
                                            "createDt": "2023-07-09T16:25:50.216568"
                                        }
                                    ],
                                    "videos": [],
                                    "filmos": [
                                        {
                                            "filmoId": 13,
                                            "filmoType": "DRAMA",
                                            "filmoName": "필모이름 드라마",
                                            "filmoYear": "2023",
                                            "filmoDirector": "필모감독",
                                            "createDt": "2023-07-09T16:25:50.220694"
                                        },
                                        {
                                            "filmoId": 14,
                                            "filmoType": "MOVIE",
                                            "filmoName": "필모이름 영화",
                                            "filmoYear": "2013",
                                            "filmoDirector": "필모감독",
                                            "createDt": "2023-07-09T16:25:50.224330"
                                        }
                                    ],
                                    "links": [
                                        {
                                            "linkId": 7,
                                            "link": "https://www.inflearn.com/courses?s=%EA%B9%80%EC%98%81%ED%95%9C%20api",
                                            "linkName": "인프런 김영한 검색",
                                            "createDt": "2023-07-09T16:25:50.228213"
                                        }
                                    ]
                                }
                            ],
                            "statusCode": 200
                        }       )
              }
              setProfileList(temp)
       
              //setPages(Math.trunc(profileList.length/perPage))
              
       },[])


 return (<Wrapper>

    

       <>타이틀</>
       <>프로필리스트
       {profileList.slice(offset, offset + perPage).map((profile, idx) => 
       {
              return <article key={idx}>
                     <Link to="/actorProfile/{}">
              <ProfilePreview  
                     filePath={profile.data[0].images[0].filePath}
                     memberName={profile.data[0].memberInfo.memberName}
              /></Link>
            {/* <h3>
              {profile.data[0].profileId}. {profile.data[0].title}
            </h3>
            <p>{profile.data[0].content}</p> */}
          </article>
}

)}
       </>
       <Pagination 
              limit={perPage}
              setPage={setPage}
              page={page}
              total={profileList.length}
       
       />

 </Wrapper>);
}

export default ProfileList;