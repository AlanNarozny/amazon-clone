import React, { useEffect } from "react";
import "../CSS/CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function HistoryProduct({ id, image, title, price, rating, count }) {
  const [{ basket }, dispatch] = useStateValue();
  const selectId = "numItems_" + id;

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>${price.toFixed(2)}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
        <div className="product__bought">
          <p>
            Items bought: <strong>{count}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HistoryProduct;
