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
            <ProductTitle>For Influencers + Content Creators</ProductTitle>
            <ProductDesc>Find new clients</ProductDesc>

             </Product>
           <Product>
            <ProductImage src="https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/assets/y.png"></ProductImage>
            <ProductTitle>For Influencers + Content Creators</ProductTitle>
            <ProductDesc>Find new clients</ProductDesc>
           </Product>
           <Product>
            <ProductImage src="https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/assets/g.png"></ProductImage>
            <ProductTitle>For Influencers + Content Creators</ProductTitle>
            <ProductDesc>Find new clients</ProductDesc>

           </Product>
           <Product>
            <ProductImage src="https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/assets/b.png"></ProductImage>
            <ProductTitle>For Influencers + Content Creators</ProductTitle>
            <ProductDesc>Find new clients</ProductDesc>

           </Product>


         </ProductWrapper>


    </>
    
  );
}

export default HomePage;
