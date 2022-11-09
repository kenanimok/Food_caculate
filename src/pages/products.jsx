import React from "react";
import { useContext } from "react";
import { json } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../App";

const Product = ({ id, title, image, price }) => {
  const [Cart, setCart] = useContext(CartContext);
  //   console.log("Cart :>> ", Cart);

  const addCart = () => {
    const tmpsItems = Cart.Items;
    let total = Cart.Total;

    const index = tmpsItems.findIndex((item) => item.id === id);

    console.log("index :>> ", index);
    if (index >= 0) {
      tmpsItems[index].qnty += 1;
    } else {
      tmpsItems.push({
        id,
        image,
        title,
        qnty: 1,
        price,
      });
    }

    total += price;
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    const data = { Total: total, Items: tmpsItems };
    setCart(data);
    localStorage.setItem("Cart", JSON.stringify(data));
  };

  return (
    <>
      <ContainerPd onClick={addCart}>
        <img
          src={image}
          alt="image"
          width={"270px"}
          style={{ padding: "10px" }}
        />
        <p>{title}</p>
        <p>{price}</p>
      </ContainerPd>
    </>
  );
};

export default Product;
const ContainerPd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
