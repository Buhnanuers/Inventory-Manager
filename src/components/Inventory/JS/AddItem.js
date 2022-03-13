import React from "react";

import classes from "../CSS/AddItem.module.css";

import Modal from "../../UI/JS/Modal";
import AddItemForm from "./AddItemForm";

const AddItem = (props) => {
  const onAddHandler = (event) => {
    props.onAddItem({
      id: Math.random().toString(),
      name: event.name,
      quantity: event.quantity,
      price: event.price,
      arrivalDate: event.arrivalDate,
      shippingDate: event.shippingDate,
      table: props.table
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.prompt}>
        <span>Add a new item to {props.table}</span>
      </div>
      <div>
        <AddItemForm onClose={props.onClose} onAddItem={onAddHandler} />
      </div>
    </Modal>
  );
};

export default AddItem;
