import classes from "../CSS/HeaderButton.module.css";

const HeaderButton = (props) => {
  const clickHandler = () => {
      props.onSelectButton(props.id);
  };

  return (
    <button id={props.id} className={classes.button} onClick={clickHandler}>
      <span>{props.label}</span>
    </button>
  );
};

export default HeaderButton;
