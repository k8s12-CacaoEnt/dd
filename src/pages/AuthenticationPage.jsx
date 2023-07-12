import React, {useState} from "react";
import axios from "axios";
import classes from "../components/AuthForm.module.css";

function AuthenticationPage() {
  const [email, setEmail] = useState("heewon@test.com");
  const [password, setPassword] = useState("123456789");
  const [isLogin, setIsLogin] = useState(true);

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

      // 로그인 성공한 경우, 응답 데이터를 처리하거나 필요한 작업을 수행할 수 있습니다.
      console.log("Login Response:", loginResponse.data);

    } catch (error) {
      // 로그인 요청 실패한 경우, 에러 처리를 수행할 수 있습니다.
      console.error(error);
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

      // Admin API 응답 데이터를 처리하거나 필요한 작업을 수행할 수 있습니다.
      console.log("Notice Response:", noticeResponse.data);

    } catch (error) {
      // Notice API 요청 실패한 경우, 에러 처리를 수행할 수 있습니다.
      console.error(error);
    }
  };

  const handleGetProfile = async () => {
    try {
      // User API 조회 요청
      const profileResponse = await axios.get(
          "https://user.profilehub.info/v1/profile/8",
          // "http://localhost:7001/v1/profile/2"
          {
            withCredentials: true, // 쿠키 전송을 위해 withCredentials 설정
          });

      // User API 응답 데이터를 처리하거나 필요한 작업을 수행할 수 있습니다.
      console.log("Profile Response:", profileResponse.data);

    } catch (error) {
      // Notice API 요청 실패한 경우, 에러 처리를 수행할 수 있습니다.
      console.error(error);
    }
  };

  const handleGetNoticeList = async () => {
    try {
      // Admin API 조회 요청
      const noticeResponse = await axios.get(
          "https://admin.profilehub.info/v1/notice"
          // "http://localhost:7002/v1/notice"
      );

      // Admin API 응답 데이터를 처리하거나 필요한 작업을 수행할 수 있습니다.
      console.log("Notice Response:", noticeResponse.data);

    } catch (error) {
      // Notice API 요청 실패한 경우, 에러 처리를 수행할 수 있습니다.
      console.error(error);
    }
  };

  const handleGetProfileList = async () => {
    try {
      // User API 조회 요청
      const profileResponse = await axios.get(
          "https://user.profilehub.info/v1/open/profile"
          // "http://localhost:7001/v1/open/profile"
      );

      // User API 응답 데이터를 처리하거나 필요한 작업을 수행할 수 있습니다.
      console.log("Profile Response:", profileResponse.data);

    } catch (error) {
      // Notice API 요청 실패한 경우, 에러 처리를 수행할 수 있습니다.
      console.error(error);
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
          <label style={{ display: "block" }}>required cookie</label>
          <button onClick={handleGetNotice}>Get Notice</button>
          <button onClick={handleGetProfile}>Get Profile</button>
        </div>

        <div className={classes.form}>
          <label style={{ display: "block" }}>non required cookie</label>
          <button onClick={handleGetNoticeList}>Get NoticeList</button>
          <button onClick={handleGetProfileList}>Get ProfileList</button>
        </div>

      </>
  );
}

export default AuthenticationPage;