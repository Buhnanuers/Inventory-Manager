import { Fragment, useState, useEffect } from "react";
import InHouseInventory from "../InventoryLists/JS/InHouseInventory";
import IncomingInventory from "../InventoryLists/JS/IncomingInventory";
import OutgoingInventory from "../InventoryLists/JS/OutgoingInventory";
import AddItem from "./AddItem";

import classes from "../CSS/Inventory.module.css";

const Inventory = (props) => {
  const [addItemIsShown, setAddItemIsShown] = useState(false);
  const [addItemButtonIsShown, setAddItemButtonIsShown] = useState(false);

  const list = Object.values(props.list);

  const filteredInv = list.filter((item) => item.table === props.id);
  console.log(filteredInv);

  async function addInvItemHandler(item) {
    const response = await fetch(
      "https://inventory-e284c-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    props.onUpdateList();
  }

  async function removeInvItemHandler(item) {
    const itemToRemove = filteredInv.filter((data) => data.id === item);

    const elementURL =
      "https://inventory-e284c-default-rtdb.firebaseio.com/data/" +
      itemToRemove[0].tableName +
      ".json";

    const response = await fetch(elementURL, {
      method: "DELETE",
      body: JSON.stringify(itemToRemove[0]),
    });

    const data = await response.json();
    console.log(data);

    props.onUpdateList();
  }

  const showAdditemButtonHandler = () => {
    setAddItemButtonIsShown(true);
  };

  useEffect(() => {
    if (props.id !== "") {
      showAdditemButtonHandler();
    }
  });

  const showAddItemHandler = () => {
    setAddItemIsShown(true);
  };

  const hideAddItemHandler = () => {
    setAddItemIsShown(false);
  };

  return (
    <Fragment>
      <div className={classes.add_item}>
        {addItemButtonIsShown && (
          <button className={classes.button} onClick={showAddItemHandler}>
            Add Item
          </button>
        )}
      </div>
      {addItemIsShown && (
        <AddItem
          onAddItem={addInvItemHandler}
          onClose={hideAddItemHandler}
          table={props.id}
        />
      )}
      {props.id === "in-house" && (
        <InHouseInventory
          list={filteredInv}
          onRemoveItem={removeInvItemHandler}
        />
      )}
      {props.id === "incoming" && (
        <IncomingInventory
          list={filteredInv}
          onRemoveItem={removeInvItemHandler}
        />
      )}
      {props.id === "outgoing" && (
        <OutgoingInventory
          list={filteredInv}
          onRemoveItem={removeInvItemHandler}
        />
      )}
    </Fragment>
  );
};

export default Inventory;
