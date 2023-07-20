import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ prodDesc }) => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <div>
        <h1>Product List :</h1>
      </div>

      {prodDesc.map((product, index) => {
        return (
          <div key={index}>
            <Link key={product.id} to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt="prodImage"
                width={400}
                height={300}
              ></img>
              <img
                src={product.images[1]}
                alt="prodImage"
                width={400}
                height={300}
              ></img>
              <h1>Name: {product.name}</h1>
              <p>Description: {product.shortDescription}</p>
              <h2>Price: {product.price}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
