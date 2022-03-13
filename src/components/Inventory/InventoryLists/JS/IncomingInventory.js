import React, { useState, useEffect } from "react";
import InventoryItem from "../../JS/InventoryItem";
import Card from "../../../UI/JS/Card";

import classes from "../CSS/IncomingInventory.module.css";

const IncomingInventory = (props) => {
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
      arrivalDate={item.arrivalDate}
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
    <section className={classes.incoming_list}>
      <Card>{hasItems ? <ul>{incomingList}</ul> : <p>List is empty!</p>}</Card>
    </section>
  );
};

export default IncomingInventory;
