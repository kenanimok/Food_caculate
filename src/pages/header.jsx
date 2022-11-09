import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <ConatinerHeader>
        <HText>Cart</HText>
      </ConatinerHeader>
    </>
  );
};

export default Header;

const ConatinerHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100px;
  /* background-color: red; */
`;
const HText = styled.div``;
