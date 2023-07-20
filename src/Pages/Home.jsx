import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
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
        <li>
          <button>
            <Link to="/cart">Cart</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Home;
