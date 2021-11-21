import React from "react";
import { useMediaQuery } from 'react-responsive';
import Burger from './Burger.js';
import styled from "styled-components";


const Container = styled.div`
  height: 60px;
  background-color: #d85174;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;


const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Navbar = (props) => {

  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const isNotDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1223px)'
  });
  //const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  //const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  //const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <Container>
      <Wrapper>
        <Left>
          {<h1 
          className={`Logo`}
          onClick={() => {
            setCurrentPage(pages[0]);
          }}>The Garage.</h1>}
        </Left>
        {isDesktopOrLaptop && 
          <Right>
            <>
            {pages.map((page) => (
            <div>
              <p
              className={`MenuItem`}
              onClick={() => {
                setCurrentPage(page);
              }}>{page.name}</p>
            </div>
          ))}
            </>
          </Right>
        }
        {isNotDesktopOrLaptop && 
          <Burger></Burger>
        }
      </Wrapper>
    </Container>
  );
};

export default Navbar;
