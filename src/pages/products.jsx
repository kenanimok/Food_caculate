import React from "react";
import { useContext } from "react";
import { json } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../App";

const Product = ({ id, title, image, price }) => {
  console.log("id :>> ", id);
  const [Cart, setCart] = useContext(CartContext);
  //   console.log("Cart :>> ", Cart);

  const addCart = () => {
    const tmpsItems = Cart.Items;
    console.log("tmpsItems :>> ", tmpsItems);
    let total = Cart.Total;
    // console.log("total :>> ", total);
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
        <Boxname>
          <div>
            {title} ${price}
          </div>
        </Boxname>
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

const Boxname = styled.div`
  display: flex;
  margin-top: 5%;
`;
