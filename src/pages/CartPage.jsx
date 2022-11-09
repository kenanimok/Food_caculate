import React from "react";
import { useContext } from "react";
import { CartContext } from "../App";
import styled from "styled-components";

const CartPage = () => {
  const [Cart, setCart] = useContext(CartContext);
  //   console.log("Cart :>> ", Cart);

  const ClearCart = () => {
    const clear = { Total: 0, Items: [] };
    setCart(clear);
    localStorage.setItem("Cart", JSON.stringify(clear));
  };

  return (
    <>
      <Layout>
        {Cart.Items.map((item) => (
          <Box>
            <img
              src={item.image}
              alt="image"
              width={"100px"}
              style={{ padding: "10px" }}
            />
            <BoxPrice>
              <div>{item.title}</div>
              <div>จำนวน: {item.qnty}</div>
              <div>ราคา : {item.price}</div>
            </BoxPrice>
          </Box>
        ))}
        <h3>ราคา รวม {Cart.Total}</h3>

        <button onClick={ClearCart}>clear</button>
      </Layout>
    </>
  );
};

export default CartPage;
const Layout = styled.div`
  margin: 10px;
  margin-top: 10%;
`;

const Box = styled.div`
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 92%;
  height: 100px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
`;
