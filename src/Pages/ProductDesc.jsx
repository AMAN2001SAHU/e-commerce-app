import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDesc = ({ prodDesc }) => {
  const { productId } = useParams();
  console.log(productId);

  const product = prodDesc.find((p) => p.id === parseInt(productId));
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <ul>
        <li>
          <button>
            <Link to="/">Home</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/list">Product List</Link>
          </button>
        </li>
      </ul>
      <div>
        <h1>Product Description: </h1>
      </div>
      <div>
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
        <h1>{product.name}</h1>
        <h3>{product.price} </h3>
        <p>{product.description}</p>
        <button>
          <Link to="/cart">Add To Cart</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDesc;
