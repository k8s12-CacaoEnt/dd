import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import Pagination from './Pagination';
import axios from 'axios';
import dummyNoticeList from '../api/notice';
import Chip from '@mui/material/Chip';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TocIcon from '@mui/icons-material/Toc';
import AbcIcon from '@mui/icons-material/Abc';

const NoticeRow = ({ notice }) => {

    // let applyDeadlineDt = new Date(notice.applyDeadlineDt);
    // let formattedApplyDeadlineDt = applyDeadlineDt.toLocaleDateString('ko-KR');
    // let timeApplyDeadlineDt = applyDeadlineDt.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    // let filmingStartPeriod = new Date(notice.filmingStartPeriod);
    // let formattedFilmingStartPeriod = filmingStartPeriod.toLocaleDateString('ko-KR');
    // let timeFilmingStartPeriod = filmingStartPeriod.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    // let filmingEndPeriod = new Date(notice.filmingEndPeriod);
    // let formattedFilmingEndPeriod = filmingEndPeriod.toLocaleDateString('ko-KR');
    // let timeFilmingEndPeriod = filmingEndPeriod.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    return (
        <TableRow>
            <TableCell>
            <Link to={`/notice/${notice.noticeId}`}>{notice.title}</Link>
            </TableCell>
            <TableCell> <Chip label={notice.filmo_type}/></TableCell>
            <TableCell>{notice.filmo_name}</TableCell>
            <TableCell><Chip label={notice.filmo_role}/></TableCell>
            <TableCell>
                {notice.apply_deadline_dt}
            </TableCell>
            <TableCell>
                {notice.filming_start_period}
            </TableCell>
            <TableCell>
                {notice.filming_end_period}
            </TableCell>
        </TableRow>
    );
};

const NoticeListPage = () => {
    const [noticeList, setNoticeList] = useState(dummyNoticeList);
    
    // 페이지 네이션 수 
    const perPage = 4; 
    const [page, setPage] = useState(1); // // 현재 선택한 페이지
    const [totalPages, setTotalPages] = useState(1); //all page count

    const getNoticeList = ()=>{
        axios.get(`https://admin.profilehub.info/v1/notice?offset=${page}&limist=${perPage}`
        ).then(resp=>{
            
    
            setNoticeList(resp.data.data)
          })
       }

       useEffect(()=>{
        getNoticeList();

       },[page])



    if (!noticeList || noticeList.length === 0) {
        return <p>No Notices Found</p>;
    }

    return (
        <>
        {console.log()}
        {
            <NoticeDiv>
                <NoticeToolbar>
                캐스팅 공고
            </NoticeToolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><TocIcon/>제목</TableCell>
                            <TableCell><AbcIcon/>작품 타입</TableCell>
                            <TableCell><LocalMoviesIcon/>작품명</TableCell>
                            <TableCell><TheaterComedyIcon/> 구인 역할</TableCell>
                            <TableCell><ScheduleSendIcon color='primary'/>마감일</TableCell>
                            <TableCell><CalendarMonthIcon/>촬영 시작일</TableCell>
                            <TableCell><CalendarMonthIcon/>촬영 종료일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {noticeList.map((notice) => (
                            <NoticeRow key={notice.noticeId} notice={notice} />
                        ))}
                    </TableBody>
                </Table>
                <Pagination
                    setPage={setPage}
                    page={page}              
                    totalPages = {totalPages}       
                
                />
            </NoticeDiv>
        }
        </>
    );
};

const NoticeDiv = styled.div`
    // width: 100%;
    // background-color: white;

    border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 60rem;
margin: auto;
padding: 2rem;
    
`;

const NoticeToolbar = styled.div`
    width: 100%;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #111111;
`;
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    color: #222222;
    font-weight:900;
`;

const TableBody = styled.tbody`
    color: #444444;
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #888888;
    text-align: center;
    color:rgba(51,51,51,255);
    
`;

export default NoticeListPage;
