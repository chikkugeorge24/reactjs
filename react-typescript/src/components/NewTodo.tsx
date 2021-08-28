import { FC } from "react";
import { FormEvent, useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: FC<{ onAddTodo: (text: string | undefined) => void }> = (
  props
) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
