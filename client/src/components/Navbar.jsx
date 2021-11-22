import React from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useMediaQuery } from "react-responsive";
import Burger from "./Burger.js";
import styled from "styled-components";

const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  &:hover {
    font-size: 35px;
    cursor: pointer;
  }
`;

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

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    font-size: 25px;
  }
`;

const Navbar = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isNotDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1223px)",
  });
  //const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  //const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  //const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo as="a" href="/">
            The Garage.
          </Logo>
        </Left>
        {isDesktopOrLaptop && (
          <Right>
            <>
              <MenuItem>
                <a href="#Collections">Collections</a>
              </MenuItem>
              <MenuItem>
                <a href="/productList">My Garage</a>
              </MenuItem>
              <MenuItem>
                <a href="#About">About Us</a>
              </MenuItem>
              <MenuItem>
                <a href="/signup">Login/SignUp</a>
              </MenuItem>
              <MenuItem>
                <a href="/cart">
                  {" "}
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </a>
              </MenuItem>
            </>
          </Right>
        )}
        {isNotDesktopOrLaptop && <Burger></Burger>}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
