import styled from "styled-components";
//import { popularProducts } from "../data";
import { gql, useQuery } from "@apollo/client";
import Product from "./Product";
import { popularProducts } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const testProduct = gql`
{
  items {
    _id
    itemName
    description
    price
    image
    category{
      _id
      categoryName
    }
    user{
      _id
    }
  }

}
`;

const Products = () => {
  const { error, loading, data } = useQuery(testProduct, {
    fetchPolicy: "no-cache",
  });

  const displayItems = []

 
  if(loading) return (null)
  console.log (data);
  const popularProducts = data.items

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
