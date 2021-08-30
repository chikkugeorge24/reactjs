import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const { showCartHandler } = props;
  const cartContext = useContext(CartContext);
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
  const { items } = cartContext;
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  const noOfCartItems = cartContext.items.reduce((prev, cur) => {
    return prev + cur.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
