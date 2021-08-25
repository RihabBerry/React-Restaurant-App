import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.header}>
      <h1>ReactMeals</h1>
      <div className={classes.carte}>
        <i class="fas fa-shopping-cart"></i>
        <h6> Your Cart:</h6>
        <div className={classes.numberOfShops}>0</div>
      </div>
    </div>
  );
};
export default NavBar;
