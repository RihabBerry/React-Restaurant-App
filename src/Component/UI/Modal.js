import React from "react";
import ItemToBuy from "../ItemTobuy/ItemToBuy";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const list = [
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
      qty: 2,
    },
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
      qty: 2,
    },
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
      qty: 2,
    },
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
      qty: 2,
    },
  ];

  return (
    <div onClick={props.showModalHandler} className={classes.backdrop}>
      <div className={classes.wrapper}>
        <main>
          <ItemToBuy />
          <ItemToBuy />
          <ItemToBuy />
        </main>
        <footer className={classes.footer}>
          <div className={classes.totalAmount}>
            <h3>Total Amount </h3>
            <h3> $88.99</h3>
          </div>
          <button className={classes.btnOrder}>Order</button>
          <button className={classes.btnClose} onClick={props.showModalHandler}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};
export default Modal;
