import React from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import TodoStore from "../../store/Store";
import classes from "./TodoItem.module.css";
import { useDispatch } from "react-redux";

const TodoItem = ({ value }) => {
  const store = TodoStore;
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch({ type: "REMOVE", payload: value });
  };
  return (
    <>
      <div className={classes["todo-item"]}>
        <div className={classes.todo}>{value}</div>{" "}
        <div className={classes.functions}>
          <IoRemoveCircleOutline onClick={handleDeleteTodo} />
        </div>
      </div>
    </>
  );
};
export default TodoItem;
