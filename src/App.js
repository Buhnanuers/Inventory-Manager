import { Fragment, useState, useCallback, useEffect } from "react";

import Header from "./components/Layout/JS/Header";
import Inventory from "./components/Inventory/JS/Inventory";

function App() {
  const [tableID, setTableID] = useState("");
  const [inv, setInv] = useState({});

  const fetchInventoryHandler = useCallback(async () => {
    const response = await fetch(
      "https://inventory-e284c-default-rtdb.firebaseio.com/data.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();

    console.log(data);

    const itemNames = getItemNames(data);
    if (data !== null) {
      const dataArray = Object.values(data);
      let inventoryList = [];
      let count = 0;
      while (count < dataArray.length) {
        inventoryList.push({
          ...dataArray[count],
          tableName: itemNames[count],
        });
        count++;
      }

      setInv(inventoryList);
    } else {
      
    }
  }, []);

  const getItemNames = (data) => {
    let names = [];
    for (const item in data) {
      names.push(item);
    }

    return names;
  };

  useEffect(() => {
    fetchInventoryHandler();
  }, [fetchInventoryHandler]);

  const showInventoryHandler = (id) => {
    setTableID(() => {
      return id;
    });
  };

  return (
    <Fragment>
      <Header onShowList={showInventoryHandler} />
      <Inventory onUpdateList={fetchInventoryHandler} id={tableID} list={inv} />
    </Fragment>
  );
}

export default App;
