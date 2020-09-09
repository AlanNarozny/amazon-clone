import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>s</small>
          <strong>19,99</strong>
        </p>
        <div className="product__rating">
          <p>
            {" "}
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt=""
      />

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
