import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const { hideCartHandler } = props;
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        const { id, name, amount, price } = item;
        return (
          <CartItem
            key={id}
            name={name}
            amount={amount}
            price={price}
            onRemove={() => cartItemRemoveHandler(id)}
            onAdd={() => cartItemAddHandler(item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal hideCartHandler={hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideCartHandler}>
          Close
        </button>
        {hasItems && <button className={classes["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
