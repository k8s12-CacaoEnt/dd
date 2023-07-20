import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import {useSelector, useDispatch} from 'react-redux';
import { getTokenToSessionStorage, getMemberInfoToSessionStorage } from '../comm/common.js';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/*
https://imgur.com/a/bayU3zD
https://imgur.com/LmAxmnt
https://imgur.com/EkQwTNq
https://imgur.com/jzrYhMY
https://imgur.com/GxuKCTB

*/

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
//width: 238px;
`;

const Wrapper = styled.div`
border-width: 1px;
border-style: solid;
border-color: var(--color-gray-border);
border-radius: 10px;
border-color: black;
padding: 0;
width: 170px;
//width: 240px;
text-align: left;
margin-bottom: 30px;
position: relative;
}

`;

const ProfileName = styled.div`
background-color: black;
font-size: 16px;
line-height: 1.25em;
padding: 7px 10px 8px;
border-radius: 10px;
margin-top:0;
color:white;
`;

const ProfileDesc = styled.div`

padding: 3px 3px;
width: 100%;
overflow-y: auto;
overflow-x: hidden;
`;

const ProfileBtns = styled.div`
`;

function ProfilePreview({memberName, filePath, profileId}){
    const navigator = useNavigate();
    const isLoginDispatch = useDispatch();
    const {isLogin, userInfo} = useSelector((state) => state);

    useEffect(() => {

        const token = getTokenToSessionStorage();

        if(token){
            const memberInfo = getMemberInfoToSessionStorage();
            isLoginDispatch({type: 'isLogin', token: token, data: memberInfo});
            // console.log(isLogin)
            // console.log(memberInfo)

        }

            
    }, []);

        const handleClick = (e) => {
             console.log("hi??")
            navigator(`/actorProfile/${profileId}`)
        };

    return(
        <Wrapper>
            <ImgWrapper>
             <Img src={filePath} />
            </ImgWrapper>
            <ProfileName>
            {memberName}
                {/* <Typography sx={{fontWeight:'bold'}} >{memberName}</Typography> */}
            </ProfileName>                    
            <ProfileDesc>
            <button onClick={handleClick}>{profileId}</button>
                {/* <ul style={{'list-style-type': 'none'}}>
                    <li>서초구, 서울시</li>
                    <li>ddd년</li>
                    <li>어쩌구</li>
                </ul> */}

            </ProfileDesc>

        </Wrapper>
    )
}
export default ProfilePreview;