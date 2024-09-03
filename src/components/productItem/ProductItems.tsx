import { IProduct } from "../types/serveres";

type TProductItem = IProduct;

export default function ProductItems({
  title,
  price,
  description,
  image,
}: TProductItem) {
  return (
    <div className=" grid grid-cols-2 m-2">
      <div id="1">
        <img className=" rounded-t " src={image} alt="download.jpeg" />
        <div className=" p-3 shadow-md">
          <h3 className="line-clamp-2">{title}</h3>
          <span>{price}$</span>
          <div className=" mt-1 ">
            <p className="line-clamp-2 ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
