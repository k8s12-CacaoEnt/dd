import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { removeMemberInfoFromSessionStorage, removeTokenFromSessionStorage } from "../comm/common";
import { styled } from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;`

const Logout = () => {
    const isLogin = useSelector(state => state.isLogin);
    const isLoginDispatch = useDispatch();
    
    //멤버정보와 토큰 정보 삭제
    removeMemberInfoFromSessionStorage();
    removeTokenFromSessionStorage();
    // 이게 뭔지 모르겠음
    isLoginDispatch({type: 'isNonLogin'});


    // 3초후에 메인페이지로 이동합니다
    // HTML 렌더링 되고나서 가니까
    const navigator = useNavigate();
    useEffect(()=>{
        let timer = setTimeout(()=>{navigator('/')}, 1000);
        return ()=> {
    //         //useEffect실행되기전에 항상 실행되는 코드 
            clearTimeout(timer);
        }
    },[])

        return(<Wrapper>
        1초후에 메인페이지로 이동합니다
    </Wrapper>)

};

export default Logout;