import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Modal = (props) => {
  const Backdrop = (props) => {
    return (
      <div onClick={props.showModalHandler} className={classes.backdrop} />
    );
  };
  const ModalOverlay = () => {
    return <div className={classes.wrapper}>{props.children}</div>;
  };
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
