import React, { useState, useEffect } from "react";
import InventoryItem from "../../JS/InventoryItem";
import Card from "../../../UI/JS/Card";

import classes from "../CSS/OutgoingInventory.module.css";

const OutgoingInventory = (props) => {
  const [hasItems, setHasItems] = useState(false);

  const onRemoveItemHandler = (item) => {
    props.onRemoveItem(item);
  };

  const incomingList = props.list.map((item) => (
    <InventoryItem
      id={item.id}
      key={item.id}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      shippingDate={item.shippingDate}
      table={item.table}
      onRemoveItem={onRemoveItemHandler}
    />
  ));

  useEffect(() => {
    if (incomingList.length > 0) {
      setHasItems(true);
    }
  }, [incomingList.length]);

  return (
    <section className={classes.outgoing_list}>
      <Card>{hasItems ? <ul>{incomingList}</ul> : <p>List is empty!</p>}</Card>
    </section>
  );
};

export default OutgoingInventory;
