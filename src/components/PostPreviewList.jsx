import { styled } from "styled-components";
import PostPreview from "./PostPreview";
import noticeList from "../api/notice";
const Wrapper = styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

max-width: 60rem;
flex-direction: column;
margin: auto;
padding: 2rem;
display: flex;
justify-content: flex-start
display: flex

`;

  function PostPreviewList(){
    return (<Wrapper>
        {
        noticeList.map((post, idx)=>{
        return <PostPreview
        key={idx}
        filmo_type={post.filmo_type}
            notice_title={post.notice_title}
            filmo_role={post.filmo_role}
            apply_deadline_dt={post.apply_deadline_dt}        
        />
        })
        }
        </Wrapper>)
}

export default PostPreviewList;