import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import ItemToBuy from "../ItemTobuy/ItemToBuy";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const groupedBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  var totalPrice = props.shoppingList.reduce(function (prev, cur) {
    return prev + cur.Price;
  }, 0);

  let itemGrouped = groupedBy(props.shoppingList, "MealName");

  const itemsToBuy = Object.keys(itemGrouped).map((item) => {
    let sum = (itemGrouped[item][0].Price * itemGrouped[item].length).toFixed(
      2
    );

    return (
      <ItemToBuy
        key={itemGrouped[item][0].id}
        item={itemGrouped[item][0]}
        sum={sum}
        multiply={itemGrouped[item].length}
        addItemToShopingList={props.addItemToShopingList}
        removeItemFromShoppingList={props.removeItemFromShoppingList}
      />
    );
  });

  return (
    <Fragment>
      <Modal>
        <main> {itemsToBuy}</main>
        <footer className={classes.footer}>
          <div className={classes.totalAmount}>
            <h3>Total Amount </h3>
            <h3> ${totalPrice.toFixed(2)}</h3>
          </div>
          <button className={classes.btnOrder}>Order</button>
          <button className={classes.btnClose} onClick={props.showModalHandler}>
            Close
          </button>
        </footer>
      </Modal>
    </Fragment>
  );
};
export default Cart;
