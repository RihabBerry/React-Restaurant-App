import React, { Fragment } from "react";
import classes from "./List.module.css";
import Item from "../Item/Item";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  const list = [
    {
      id: uuidv4(),
      MealName: "Sushi",
      MealDescription: "Finest fish and Veggies",
      Price: 22.99,
    },
    {
      id: uuidv4(),
      MealName: "Soupe",
      MealDescription: "Finest fish and Veggies",
      Price: 54.99,
    },
    {
      id: uuidv4(),
      MealName: "Mixed Grill",
      MealDescription: "Finest fish and Veggies",
      Price: 58.99,
    },
    {
      id: uuidv4(),
      MealName: "Salad",
      MealDescription: "Finest fish and Veggies",
      Price: 13.99,
    },
  ];

  const items = list.map((item) => (
    <Item
      key={item.id}
      addItemToShopingList={props.addItemToShopingList}
      item={item}
    />
  ));
  return (
    <Fragment>
      <div className={classes.list}> {items}</div>
    </Fragment>
  );
};
export default List;
