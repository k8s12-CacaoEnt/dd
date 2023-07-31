import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Chip from '@mui/material/Chip';



const dummyNotice = {
    noticeId: 1,
    noticeTitle: '니케 모델 모집합니다.',
    noticeContent: `이번 2023 S/S 니케 모델을 찾고 있습니다.
    본인의 스타일이 니케에 가장 어울리고 잘 맞는다고 생각하시는 분들, 나의 가치관이 니케와
    일치한다고 생각하시는 분들 등 많은 분들의 지원 부탁드립니다.`,
    filmoType:'모델',
    filmoName:'니케 S/S 모델 구인',
    filmoRole:'니케 남성 모델',
    applyDeadlineDt:'2023-08-01T12:00:00.000Z',
    filmingStartPeriod:'2023-09-01T12:00:00.000Z',
    filmingEndPeriod: '2023-10-01T12:00:00.000Z',
    createDt: '2023-07-01T12:00:00.000Z',
    modifyDt: '2023-07-01T12:00:00.000Z',
};

const formatDateTime = (dateStr) => {
    let date = new Date(dateStr);
    let formattedDate = date.toLocaleDateString('ko-KR');
    let formattedTime = date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    
    return `${formattedDate} ${formattedTime}`;
}

const formatDateTimeIfExist = (dateStr) => {
    if (dateStr) {
        let date = new Date(dateStr);
        let formattedDate = date.toLocaleDateString('ko-KR');
        let formattedTime = date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate} ${formattedTime}`;
    }
    return '';
}

const NoticeItem = ({ notice, isEditing, onChange, onSubmit }) => {
        return (
            <NoticeDiv>
                <NoticeTitleDiv>
                    {notice.title}
                </NoticeTitleDiv>
                <NoticeContentDiv>
                    <p>
                        작품 분류 :                         
                        <Chip label={notice.filmo_type}/>
                        </p>
                    <p>
                        작품명 : 
                        {notice.filmo_name}
                        </p>
                    <p>
                        역할명 : 
                        <Chip label={notice.filmo_role}/>
                        </p>
                    <p>
                        지원 마감 일자 :
                        {formatDateTime(notice.apply_deadline_dt)}
                    </p>
                    <p>
                        촬영 시작(예정)일 :
                        {formatDateTime(notice.filming_start_period)}
                    </p>
                    <p>
                        촬영 종료(예정)일 :
                        {formatDateTime(notice.filming_end_period)}
                    </p>
                    <p>
                        작성일 :
                        {formatDateTime(notice.create_dt)}
                    </p>
                    {notice.modifyDt && (
                        <p>
                            수정일 :
                            {formatDateTimeIfExist(notice.modify_dt)}
                        </p>
                    )}
                    <p>
                        상세 내용 :
                        {notice.content}
                    </p>
                </NoticeContentDiv>
            </NoticeDiv>
        );}

function ProfilePage() {

    
    const { noticeId } = useParams();
    const navigate = useNavigate();
    const [notice, setNotice] = useState(dummyNotice); // null?
    const [isEditing, setIsEditing] = useState(false);


    const handleTest = ()=>{
        axios.get(`https://admin.profilehub.info/v1/notice/noticeId/${noticeId}`
        ).then(resp=>{
            // console.log(resp.data.data);
            setNotice(resp.data.data)
            // setTotalPages(profileListData.allPageCount);            
            //  if (profileListData.profileList.length >0){
            //     profileListData.profileList.map((profile)=>{                        
            //         tempProfileList.push(profile)
                    //  })
                 // setProfileList(tempProfileList)
            
             
          })
       }



    useEffect(() => {
        // TODO: API call to get the notice info
        handleTest();
        //setNotice(dummyNotice);
    }, []);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setNotice(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: API call to update the notice
        console.log(`Updated notice: ${JSON.stringify(notice, null, 2)}`);
        //         await updateNoticeInDB(notice);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        // TODO: API call to delete the notice
        console.log(`Deleted notice: ${noticeId}`);
        //         await deleteNoticeInDB(noticeId);
        // Redirect to the notice list page after successful deletion
        navigate('/noticeListPage');
    };

    if (notice === null) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <NoticeItem notice={notice} isEditing={isEditing} onChange={handleChange} onSubmit={handleSubmit} />
            {!isEditing}
        </>
    );
}

const NoticeDiv = styled.div`
    width: 100%;
    background-color: white;
margin: auto;

`;
const NoticeTitleDiv = styled.h1`
    box-sizing: border-box;
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

    width: 100%;
    font-weight:900;
    text-align: center;
    padding: 20px;
    color:rgba(51,51,51,255);
    border: 1px solid #888888;
    border-rai

`;
const NoticeContentDiv = styled.div`
    box-sizing: border-box;
    width: 100%; // 100% vs 100vw 
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

    text-align: left;
    padding: 20px;
    color: #444444;
    border: 1px solid #888888;
`;
const StyeldLabel = styled.label`
    display : white;
    margin-bottom: 10px
`;
const StyledInput = styled.input`
    display : block;
    width:100%
    margin-bottom: 20px
`;
const StyledTextArea = styled.textarea`
    display: block;
    width: 100%
    margin-bottom: 20px
`;

export default ProfilePage;