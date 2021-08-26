import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={classes.header}>
      <h1>ReactMeals</h1>
      <div className={classes.carte}>
        <i class="fas fa-shopping-cart" onClick={props.showModalHandler}></i>
        <h6> Your Cart:</h6>
        <div className={classes.numberOfShops}>{props.countOfItems}</div>
      </div>
    </div>
  );
};
export default NavBar;
