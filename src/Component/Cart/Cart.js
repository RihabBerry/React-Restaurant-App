import React, { Fragment, useContext } from "react";
import Modal from "../UI/Modal";
import ItemToBuy from "../ItemTobuy/ItemToBuy";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItem = cartCtx.shoppingList.length > 0;
  const groupedBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  console.log("this is isthe shopoinlIST", cartCtx.shoppingList);
  console.log("this is updated totalAMount", cartCtx.totalAmount);
  let itemGrouped = groupedBy(cartCtx.shoppingList, "MealName");

  const itemsToBuy = Object.keys(itemGrouped).map((item) => {
    const multiply = itemGrouped[item].reduce(function (prev, cur) {
      return prev + cur.amount;
    }, 0);
    let sum = (itemGrouped[item][0].Price * multiply).toFixed(2);
    return (
      <ItemToBuy
        key={itemGrouped[item][0].id}
        item={itemGrouped[item][0]}
        sum={sum}
        multiply={multiply}
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
            <h3> ${cartCtx.totalAmount.toFixed(2)}</h3>
          </div>
          {hasItem && <button className={classes.btnOrder}>Order</button>}
          <button className={classes.btnClose} onClick={props.showModalHandler}>
            Close
          </button>
        </footer>
      </Modal>
    </Fragment>
  );
};
export default Cart;
