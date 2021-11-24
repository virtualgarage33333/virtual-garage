import styled from "styled-components";
//import { popularProducts } from "../data";
import { useQuery } from "@apollo/client";
import Product from "./Product";
import { GET_ITEMS } from "../utils/queries";
import { popularProducts } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const { error, loading, data } = useQuery(GET_ITEMS, {
    fetchPolicy: "no-cache",
  });

 
  if(loading) return (null)
  const popularProducts = data.items

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product 
        item={item} 
        key={item.id}
        image={item.image} />
      ))}
    </Container>
  );
};

export default Products;
