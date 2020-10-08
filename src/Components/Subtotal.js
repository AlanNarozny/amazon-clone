import React from "react";
import "../CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";

/* npm i react-currency-format*/

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  /*=================================================
  gets the browser history for us*/
  const history = useHistory();

  /*=================================================
  Calculates total items in basket*/
  const getTotalItems = () => {
    return basket.reduce(
      (total, currentItem) => (total += currentItem.count),
      0
    );
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({getTotalItems()} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        disabled={getTotalItems() == 0}
        onClick={(e) => history.push("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
