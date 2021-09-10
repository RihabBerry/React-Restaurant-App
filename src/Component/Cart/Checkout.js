import React, { Fragment, useRef, useState } from "react";
import classes from "./Checkout.module.css";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";
const Checkout = (props) => {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isValidStreet, setIsValidStreet] = useState(false);
  const [isValidCity, setIsValidCity] = useState(false);
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const codeZipInputRef = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("you logged submit");
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const city = cityInputRef.current.value;
    const codeZip = codeZipInputRef.current.value;

    if (name.trim() === "") {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
    if (street.trim() === "") {
      setIsValidStreet(false);
    } else {
      setIsValidStreet(true);
    }
    if (city.trim() === "") {
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
    }

    setIsTouched(true);

    const order = {
      id: uuidv4(),
      address: street,
      name: name,
      codeZip: codeZip,
      city: city,
    };

    props.onSubmit(order);
  };
  const isInvalidName = !isNameValid && isTouched;
  const isInvalidStreet = !isValidStreet && isTouched;
  const isInvalidCity = !isValidCity && isTouched;
  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name"> Your Name :</label>
        <input ref={nameInputRef} id="name" placeholder="Enter your Name" />
        {isInvalidName && <p style={{ color: "red" }}> name is invalid </p>}
        <label htmlFor="street">Street :</label>
        <input
          id="street"
          placeholder="Enter your Street"
          ref={streetInputRef}
        />
        {isInvalidStreet && <p style={{ color: "red" }}> street is invalid </p>}

        <label htmlFor="Postal-Code"> Post Code :</label>
        <input
          ref={codeZipInputRef}
          id="Postal-code "
          placeholder="Enter Post Code"
          pattern="[0-9]{5}"
        />
        <label htmlFor="City"> City :</label>
        <input ref={cityInputRef} id="City" placeholder="Enter City" />
        {isInvalidCity && <p style={{ color: "red" }}> City is invalid </p>}

        <button type="submit">Confirm</button>
        <button type="button" onClick={props.showModalHandler}>
          close
        </button>
      </form>
    </Fragment>
  );
};
export default Checkout;
