import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItems from "../../components/productItem/ProductItems";
import { useEffect, useState } from "react";
import { getProducts } from "../../components/services/api";
import { IProduct } from "../../components/types/serveres";

export default function Store() {
  const [products, setProducts] = useState<IProduct []>([ ]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  console.log(products);
  return (
    <div>
      <Container>
        <h1 className=" m-4 flex justify-center ">Nouveautés</h1>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItems {...item}/>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
