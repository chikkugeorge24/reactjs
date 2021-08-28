import { FC, useState, createContext } from "react";
import Todo from "../models/todos";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string | undefined) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string | undefined) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string | undefined) => {
    if (todoText) {
      const newTodo = new Todo(todoText);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    }
  };

  const removeHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
