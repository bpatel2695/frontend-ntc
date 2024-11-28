import React from 'react'
import "./Main.css";
export default function Main() {
    const products = [
        {name: "Product 1", price: 34  },
        {name: "Product 2", price: 74  },
        {name: "Product 3", price: 50  },
    ];
  return ( 
    <div className="row">
            {products.map((value, index) => (
        <div className="box">
            <h3>{value.name}</h3>
            <h4>${value.price}</h4>
            <button>Add to Cart</button>
        </div>
    ))}
    </div>
  );
}
 