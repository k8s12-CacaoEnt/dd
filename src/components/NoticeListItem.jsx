import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import {Typography, Divider} from "@mui/material";
import noticeList from "../api/notice";
let a = {
    "notice_id": 1,
    "notice_title": "NOW HIRING: TikTok LiveNOW HIRING: TikTok Live Streaming Hosts! Streaming Hosts!",
    "notice_content": "NOW HIRING: TikTok Live Streaming Hosts! TikTok is the most popular short-form video app with an easy-to-use interface and a massive user base. The platform has a new shopping feature, making it a game-changer for influencers, brands, and businesses to monetize their TikTok presence. This allows users to discover and purchase products they love, creating a seamless shopping experience. Our studio is located at ROW DTLA, with free parking, 24/7 security [Requirement] - Males/Females are both ",
    "filmo_type": "Film",
    "filmo_name": "Film 1",
    "filmo_role": "Actor",
    "apply_deadline_dt": "2023-03-09",
    "filming_start_dt": "2023-12-18",
    "filming_end_dt": "2023-12-25",
    "create_dt": "2023-03-17 05:15:17.013",
    "modify_dt": "2023-03-28 22:50:26.425",
    "member_id": 2
}


const NoticeWrapper = styled.div`

/*flex로 해야 게시글들이 세로로 떨어짐*/
display:flex;
flex-direction: column;
background-color: green;


/*이거 안하면 안에 있는 게시글들이 튀어나온다..*/
// width:100%;
`;

const NoticeContents = styled.div`

background-color: ${props => props.bg}; 
padding: 5px;

/*게시글제목이 수평으로 크게 두줄로 보이고 싶음*/
display: flex;
flex-direction: row;
justify-content: center;


`;
const NoticeLeft = styled.div`
background-color: red;
`;
const NoticeRight = styled.div`
background-color: blue;
`;

const NoticeDeadline = styled.div`
`;
const NoticeTitle = styled.div`
`;

const NoticeRole = styled.div`
`;
const NoticeFilmName = styled.div`

`;


function NoticeListItem(){
    return <NoticeWrapper >


            {
            noticeList.splice(0,5).map((notice, idx)=>{
                return <NoticeContents key={idx}>
                    <NoticeLeft>
                        <Button size="small" variant="contained">{notice.filmo_role}</Button>
                        {notice.notice_title}
                    </NoticeLeft>
                        
                    <NoticeRight>                        
                    {notice.apply_deadline_dt}
                    </NoticeRight>
                </NoticeContents>    
            })
            }


            <NoticeContents bg="red">
                어쩌구
            </NoticeContents>

            <NoticeContents bg="gray">
                어쩌구
            </NoticeContents>


    </NoticeWrapper>
}
export default NoticeListItem;




