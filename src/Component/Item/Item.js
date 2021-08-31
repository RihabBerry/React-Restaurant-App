import React, { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Item.module.css";
const Item = (props) => {
  const addItemtoshoppingList = () => {
    console.log("you logged here ");
    cartCtx.addItem({
      id: props.item.id,
      MealName: props.item.MealName,
      amount: +amountInputRef.current.value,
      Price: props.item.Price,
    });
  };
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    //Added items to the shoppingList
    addItemtoshoppingList();
  };

  return (
    <div className={classes.item}>
      <div>
        <h3> {props.item.MealName}</h3>
        <p className={classes.description}>{props.item.MealDescription}</p>
        <p className={classes.price}>{props.item.Price}</p>
      </div>
      <div className={classes.addItem}>
        <div className={classes.Amount}>
          <form onSubmit={submitHandler}>
            Amount:
            <input
              ref={amountInputRef}
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              max="10"
              defaultValue="1"
            />
          </form>
        </div>
        <button className={classes.addBtn} onClick={addItemtoshoppingList}>
          +Add
        </button>
      </div>
    </div>
  );
};
export default Item;
