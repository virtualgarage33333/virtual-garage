import React from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  &:hover {
    font-size: 30px;
    cursor: pointer;
  }
  ${mobile({ fontSize: "18px" })}
`;

const Container = styled.div`
  height: 60px;
  background-color: #d85174;
  ${mobile({ height: "100px" })}
  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flex: 1, justifyContent: "center" })}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    font-size: 25px;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  @media (max-width: 768px) {
    margin: 7px;
  }
`;

const Navbar = (props) => {

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo as="a" href="/">
            The Garage.
          </Logo>
        </Left>

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
              <a href=" ">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </a>
            </MenuItem>
          </>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
