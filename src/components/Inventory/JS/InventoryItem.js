import React, { useState, useEffect } from "react";
import classes from "../CSS/InventoryItem.module.css";

const InventoryItem = (props) => {
  const [useArrival, setUseArrival] = useState(false);
  const [useShipping, setUseShipping] = useState(false);
  const onRemoveItemHandler = () => {
    props.onRemoveItem(props.id);
  };

  useEffect(() => {
    if (props.table === "in-house") {
      setUseArrival(false);
      setUseShipping(false);
    }

    if (props.table === "outgoing") {
      setUseArrival(false);
      setUseShipping(true);
    }

    if (props.table === "incoming") {
      setUseArrival(true);
      setUseShipping(false);
    }
  }, [props.table]);

  return (
    <li className={classes.item}>
      <div>
        <h3>Name: {props.name}</h3>
        <div className={classes.quantity}>Quantity: {props.quantity}</div>
        <div className={classes.price}>Price per Unit: {props.price}</div>
        {useArrival && (
          <div className={classes.arrival_date}>
            Arrival Date: {props.arrivalDate}
          </div>
        )}
        {useShipping && (
          <div className={classes.shipping_date}>
            Shipping Date: {props.shippingDate}
          </div>
        )}
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--remove_button"]}
          onClick={onRemoveItemHandler}
        >
          Remove Item
        </button>
      </div>
    </li>
  );
};

export default InventoryItem;
