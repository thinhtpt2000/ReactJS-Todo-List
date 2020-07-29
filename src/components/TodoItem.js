import React from "react";
import classnames from "classnames";
import "./TodoItem.css";
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";
import removeImg from "../img/close.svg";

const TodoItem = (props) => {
  const { item, onCheckClick, onRemoveClick } = props;

  let url = checkImg;

  if (item.isComplete) {
    url = checkCompleteImg;
  }

  const className = classnames("TodoItem", {
    "TodoItem-complete": item.isComplete,
  });

  return (
    <div className={className}>
      <img src={url} width="32" onClick={onCheckClick} alt="Check item" />
      <p>{item.title}</p>
      <img
        className="RemoveImg"
        src={removeImg}
        width="24"
        onClick={onRemoveClick}
        alt="Remove item"
      />
    </div>
  );
};

export default TodoItem;
