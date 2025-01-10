import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import Orders from "./Orders";
export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState(0);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, cart, setCart, products, setProducts }}>
          <>
            <Header name="John" age={25} />
            <Routes>
              <Route index element={<Main />} />
              <Route path="main" element={<Main />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Orders />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="admin" element={<Admin />} />
            </Routes>
            <Footer />
          </>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}