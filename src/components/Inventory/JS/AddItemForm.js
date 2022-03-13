import { useState, useRef } from "react";

import classes from "../CSS/AddItemForm.module.css";
import Input from "../../UI/JS/Input";

const AddItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const nameInputRef = useRef();
  const quantityInputRef = useRef();
  const priceInputRef = useRef();
  const arrivalInputRef = useRef();
  const shippingInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredArrival = arrivalInputRef.current.value;
    const enteredShipping = shippingInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredQuantity < 0 ||
      enteredPrice < 0
    ) {
      setFormIsValid(false);
      return;
    }

    props.onAddItem({
      name: enteredName,
      quantity: enteredQuantity,
      price: enteredPrice,
      arrivalDate: enteredArrival,
      shippingDate: enteredShipping,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="name" className={["label"]}>Name of Product:</label>
      <Input
        ref={nameInputRef}
        input={{
          id: "name",
          label: "name",
        }}
      />
      <label htmlFor="quantity">Quantity of Product:</label>
      <Input
        ref={quantityInputRef}
        input={{
          id: "quantity",
          label: "quantity",
        }}
      />
      <label htmlFor="price">Price of Product:</label>
      <Input
        ref={priceInputRef}
        input={{
          id: "price",
          label: "price",
        }}
      />
      <label htmlFor="price">Date of Arrival (0 if N/A):</label>
      <Input
        ref={arrivalInputRef}
        input={{
          id: "arrival",
          label: "arrival",
        }}
      />
      <label htmlFor="price">Date of Shipping (0 if N/A):</label>
      <Input
        ref={shippingInputRef}
        input={{
          id: "shipping",
          label: "shipping",
        }}
      />
      <div className={classes.actions}>
        <button className={classes["button--close"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes["button--add"]} type="submit">
          Add Item
        </button>
      </div>
      {!formIsValid && <p>One or more entered values are invalid.</p>}
    </form>
  );
};

export default AddItemForm;
