import { styled } from "styled-components";

// limit
// total profile number
// current page number
// offset 
const PageButtonWrapper = styled.div`
border-color: black;
background-color:black
display: flex;

`;

const PaginationWrapper = styled.div`
  display:flex;
  justify-content: center;
width: 100%;
align-items: center;

`;

const PageButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;
{/* <PageButtonWrapper>
           
           Array.from({length: pages}, (_, i) => i + 1).map((page)=>{
                  return <PageButton key={page}>{page}</PageButton>
           })}
    </PageButtonWrapper> */}

function Pagination1({perPage, page, offset, total}){
    const pages = Math.ceil(total/perPage);
    return <>
{               Array.from({length: pages}, (_, i) => i + 1).map((j)=>{
                  return <PageButton key={j}>{j}</PageButton>
           })}

    </>

}
function Pagination({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit);
  
    return (
      <PaginationWrapper>
        <Nav>
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </Button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </Button>
            ))}
          <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </Button>
        </Nav>
      </PaginationWrapper>
    );
  }
  
  const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
  `;
  
  const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    background: black;
    color: white;
    font-size: 1rem;
  
    &:hover {
      background: tomato;
      cursor: pointer;
      transform: translateY(-2px);
    }
  
    &[disabled] {
      background: grey;
      cursor: revert;
      transform: revert;
    }
  
    &[aria-current] {
      background: deeppink;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
  `;

  export default Pagination;