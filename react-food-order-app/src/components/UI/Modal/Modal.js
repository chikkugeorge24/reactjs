import React from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const { onClose } = props;
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const { hideCartHandler } = props;
  return (
    <div>
      <Backdrop onClose={hideCartHandler} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
};

export default Modal;
