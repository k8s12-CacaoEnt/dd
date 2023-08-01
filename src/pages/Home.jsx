import { styled } from "styled-components";
import Card from "../components/Card";

const FeatureWrapper = styled.div`
border-radius: 12px;
// box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

max-width: 60rem;
flex-direction: row;
margin: auto;
padding: 2rem;
display: flex;
justify-content: flex-start
position: absolute;


`

const ProductWrapper = styled.div`
// border-radius: 12px;
// box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

max-width: 60rem;
flex-direction: row;
margin: auto;
padding: 2rem;
display: flex;
justify-content: space-between;

`
const Product = styled.div`
display:flex;
flex-direction:column;
margin: 3px;
align-item: center;
background: #fff;
border-radius: 10px;
border: 1px solid var(--color-gray-medium-light);
box-shadow: 0 0 10px #00000012;
height: 100%;
overflow: hidden;
width: 100%;
}

`
const ProductImage = styled.img`
max-width: 15rem;
justify-content: flex-start;
align-item: center;
background: #fff;
border-radius: 10px;
border: 1px solid var(--color-gray-medium-light);
box-shadow: 0 0 10px #00000012;
height: 100%;
overflow: hidden;
`
const ProductTitle = styled.div`
line-height: 1.3;
padding: 10px;

`
const ProductDesc = styled.div`
padding: 10px;
`

function HomePage() {
  return (
    <>
         <Card/>  
         <ProductWrapper>
           <Product>
            <ProductImage src="https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/assets/r.png"></ProductImage>
            <ProductTitle>배우 데뷔를 위해!</ProductTitle>
            <ProductDesc>지금 당장 캐스팅 공고를 확인해보세요</ProductDesc>

             </Product>
           <Product>
            <ProductImage src="https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/assets/y.png"></ProductImage>
            <ProductTitle>배우들의 커리어를 확인하고 싶나요?</ProductTitle>
            <ProductDesc>작품 검색을 통해 레퍼런스 체크를!</ProductDesc>
           </Product>
           <Product>
            <ProductImage src="https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/assets/g.png"></ProductImage>
            <ProductTitle>새로운 기회는</ProductTitle>
            <ProductDesc> 프로필 허브에서..!</ProductDesc>

           </Product>
           <Product>
            <ProductImage src="https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/assets/b.png"></ProductImage>
            <ProductTitle>새로운 배우를 찾나요?</ProductTitle>
            <ProductDesc>프로필 허브에는 신선한 배우들의 프로필들이 가득합니다!</ProductDesc>

           </Product>


         </ProductWrapper>


    </>
    
  );
}

export default HomePage;
