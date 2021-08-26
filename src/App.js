import React, { useState } from "react";
import classes from "./App.module.css";
import NavBar from "./Component/NavBar/NavBar";
import List from "./Component/List/List";
import Modal from "./Component/UI/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  const addItemToShopingList = (item) => {
    setShoppingList(shoppingList.concat(item));
    console.log("this is your list", shoppingList);
  };

  const removeItemFromShoppingList = (item) => {
    console.log("removed!!");
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
          <Modal
            shoppingList={shoppingList}
            showModal={showModal}
            showModalHandler={showModalHandler}
            addItemToShopingList={addItemToShopingList}
          />
        )}
        <List addItemToShopingList={addItemToShopingList} />
      </section>
    </div>
  );
}

export default App;
