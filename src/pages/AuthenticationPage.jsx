import React, {useState, useEffect} from "react";
import axios from "axios";
import classes from "../components/AuthForm.module.css";
import {useSelector, useDispatch} from 'react-redux';

function AuthenticationPage() {

    let systemType = 'prod';

    const prefix = {
        'local': {
            'user': 'http://localhost:7001',
            'admin': 'http://localhost:7002'
        },
        'dev': {
            'user': 'https://devuser.profilehub.info',
            'admin': 'https://devadmin.profilehub.info'
        },
        'prod': {
            'user': 'https://user.profilehub.info',
            'admin': 'https://admin.profilehub.info'
        }
    }

    const url = {
        login: '/v1/auth/member/login',
        notice: '',
        profile: '',
        noticeList: '/v1/notice',
        profileList: '/v1/open/profile?offset=1&limit=20'
    }

    const [email, setEmail] = useState("heewon@test.com");
    const [password, setPassword] = useState("123456789");

    const {isLogin, userInfo} = useSelector((state) => state);
    const isLoginDispatch = useDispatch();

    useEffect(() => {
        console.log(isLogin);
        console.log(userInfo);
    }, [isLogin, userInfo]);

    const successLogin = (data) => {
        isLoginDispatch({type: 'isLogin', data: data.memberInfo, token: data.jwtToken});
    }

    const failLogin = () => {
        isLoginDispatch({type: 'isNonLogin'});
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // 로그인 요청
            const loginResponse = await axios.post(
                prefix[systemType].admin + url.login,
                {
                    memberEmail: email,
                    memberPassword: password,
                },
                {
                    withCredentials: true,
                }
            );
            console.log("Login Response:", loginResponse.data);
            successLogin(loginResponse.data.data);
        } catch (e) {
            console.log("Login Response:", e.response.data);
            failLogin();
        }
    };

    const handleGetNotice = async () => {
        try {
            // Admin API 조회 요청
            const noticeResponse = await axios.get(
                "https://admin.profilehub.info/v1/notice/admin/noticeId/1",
                // "http://localhost:7002/v1/notice/admin/noticeId/4",
                {
                    withCredentials: true, // 쿠키 전송을 위해 withCredentials 설정
                });

            console.log("Notice Response:", noticeResponse.data);
        } catch (e) {
            console.log("Notice Response:", e.response.data);
        }

    };

    const handleGetProfile = async () => {
        try {
            // User API 조회 요청
            const profileResponse = await axios.get(
                "https://user.profilehub.info/v1/profile/profileId/8",
                // "http://localhost:7001/v1/profile/2",
                {
                    withCredentials: true, // 쿠키 전송을 위해 withCredentials 설정
                });

            console.log("Profile Response:", profileResponse.data);
        } catch (e) {
            console.log("Profile Response:", e.response.data);
        }
    };

    const handleGetNoticeList = async () => {
        try {
            // Admin API 조회 요청
            const noticeResponse = await axios.get(
                prefix[systemType].admin + url.noticeList,
            );

            console.log("NoticeList Response:", noticeResponse.data);
        } catch (e) {
            console.log("NoticeList Response:", e.response.data);
        }
    };

    const handleGetProfileList = async () => {
        try {
            // User API 조회 요청
            const profileResponse = await axios.get(
                prefix[systemType].user + url.profileList,
            );

            console.log("ProfileList Response:", profileResponse.data);
        } catch (e) {
            console.log("ProfileList Response:", e.response.data);
        }
    };

    return (
        <>
            <form method="post"
                  className={classes.form} onSubmit={handleLogin}>
                <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           type="email"
                           name="email"
                           required
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="image">Password</label>
                    <input id="password"
                           type="password"
                           name="password"
                           required
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                <div className={classes.actions}>
                    {/* <button onClick={switchAuthHandler} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </button> */}
                    <button type="submit">Save</button>
                </div>
            </form>

            <div className={classes.form}>
                <label style={{display: "block"}}>Required Cookie</label>
                <button onClick={handleGetNotice}>Get Notice</button>
                <button onClick={handleGetProfile}>Get Profile</button>
            </div>

            <div className={classes.form}>
                <label style={{display: "block"}}>Non Required Cookie</label>
                <button onClick={handleGetNoticeList}>Get NoticeList</button>
                <button onClick={handleGetProfileList}>Get ProfileList</button>
            </div>

        </>
    );
}

export default AuthenticationPage;