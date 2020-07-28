import React from "react";
import classnames from "classnames";
import "./TodoItem.css";
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";

const TodoItem = (props) => {
  const { item, onItemClick } = props;

  let url = checkImg;

  if (item.isComplete) {
    url = checkCompleteImg;
  }

  const className = classnames("TodoItem", {
    "TodoItem-complete": item.isComplete,
  });

  return (
    <div className={className}>
      <img src={url} width="32" onClick={onItemClick} />
      <p>{item.title}</p>
    </div>
  );
};

export default TodoItem;
