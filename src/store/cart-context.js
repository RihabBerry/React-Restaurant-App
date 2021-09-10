import React from "react";

const CartContext = React.createContext({
  shoppingList: [],
  addItemToShopingList: (item) => {},
  removeItemFromShoppingList: (item) => {},
  totalAmount: 0,
  clearItemFromShoppingList: () => {},
});
export default CartContext;
//for autocompilation...
