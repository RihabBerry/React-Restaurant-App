import React, { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal";
import ItemToBuy from "../ItemTobuy/ItemToBuy";
import classes from "./Cart.module.css";
import CartContext from "../../context-store/cart-context";
import Checkout from "./Checkout";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList);
  console.log("this is your state", shoppingList);
  const totalAmount = useSelector((state) => state.totalAmount);
  console.log("this is your amount", totalAmount);
  const cartCtx = useContext(CartContext);

  const [isDidSubmit, setIsDidSubmit] = useState(false);
  const [isSubmitting, seIsSubmitting] = useState(false);

  const hasItem = shoppingList.length > 0;

  const [showCheckout, setShowcheckout] = useState(false);
  const [showOrder, setShowOrder] = useState(true);
  const groupedBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  let itemGrouped = groupedBy(shoppingList, "MealName");

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
        //addItemToShopingList={props.addItemToShopingList}
        //removeItemFromShoppingList={props.removeItemFromShoppingList}
      />
    );
  });

  const onSubmit = async (order) => {
    seIsSubmitting(true);
    const response = await fetch(
      "https://react-movie-e18ec-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify(order),
        header: { "Content-Type": "application/json" },
      }
    );
    console.log("it submitted with success");
    const data = await response.json();
    setIsDidSubmit(true);
    seIsSubmitting(false);
    dispatch({ type: "CLEAR" });
    //cartCtx.clearItems();
  };
  const handleOrder = () => {
    setShowcheckout(true);
    setShowOrder(false);
  };

  const didSubmitContent = (
    <Fragment>
      <p>Order sent Successfully ! </p>
      <button className={classes.btnClose} onClick={props.showModalHandler}>
        Close
      </button>
    </Fragment>
  );
  const IsSubmittingContent = <p>Order is Sending ! </p>;

  const contentModal = (
    <Fragment>
      <main> {itemsToBuy}</main>
      <footer className={classes.footer}>
        <div className={classes.totalAmount}>
          <h3>Total Amount </h3>
          <h3> ${totalAmount.toFixed(2)}</h3>
        </div>
        {showOrder && (
          <div className={classes.btn}>
            {hasItem && (
              <button className={classes.btnOrder} onClick={handleOrder}>
                Order
              </button>
            )}
            <button
              className={classes.btnClose}
              onClick={props.showModalHandler}
            >
              Close
            </button>
          </div>
        )}
        {showCheckout && (
          <Checkout
            onSubmit={onSubmit}
            showModalHandler={props.showModalHandler}
          />
        )}
      </footer>
    </Fragment>
  );

  return (
    <Fragment>
      <Modal>
        {isDidSubmit && didSubmitContent}
        {!isDidSubmit && !isSubmitting && contentModal}
        {isSubmitting && IsSubmittingContent}
      </Modal>
    </Fragment>
  );
};
export default Cart;
