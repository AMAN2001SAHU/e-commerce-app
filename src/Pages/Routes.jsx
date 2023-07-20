import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import prodDesc from "./Databases/productsDesc";
import ProductList from "./ProductList";
import ProductDescription from "./ProductDesc";
import Home from "./Home";
import Cart from "./Cart";

const ProdDescription = () => {
  return <ProductDescription prodDesc={prodDesc} />;
};
const ProdList = () => {
  return <ProductList prodDesc={prodDesc} />;
};

function Paths() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/list" Component={ProdList} />
          <Route path="/product/:productId" Component={ProdDescription} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </Router>
    </div>
  );
}

export default Paths;
