import React from "react";
import styled from "styled-components";
import Products from "../components/Products";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  console.log('cat is', cat);

  return (
    <Container>
      <Title>Clothing</Title>
      <Products cat={cat} />
    </Container>
  );
};

export default ProductList;
