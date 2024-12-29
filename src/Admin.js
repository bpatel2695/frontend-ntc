import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Admin() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const url = "http://localhost:8080/";
  const handleSave = async () => {
    const result = await axios.post(url, { name: name, price: price });
  };
  return (
    <div>
      Admin
      <p>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Product Name"
        ></input>
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
        ></input>
      </p>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}