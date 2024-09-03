import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../components/services/api";
import { IProduct } from "../../components/types/serveres";
import { useShoppingCartContext } from "../../context/ShopingCartContext";

export default function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProductCart,
    cartItems,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className=" h-48 shadow mt-4 grid grid-cols-12">
          <div className="bg-violet-200 col-span-2 grid place-items-center ">
            <img className="p-2" src={product?.image} alt="download.jpeg" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                
                variant="success"
                id="btn"
              >
                Add To Cart
              </Button>
            ) : (
              <div className=" flex justify-center">
                <Button
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                  className=" m-2 w-full py-3"
                  variant="primary"
                  id="btn"
                >
                  +
                </Button>
                <span className="items-center py-3">{getProductQty(parseInt(params.id as string))}</span>
                <Button
                  onClick={() =>
                    handleDecreaseProductQty(parseInt(params.id as string))
                  }
                  className=" m-2 w-full py-3"
                  variant="primary"
                >
                  -
                </Button>
                <Button onClick={() => handleRemoveProductCart(parseInt(params.id as string))} variant="danger">Remove</Button>
              </div>
            )}

           
            <div className=" mt-2"></div>
          </div>
          <div className=" bg-gray-200 col-span-10 p-3 ">
            <div className=" flex gap-6 ">
              <h3>{product?.title}</h3>
              <span>{product?.price}</span>
            </div>
            <div>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
