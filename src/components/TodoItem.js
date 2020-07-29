import React, { useState } from "react";
import classNames from "classnames";
import "./TodoItem.css";
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";
import removeImg from "../img/close.svg";

const TodoItem = (props) => {
  const { item, onCheckClick, onRemoveClick, onKeyUpItem } = props;

  const [itemText, setItemText] = useState(item.title);

  const [isEdit, setEdit] = useState(false);

  let url = checkImg;

  if (item.isComplete) {
    url = checkCompleteImg;
  }

  const className = classNames("TodoItem", {
    "TodoItem-complete": item.isComplete,
  });

  const onChangeItem = (event) => {
    const text = event.target.value;
    setItemText(text);
  };

  const onDoubleClickItem = (event) => {
    setEdit(!isEdit);
  };

  const handleKeyUpItem = (event) => {
    onKeyUpItem(event);
    const { keyCode } = event;
    let text = event.target.value;
    if (keyCode === 13) {
      setEdit(false);
      if (!text || !text.trim()) {
        setItemText(item.title);
      }
    }
  };

  return (
    <div className={className}>
      <img src={url} width="32" onClick={onCheckClick} alt="Check item" />
      {isEdit && (
        <input
          value={itemText}
          onChange={onChangeItem}
          onKeyUp={handleKeyUpItem}
        />
      )}
      {!isEdit && <p onDoubleClick={onDoubleClickItem}>{itemText}</p>}
      <img
        className="RemoveImg"
        src={removeImg}
        width="18"
        onClick={onRemoveClick}
        alt="Remove item"
      />
    </div>
  );
};

export default TodoItem;
