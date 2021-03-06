import React from "react";
import "../CSS/Checkout.css";
import { Link } from "@material-ui/core";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const itemsInBasket = basket.map((item) => {
    return (
      <div key={item.id}>
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          count={item.count}
        />
      </div>
    );
  });

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2>
            <h2 className="checkout__title">Your shopping basket</h2>
          </h2>
          <FlipMove>{itemsInBasket}</FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
