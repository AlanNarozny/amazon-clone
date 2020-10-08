export const initialState = {
  basket: [],
  use: null,
};

/*=================================================
  Calculates total value of the items in basket*/
export const getBasketTotal = (basket) => {
  let total = basket.reduce(
    (total, currentItem) => (total += currentItem.price * currentItem.count),
    0
  );
  return Math.round(total * 100) / 100;
};

const reducer = (state, action) => {
  let index;

  if (action.item) {
    index = state.basket.findIndex((item) => item.id === action.item.id);
  }

  switch (action.type) {
    case "ADD_TO_BASKET":
      if (index === -1) {
        action.item.count = 1;
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      } else {
        state.basket[index].count += 1;
        return {
          ...state,
        };
      }

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.item.id),
      };

    /*---------------------------------------------------------------------------------
    Triggers when the number of items in the basket is changed through the selects*/
    case "CHANGE_COUNT_IN_BASKET":
      if (index === -1) {
        return {
          ...state,
        };
      } else {
        if (action.item.count == 0) {
          return {
            ...state,
            basket: state.basket.filter((item) => item.id !== action.item.id),
          };
        } else {
          state.basket[index].count = action.item.count;
          return {
            ...state,
          };
        }
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
