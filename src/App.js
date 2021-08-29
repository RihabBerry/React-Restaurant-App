import React, { useState, useReducer } from "react";
import classes from "./App.module.css";
import NavBar from "./Component/NavBar/NavBar";
import List from "./Component/List/List";
import Cart from "./Component/Cart/Cart";

const ACTIONS = {
  ADD_MEAL: "add-meal",
  REMEOVE_MEAL: "remove-meal",
};

function reducer(shoppingList, action) {
  switch (action.type) {
    case ACTIONS.ADD_MEAL:
      return shoppingList.concat(action.payload);
    case ACTIONS.REMEOVE_MEAL:
      return shoppingList.filter((t) => t.id !== action.payload.id);
    default:
      return shoppingList;
  }
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);
  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  const addItemToShopingList = (item) => {
    setShoppingList(shoppingList.concat(item));
  };

  const removeItemFromShoppingList = (item) => {
    let newList = shoppingList.filter((t) => t.id !== item.id);
    setShoppingList(newList);
  };

  return (
    <div>
      <NavBar
        showModal={showModal}
        showModalHandler={showModalHandler}
        countOfItems={shoppingList.length}
      />
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
          <Cart
            shoppingList={shoppingList}
            showModal={showModal}
            showModalHandler={showModalHandler}
            addItemToShopingList={addItemToShopingList}
            removeItemFromShoppingList={removeItemFromShoppingList}
          />
        )}
        <List addItemToShopingList={addItemToShopingList} />
      </section>
    </div>
  );
}

export default App;
