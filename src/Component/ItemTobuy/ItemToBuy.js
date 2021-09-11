import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./ItemToBuy.module.css";
import { useDispatch } from "react-redux";

const ItemToBuy = (props) => {
  const cartCtx = useContext(CartContext);
  const dispatch = useDispatch();

  const addItemtoshoppingList = () => {
    const item = {
      id: props.item.id,
      MealName: props.item.MealName,
      amount: 1,
      Price: props.item.Price,
    };
    dispatch({ type: "ADD", payload: item });

    /* cartCtx.addItem({
      id: props.item.id,
      MealName: props.item.MealName,
      amount: 1,
      Price: props.item.Price,
    }); */
  };

  const removeItemFromShoppingList = () => {
    console.log("item to remove", props.item);
    dispatch({ type: "REMOVE", payload: props.item });
    // cartCtx.removeItem(props.item);
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
