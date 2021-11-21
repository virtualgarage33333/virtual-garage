// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
    float: right;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: centre;
    width: 2rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    text-color: 'green';
    &:focus {
    outline: none;
    }
    div {
        text-color: 'green';
        /*color: 'black' !important;
        background-color: black !important;*/
        /*background: ${({ theme }) => theme.primaryLight};*/
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        margin-bottom: -10px;
    }
`;

export default StyledBurger;
