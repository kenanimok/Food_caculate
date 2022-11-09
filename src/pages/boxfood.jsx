import React from "react";
import styled from "styled-components";

const Boxfood = ({ item }) => {
  return (
    <>
      <LayoutFood>
        <Box>
          {item.map((item, index) => (
            <Container key={index}>{item.content}</Container>
          ))}
        </Box>
      </LayoutFood>
    </>
  );
};

export default Boxfood;
const Container = styled.div`
  width: 330px;
  height: 300px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const LayoutFood = styled.div`
  margin-top: 5%;
`;
