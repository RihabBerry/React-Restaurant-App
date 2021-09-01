import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  shoppingList: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("inside reducer", action.payload);
    const updatedtotalAmount =
      state.totalAmount + action.payload.Price * action.payload.amount;

    const existingItemIndex = state.shoppingList.findIndex(
      (t) => t.id === action.payload.id
    );
    const existingItem = state.shoppingList[existingItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: action.payload.amount + existingItem.amount,
      };
      updatedItems = [...state.shoppingList]; //copie of shoppingList
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.shoppingList.concat(action.payload);
    }

    return {
      shoppingList: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    console.log("inside remove", action.payload);
    let existingItemIndex = state.shoppingList.findIndex(
      (t) => t.id === action.payload.id
    );
    let existingItem = state.shoppingList[existingItemIndex];

    let updatedtotalAmount = state.totalAmount - existingItem.Price;
    console.log("this is total amount", updatedtotalAmount);

    let updatedItems;
    let updatedItem;
    if (existingItem.amount === 1) {
      updatedItems = state.shoppingList.filter(
        (t) => t.id !== action.payload.id
      );
    } else {
      updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.shoppingList];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      shoppingList: updatedItems,
      totalAmount: updatedtotalAmount,
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
    dispatchCartAction({ type: "ADD", payload: item });
  };
  const removeItemFromShoppingList = (item) => {
    dispatchCartAction({ type: "REMOVE", payload: item });
  };

  const cartContext = {
    shoppingList: cartState.shoppingList,
    removeItem: removeItemFromShoppingList,
    addItem: addItemToShopingList,
    totalAmount: cartState.totalAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
