import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { ADD_ITEM, REMOVE_ITEM } from "../redux/actions";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const { payload, type } = action;
  const { items, totalAmount } = state;
  let existingCartItemIndex,
    existingCartItem,
    updatedItems,
    updatedTotalAmount,
    updatedItem;
  switch (type) {
    case ADD_ITEM:
      const { price, amount, id } = payload;
      existingCartItemIndex = items.findIndex((item) => item.id === id);
      existingCartItem = items[existingCartItemIndex];
      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + amount,
        };
        updatedItems = [...items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = items.concat(payload);
      }
      updatedTotalAmount = totalAmount + price * amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case REMOVE_ITEM:
      existingCartItemIndex = items.findIndex((item) => item.id === payload);
      existingCartItem = items[existingCartItemIndex];
      updatedTotalAmount = totalAmount - existingCartItem.price;
      if (existingCartItem.amount === 1) {
        updatedItems = items.filter((item) => item.id !== payload);
      } else {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);
  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
