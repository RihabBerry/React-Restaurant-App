import React from "react";

const defaultCartState = {
  shoppingList: [],
  totalAmount: 0,
};
const cartReducer = (
  state = {
    shoppingList: [],
    totalAmount: 0,
  },
  action
) => {
  console.log("it comes to reducer");
  if (action.type === "ADD") {
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
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return state;
};

export default cartReducer;
