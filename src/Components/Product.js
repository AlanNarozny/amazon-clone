import React from "react";
import "../CSS/Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  /*==================================================
  Dispatches action to add item from basket*/
  //dispatch the item into the data layer
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price.toFixed(2)}</strong>
          <small> $</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
