import React from "react";
import classes from "./App.module.css";
import NavBar from "./Component/NavBar/NavBar";
import List from "./Component/List/List";
function App() {
  return (
    <div>
      <NavBar />
      <section className={classes.cover}>
        <div className={classes.banner}>
          <h2> Delicous Food ,Delivered to you </h2>
          <p>
            Choose your Favorite meal from our broad selection of availble meals
            and enjoy a delicious lunch or dinner All our meals are cooked with
            heigh quality ingredients , just in time and of course by
            experienced chefs .
          </p>
        </div>

        <List />
      </section>
    </div>
  );
}

export default App;
