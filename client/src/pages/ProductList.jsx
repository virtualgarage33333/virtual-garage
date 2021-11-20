import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement.jsx";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Clothing</Title>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
