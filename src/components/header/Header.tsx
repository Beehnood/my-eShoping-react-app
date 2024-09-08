import { Link } from "react-router-dom";
import Container from "../container/Container";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { useShoppingCartContext } from "../../context/ShopingCartContext";


function Header() {
  const {cartQty} = useShoppingCartContext()
  return (
    <nav className=" flex items-center">
      <Container>
        <div className="h-10 shadow-md flex justify-between items-center flex-row-reverse bg-blue-700 text-white px-4">
          <ul className="flex gap-4 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>

          <Link to="/Cart">
            <button className=" flex gap-1 items-center ">
            <ShoppingBagIcon className="h-6 w-6 text-whit" >
            </ShoppingBagIcon>
            <div className="flex bg-red-600 rounded-full px-1 text-sm items-center w-50">
            <span >{cartQty !== 0 ? cartQty : ""}</span>
            </div>
            </button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Header;
