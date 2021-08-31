import React, { useState, useReducer } from "react";
import classes from "./App.module.css";
import NavBar from "./Component/NavBar/NavBar";
import List from "./Component/List/List";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false);
  // const [shoppingList, setShoppingList] = useState([]);
  // const [state, dispatch] = useReducer(reducer, []);
  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  //const addItemToShopingList = (item) => {
  //   setShoppingList(shoppingList.concat(item));
  // };

  // const removeItemFromShoppingList = (item) => {
  //  let newList = shoppingList.filter((t) => t.id !== item.id);
  //  setShoppingList(newList);
  // };
  //All the components and their children have access to the cart
  return (
    <CartProvider>
      <NavBar showModal={showModal} showModalHandler={showModalHandler} />
      <section className={classes.cover}>
        <div className={classes.banner}>
          <h2> Delicous Food,Delivered to you </h2>
          <p>
            Choose your Favorite meal from our broad selection of availble meals
            and enjoy a delicious lunch or dinner All our meals are cooked with
            heigh quality ingredients,just in time and of course by experienced
            chefs.
          </p>
        </div>
        {showModal && (
          <Cart showModal={showModal} showModalHandler={showModalHandler} />
        )}
        <List />
      </section>
    </CartProvider>
  );
}

export default App;
