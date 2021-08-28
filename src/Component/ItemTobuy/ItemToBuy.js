import React from "react";
import classes from "./ItemToBuy.module.css";

const ItemToBuy = (props) => {
  const addItemtoshoppingList = () => {
    props.addItemToShopingList(props.item);
  };

  const removeItemFromShoppingList = () => {
    props.removeItemFromShoppingList(props.item);
  };

  return (
    <div className={classes.container}>
      <h3>{props.item.MealName}</h3>

      <div className={classes.item}>
        <div>
          <span className={classes.span1}>${props.sum}</span>
          <span>*{props.multiply}</span>
        </div>
        <div>
          <button onClick={removeItemFromShoppingList}>-</button>
          <button onClick={addItemtoshoppingList}>+</button>
        </div>
      </div>
    </div>
  );
};
export default ItemToBuy;
