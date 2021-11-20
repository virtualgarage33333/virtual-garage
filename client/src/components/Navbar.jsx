import React from "react";

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

const Logo = styled.h1`
  font-weight: bold;
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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>The Garage.</Logo>
        </Left>
        <Right>
          <MenuItem>Collections</MenuItem>
          <MenuItem>My Garage</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Login/SignUp</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
