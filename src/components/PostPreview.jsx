import { Button, Typography } from "@mui/material";
import { styled } from "styled-components"
import { Divider } from '@mui/material';
import Chip from '@mui/material/Chip';


const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
padding-bottom: 1rem;
`;


const Title = styled.div`
display:inline-block

`;
const DeadLine = styled.div`
display:inline-block


`;
const CategoryWrapper = styled.div`

`;
const TitleWrapper = styled.div`
display: flex;
justify-content: flex-end;

`;

  function PostPreview(props){
    return (
        <Wrapper>
            <CategoryWrapper>
                <Chip label={props.filmo_type} />
                <Chip label={props.filmo_role} />
            </CategoryWrapper>
             <TitleWrapper>
                    
                <Title>{props.notice_title}</Title>                
                <Typography sx={{fontWeight: 'bold'}}>{props.apply_deadline_dt} </Typography>
                    
             </TitleWrapper>
        </Wrapper>

    )
}

export default PostPreview;