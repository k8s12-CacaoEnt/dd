import axios from "axios";

/*
세션스토리지의 JwtToken 반환
 */
export const getTokenToSessionStorage = () => {
    const token = sessionStorage.getItem('profilehub_access_token');
    return token;
}

/*
세션스토리지의 MemberInfo 반환
 */
export const getMemberInfoToSessionStorage = () => {
    const memberInfo = sessionStorage.getItem('profilehub_member_info');
    return JSON.parse(memberInfo);
}

/*
axios 요청 헤더 Authorization 설정
 */
const setAuthorizationHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

/*
세션 스토리지에 JwtToken 저장/삭제
 */
const saveTokenToSessionStorage = (token) => {
    if (token) {
        sessionStorage.setItem('profilehub_access_token', token);
    } else {
        sessionStorage.removeItem('profilehub_access_token');
    }
}

/*
세션 스토리지에 MemberInfo 저장/삭제
 */
const saveMemberInfoToSessionStorage = (memberInfo) => {
    if (memberInfo) {
        sessionStorage.setItem('profilehub_member_info', JSON.stringify(memberInfo));
    } else {
        sessionStorage.removeItem('profilehub_member_info');
    }
}

/*
로그인 시 세션스토리지 JwtToken 저장/axios 헤더 Authorization 세팅
 */
export const loginComplete = (token, memberInfo) => {
    saveTokenToSessionStorage(token);
    saveMemberInfoToSessionStorage(memberInfo);
    setAuthorizationHeader(token);
}

/*
로그아웃 시 세션스토리지 JwtToken 삭제/axios 헤더 Authorization 제거
 */
export const logoutComplete = () => {
    saveTokenToSessionStorage();
    saveMemberInfoToSessionStorage();
    setAuthorizationHeader();
}
