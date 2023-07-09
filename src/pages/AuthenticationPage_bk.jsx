import { json , redirect} from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}){
  // 브라우저에서 기본으로 제공해주는 코드로
  //const searchParams = new URL(request.url).search;
  // search파라미터를 가져온다 값이 비어있으면 login으로 넣음
  //const mode = searchParams.get('mode') || 'login';




  // 리액트 라우터에서 실행되는것들
  //  form에서 submit했을때 request로 해당 데이터 가져오기
  const data = await request.formData();
  const authData = {
    memberEmail: data.get('email'),
    memberPassword: data.get('password')
  };

  console.log(authData);

  const response = await fetch('https://admin.profilehub.info/v1/auth/member/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData)
  })

  if (response.status === 200) {
    const cookies = response.headers.get('Set-Cookie');
    document.cookie = cookies;
  }else if (response.status == 422 || response.status == 401){
    return response;
  }
  console.log(response);

  return redirect('/');
}

// /auth로 가는 거 입력해보기