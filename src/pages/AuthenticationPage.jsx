import React, {useState} from "react";
import axios from "axios";
import classes from "../components/AuthForm.module.css";

function AuthenticationPage() {
    const [email, setEmail] = useState("heewon@test.com");
    const [password, setPassword] = useState("123456789");
    const [isLogin, setIsLogin] = useState(true);

    // axios 요청 헤더에 항상 token 세팅
    const setAuthorizationHeader = (token) => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    // 토큰을 세션 스토리지에 저장하는 예시 함수
    const saveTokenToSessionStorage = (token) => {
        sessionStorage.setItem('profilehub_access_token', token);
        setAuthorizationHeader(token); // 요청 헤더 설정
    };

    // 애플리케이션 시작 시 토큰을 세션 스토리지에서 가져와서 설정
    const token = sessionStorage.getItem('profilehub_access_token');
    setAuthorizationHeader(token);


    function switchAuthHandler() {
        setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // 로그인 요청
            const loginResponse = await axios.post(
                "https://admin.profilehub.info/v1/auth/member/login",
                // "http://localhost:7002/v1/auth/member/login",
                {
                    memberEmail: email,
                    memberPassword: password,
                },
                {
                    withCredentials: true,
                }
            );
            console.log("Login Response:", loginResponse.data);
            saveTokenToSessionStorage(loginResponse.data.data);
        } catch (e) {
            console.log("Login Response:", e.response.data);
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
                "https://user.profilehub.info/v1/profile/8",
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
                "https://admin.profilehub.info/v1/notice"
                // "http://localhost:7002/v1/notice"
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
                "https://user.profilehub.info/v1/open/profile"
                // "http://localhost:7001/v1/open/profile"
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
                <label style={{display: "block"}}>required cookie</label>
                <button onClick={handleGetNotice}>Get Notice</button>
                <button onClick={handleGetProfile}>Get Profile</button>
            </div>

            <div className={classes.form}>
                <label style={{display: "block"}}>non required cookie</label>
                <button onClick={handleGetNoticeList}>Get NoticeList</button>
                <button onClick={handleGetProfileList}>Get ProfileList</button>
            </div>

        </>
    );
}

export default AuthenticationPage;