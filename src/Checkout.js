import React from "react";
import "./Checkout.css";
import { Link } from "@material-ui/core";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />

        <div>
          <h2>
            <h2 className="checkout__title">Your shopping basket</h2>
          </h2>

          {/* Basket Item*/}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
