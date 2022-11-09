import React from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CartPage from "./pages/CartPage";
export const CartContext = createContext(null);

const App = () => {
  let cartInit = JSON.parse(localStorage.getItem("Cart"));
  if (!cartInit) {
    const _initState = JSON.stringify({ Total: 0, Items: [] });
    cartInit = _initState;
    localStorage.setItem("Cart", _initState);
  }

  const [Cart, setCart] = useState({
    Items: cartInit.Items || [],
    Total: cartInit.Total || 0,
  });

  return (
    <>
      <CartContext.Provider value={[Cart, setCart]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
};

export default App;
