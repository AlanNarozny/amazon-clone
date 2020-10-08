import React, { useEffect } from "react";
import "../CSS/CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  count,
  hideButton,
  hideSelect,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const selectId = "numItems_" + id;

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        count,
      },
    });
  };

  /*=================================================
  Dispatches action to change number of that item in basket*/
  const changeCountInBasket = () => {
    let select = document.querySelector(`#${selectId}`);
    let numItems = parseInt(select.options[select.selectedIndex].value);

    dispatch({
      type: "CHANGE_COUNT_IN_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        count: numItems,
      },
    });
  };

  /*=================================================
  Initializes the select buttons*/
  useEffect(() => {
    const select = document.querySelector(`#${selectId}`);
    const selectOptions = select.options;
    for (let i = 0; i < selectOptions.length; i++) {
      if (selectOptions[i].value == count) {
        select.selectedIndex = i;
        break;
      }
    }
  });

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
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
        <div className="checkoutProduct__select">
          <select onChange={changeCountInBasket} id={selectId}>
            <option value="0">0 (Remove)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
