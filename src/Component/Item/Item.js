import React, { Fragment } from "react";
import classes from "./Item.module.css";
const Item = (props) => {
  return (
    <Fragment>
      <div className={classes.item}>
        <div>
          <h3> {props.item.MealName}</h3>
          <p className={classes.description}>{props.item.MealDescription}</p>
          <p className={classes.price}>{props.item.Price}</p>
        </div>
        <div className={classes.addItem}>
          <div className={classes.Amount}>
            Amount:
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              max="10"
            />
          </div>
          <button className={classes.addBtn}>+Add</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Item;
