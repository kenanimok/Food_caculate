import React from "react";
import styled from "styled-components";
import Product from "./products";
import Boxfood from "./boxfood";
import Header from "./header";
import { Link, useNavigate } from "react-router-dom";
import CartPage from "./CartPage";
const Home = () => {
  const navigate = useNavigate();
  const food = [
    {
      id: 1,
      content: (
        <Product
          id={1}
          key={1}
          image={
            "https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?w=1800&t=st=1667968149~exp=1667968749~hmac=5a6bf580372b2d1c04d7ce2604677ced52ecc23e6e29b820199adb1e70d3616d"
          }
          title="หนังหมา ทอดกรอบ"
          price={5.59}
        />
      ),
    },
    {
      id: 3,
      content: (
        <Product
          id={3}
          key={3}
          image={
            "https://img.freepik.com/free-photo/fried-noodle-with-pork-soy-sauce-vegetable_1150-27401.jpg?w=1800&t=st=1667969506~exp=1667970106~hmac=f8abe43dfdb37960e9a2756ab7faf15c397d0d01cff396f31bdde0b0952063cc"
          }
          title="ผัดกะเพาหมา"
          price={5.0}
        />
      ),
    },
    {
      id: 4,
      content: (
        <Product
          id={4}
          key={4}
          image={
            "https://img.freepik.com/free-photo/fried-noodle-with-pork-soy-sauce-vegetable_1150-27401.jpg?w=1800&t=st=1667969506~exp=1667970106~hmac=f8abe43dfdb37960e9a2756ab7faf15c397d0d01cff396f31bdde0b0952063cc"
          }
          title="ผัดกะเพาหมา"
          price={5.0}
        />
      ),
    },
    {
      id: 5,
      content: (
        <Product
          id={5}
          key={5}
          image={
            "https://img.freepik.com/free-photo/fried-noodle-with-pork-soy-sauce-vegetable_1150-27401.jpg?w=1800&t=st=1667969506~exp=1667970106~hmac=f8abe43dfdb37960e9a2756ab7faf15c397d0d01cff396f31bdde0b0952063cc"
          }
          title="ผัดกะเพาหมา"
          price={5.0}
        />
      ),
    },
    {
      id: 5,
      content: (
        <Product
          id={5}
          key={5}
          image={
            "https://img.freepik.com/free-photo/fried-noodle-with-pork-soy-sauce-vegetable_1150-27401.jpg?w=1800&t=st=1667969506~exp=1667970106~hmac=f8abe43dfdb37960e9a2756ab7faf15c397d0d01cff396f31bdde0b0952063cc"
          }
          title="ผัดกะเพาหมา"
          price={5.0}
        />
      ),
    },
    {
      id: 5,
      content: (
        <Product
          id={5}
          key={5}
          image={
            "https://img.freepik.com/free-photo/fried-noodle-with-pork-soy-sauce-vegetable_1150-27401.jpg?w=1800&t=st=1667969506~exp=1667970106~hmac=f8abe43dfdb37960e9a2756ab7faf15c397d0d01cff396f31bdde0b0952063cc"
          }
          title="ผัดกะเพาหมา"
          price={5.0}
        />
      ),
    },
  ];

  return (
    <>
      {/* <Link to="/cart"> goto cart</Link> */}
      <Containner>
        <div>
          <Boxfood item={food} />
        </div>

        <Caculate>
          <CartPage />
        </Caculate>
      </Containner>
    </>
  );
};

export default Home;
const Containner = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100vh;
  /* padding: 10px; */
`;

const Layout = styled.div`
  display: flex;
  margin: 20px;
`;

const Caculate = styled.div`
  /* background: red; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
