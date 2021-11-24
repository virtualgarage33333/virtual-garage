import styled from "styled-components";
//import { GET_SINGLE_PRODUCT } from '../utils/queries';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useLocation } from "react-router";
import { gql } from '@apollo/client';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  border: 3px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const GET_SINGLE_PRODUCT = gql`
{
  item(_id:"${cat}") 
  {
      itemName
      description
      price
  }
}
` 
const { loading, data } = useQuery(GET_SINGLE_PRODUCT);

console.log(data);

//DATA DOES NOT LOAD IN TIME FOR PAGE, NEED TO AWAIT FETCH BEFORE RENDER (UNSURE HOW TO DO THIS)**
 
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>{/* {data.item.itemName} */}</Title>
          <Desc>
            {/* {data.item.description} */}
          </Desc>
          <Price>{/* &#36;{data.item.price} */}</Price>

          <AddContainer>
            <AmountContainer></AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
