import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  shoppingList: [],
  totalAMount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("inside reducer", action.payload);
    const updatedItems = state.shoppingList.concat(action.payload);
    return {
      shoppingList: updatedItems,
    };
  }
  if (action.type === "REMOVE") {
    console.log("inside remove", action.payload);
    const updatedItems = state.shoppingList.filter(
      (t) => t.id !== action.payload.id
    );
    return {
      shoppingList: updatedItems,
    };
  }

  return;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToShopingList = (item) => {
    console.log("dispatch", item.amount);
    dispatchCartAction({ type: "ADD", payload: item });
  };
  const removeItemFromShoppingList = (item) => {
    dispatchCartAction({ type: "REMOVE", payload: item });
  };

  const cartContext = {
    shoppingList: cartState.shoppingList,
    removeItem: removeItemFromShoppingList,
    addItem: addItemToShopingList,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
