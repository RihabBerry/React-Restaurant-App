import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.shoppingList.reduce(function (prev, cur) {
    return prev + cur.amount;
  }, 0);

  return (
    <div className={classes.header}>
      <h1>ReactMeals</h1>
      <div className={classes.carte}>
        <i class="fas fa-shopping-cart" onClick={props.showModalHandler}></i>
        <h6> Your Cart:</h6>
        <div className={classes.numberOfShops}>{numberOfCartItems}</div>
      </div>
    </div>
  );
};
export default NavBar;
