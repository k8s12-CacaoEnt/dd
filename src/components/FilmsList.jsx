import { styled } from "styled-components"
import FilmPreview from "./FilmPreview";
import ProfilePreview from "./ProfilePreview";

import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";


const l = [{
    filmsId: 4444,
    title: "Barbie4",
    filmo_type: "DRAMA",
    default_image_id: 28, // starting from 28 
    genre: "Horror",
    synopsis: "바비 세상에 어쩌구 저쩌구!",
    release_date: "2023-07-19",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png"
},

{
    filmsId: 5555,
    title: "Barbie5",
    filmo_type: "MOVIE",
    default_image_id: 28, // starting from 28 
    genre: "Horror",
    synopsis: "바비 세상에 어쩌구 저쩌구!",
    release_date: "2023-07-19",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png"
    
},

{
    filmsId: 6666,
    title: "Barbie6",
    filmo_type: "DRAMA",
    default_image_id: 28, // starting from 28 
    genre: "Horror",
    synopsis: "바비 세상에 어쩌구 저쩌구!",
    release_date: "2023-07-22",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png"
    
},

{
    filmsId: 7777,
    title: "Barbie7",
    filmo_type: "DRAMA",
    default_image_id: 28, // starting from 28 
    genre: "Horror",
    synopsis: "바비 세상에 어쩌구 저쩌구!",
    release_date: "2023-07-24",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png"

    
},
{
    filmsId: 8888,
    title: "Barbie8",
    filmo_type: "MOVIE",
    default_image_id: 28, // starting from 28 
    genre: "Horror",
    synopsis: "바비 세상에 어쩌구 저쩌구!",
    release_date: "2023-07-25",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png"

    
},

{
    filmsId: 9999,
    title: "Barbie9",
    filmo_type: "DRAMA",
    default_image_id: 28, // starting from 28 
    genre: "Horror",
    synopsis: "바비 세상에 어쩌구 저쩌구!",
    release_date: "2023-07-22",
    image_path:"https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png"
},
]



const Wrapper = styled.div`
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 60rem;
margin: auto;
padding: 2rem;

`;

const MoviesWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;
justify-content: start;
width: 100%;
align-items: center;
`;

const FilmList = () => {
    return (<Wrapper>

        <MoviesWrapper>
        
        {l.map((movie,idx)=>{
                           
          return(      <FilmPreview key={idx}
                    image_path={movie.image_path}
                    title={movie.title}
                    filmsId={movie.filmsId}
            />)
        })}
        
        </MoviesWrapper>
        
            <Pagination/>
        
    </Wrapper>
    )
}

export default FilmList;