import { useParams, Link } from "react-router-dom";

const Cart = ({ prodDesc }) => {
  const { productId } = useParams();

  const product = prodDesc.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Cart</h1>
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
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
