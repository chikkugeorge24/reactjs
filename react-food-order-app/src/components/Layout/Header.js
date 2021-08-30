import React from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const { showCartHandler } = props;
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCartHandler={showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals-background" />
      </div>
    </>
  );
};

export default Header;
