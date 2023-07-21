import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import Pagination from './Pagination';
import axios from 'axios';
import dummyNoticeList from '../api/notice';


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
            <TableCell>{notice.filmo_type}</TableCell>
            <TableCell>{notice.filmo_name}</TableCell>
            <TableCell>{notice.filmo_role}</TableCell>
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
                Notice Board
            </NoticeToolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Start Period</TableCell>
                            <TableCell>End Period</TableCell>
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
    width: 100%;
    background-color: white;
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
`;

const TableBody = styled.tbody`
    color: #444444;
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #888888;
`;

export default NoticeListPage;
