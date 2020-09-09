import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>s</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
          {/* <p>
            {" "}
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </p> */}
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
