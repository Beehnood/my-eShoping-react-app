import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { getProduct } from "../services/api";
import { IProduct } from "../types/serveres";
import { useShoppingCartContext } from "../../context/ShopingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProductCart,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <div className="flex mt-4 border-b pb-2 bg-slate-200">
      <Link to={`/product/${id}`}>
        <img src={product?.image} />
      </Link>
      <div className="my-4 px-4">
        <h3>{product?.title}</h3>
        <div className="mt-11">
          <Button
            onClick={() => handleIncreaseProductQty(id)}
            variant="primary"
          >
            +
          </Button>
          <span>{qty}</span>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            variant="primary"
          >
            -
          </Button>
          <Button onClick={() => handleRemoveProductCart(id)} variant="danger">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
