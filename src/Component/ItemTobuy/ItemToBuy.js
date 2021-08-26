import React from "react";
import classes from "./ItemToBuy.module.css";

const ItemToBuy = () => {
  return (
    <div className={classes.container}>
      <h3>Sushi</h3>

      <div className={classes.item}>
        <div>
          <span className={classes.span1}>$16.5</span>
          <span>*2</span>
        </div>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};
export default ItemToBuy;
