// Burger.js
import styled from "styled-components";
import React, { useState } from 'react';
import StyledBurger from './Burger.styled.js';

const Burger = () => {
    const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    font-size: 25px;
  }`;

  const burgerImage = styled.div`
  max-height: 20px;
  max-width: 20px;`
    const [show, setShow] = useState(true);
  
    return (
    <StyledBurger>
        <>{
        show?
        <div onClick={() => {setShow(false)}}>
            <span>___</span>
            <span>___</span>
            <span>___</span>
        </div>
        :
        <div>
            <h1 onClick={() => {setShow(true)}}>X</h1>
        </div>
      }</>
    </StyledBurger>
  )
}

export default Burger;
