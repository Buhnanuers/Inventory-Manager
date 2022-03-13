import React, { Fragment } from "react";
import classes from "../CSS/Header.module.css";

import HeaderButton from "./HeaderButton";

const inHouse = "In-House";
const outgoing = "Outgoing";
const incoming = "Incoming";

const Header = (props) => {
  const saveButtonId = (id) => {
      props.onShowList(id);
  };

  return (
    <Fragment>
    <header className={classes.header}>
      <HeaderButton
        id="in-house"
        onSelectButton={saveButtonId}
        label={inHouse}
      />
      <HeaderButton
        id="outgoing"
        onSelectButton={saveButtonId}
        label={outgoing}
      />
      <HeaderButton
        id="incoming"
        onSelectButton={saveButtonId}
        label={incoming}
      />
    </header>
     
    </Fragment>
  );
};

export default Header;
