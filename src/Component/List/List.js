import React, { Fragment } from "react";
import classes from "./List.module.css";
import Item from "../Item/Item";

const List = () => {
  const list = [
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
    },
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
    },
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
    },
    {
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: "$22.99",
    },
  ];

  const items = list.map((item) => <Item item={item} />);
  return (
    <Fragment>
      <div className={classes.list}> {items}</div>
    </Fragment>
  );
};
export default List;
