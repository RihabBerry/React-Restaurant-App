import React, { useState } from "react";
import classes from "./App.module.css";
import NavBar from "./Component/NavBar/NavBar";
import List from "./Component/List/List";
import Modal from "./Component/UI/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
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
          <Modal showModal={showModal} showModalHandler={showModalHandler} />
        )}
        <List />
      </section>
    </div>
  );
}

export default App;
