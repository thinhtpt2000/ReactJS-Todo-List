import React from "react";
import classnames from "classnames";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { item, onItemClick } = props;

  const handleClick = () => {
    onItemClick(item.key);
  }

  const className = classnames("TodoItem", {
    "TodoItem-complete": item.isComplete,
  });

  return (
    <div onClick={handleClick} className={className}>
      <p>{item.title}</p>
    </div>
  );
};

export default TodoItem;
