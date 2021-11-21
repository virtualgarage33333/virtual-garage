import React from "react";
import styled from "styled-components";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Title>Clothing</Title>
      <Products />
    </Container>
  );
};

export default ProductList;