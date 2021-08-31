import React from "react";

const CartContext = React.createContext({
  shoppingList: [],
  addItemToShopingList: (item) => {},
  removeItemFromShoppingList: (item) => {},
});
export default CartContext;
