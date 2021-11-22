import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: #668871;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  animation: nudge 2s infinite;

  @keyframes nudge {
    0% {
      background-color: #49444b;
    }
    25% {
      background-color: black;
    }

    50% {
      background-color: #49444b;
    }

    75% {
      background-color: #668871;
    }
  }
`;
const Announcement = () => {
  return (
    <Container>
      <a href="#Collections">*Checkout our Collections......</a>
    </Container>
  );
};
export default Announcement;
