import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 160px;
  padding: 20px;
  justify-content: space-between;
  background-color: #f5b5c5;
`;

const Categories = () => {
  return (
    <Container id="Collections">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
