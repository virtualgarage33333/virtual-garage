import styled from "styled-components";

const Title = styled.h1`
  color: orange;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Container = styled.div`
  flex: 1 1 25%;
  margin: 25px;
  height: 70vh;
  position: relative;
  border: 3px solid black;
  &:hover ${Title} {
    font-size: 50px;
    color: black;
  }

  &:hover ${Image} {
    opacity: 0.5;
  }

  &:hover ${Button} {
    border: 3px solid black;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
