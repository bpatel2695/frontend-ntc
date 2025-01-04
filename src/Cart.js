import React from "react";
import "./Cart.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./App";
import axios from "axios";

export default function Cart() {
  const { cart, setCart, products } = useContext(UserContext);
  const [orderVal, setOrderVal] = useState(0);
  useEffect(() => {
    setOrderVal((prev) =>
      products.reduce((total, value) => {
        return total + value.price * (cart[value._id] ?? 0);
      }, 0)
    );
  });
  const handleMinus = (id, qty) => {
    setCart((prev) => ({ ...prev, [id]: qty - 1 }));
  };
  const handlePlus = (id, qty) => {
    setCart((prev) => ({ ...prev, [id]: qty + 1 }));
  };
  const handleDelete = (id) => {
    setCart((prev) => ({ ...prev, [id]: 0 }));
    console.log(cart)
  };

  
  const url = "http://localhost:8080/cart"
  
  const handleSubmit = async() => {
    const result = await axios.post(url,{cart: cart,grandtotal:orderVal})
    // const result = await axios.post(url,{name:products,quantity:qty,price:price,total:cart[value._id] * value.price,grandtotal:orderVal})
   // const result = await axios.post(url,{name:name,quantity:qty,price:price,total:qty * price,grandtotal:orderVal})
  //  can we store value.name in variable? 
  // what products && in 47? 
  // line 50 how it works without if? 
  // can we call 2 functions onClick={handleSubmit}>Submit Order line 50


  }
  return (
    <>
      <h2>Your Cart:</h2>
      <table>
        <tr>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Total</td>
        </tr>
        {products &&
          products.map((value, index) => {
            return (
              cart[value._id] > 0 && (
                <tr>
                  <td>{value.name}</td>{" "}
                  <td>
                    <button
                      onClick={() => handleMinus(value._id, cart[value._id])}
                    >
                      -
                    </button>
                    {cart[value._id]}
                    <button
                      onClick={() => handlePlus(value._id, cart[value._id])}
                    >
                      +
                    </button>
                  </td>
                  <td>${value.price}</td>
                  <td>${cart[value._id] * value.price}</td>
                  <td>
                    <button onClick={() => handleDelete(value._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            );
          })}
        <tr>
          <td colSpan="3"> Grand Total</td>
          <td> ${orderVal}</td>
        </tr>
      </table><br></br>
      <div><button onClick={handleSubmit}>Submit Order</button></div>
    </>
  );
}