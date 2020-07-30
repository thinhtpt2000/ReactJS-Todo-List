import React, { useState } from "react";
import classNames from "classnames";
import "./TodoItem.css";
import uncheckImg from "../img/uncheck.svg";
import checkImg from "../img/check.svg";
import removeImg from "../img/close.svg";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const { item, onCheckClick, onRemoveClick, onKeyUpItem } = props;

  const [itemText, setItemText] = useState(item.title);

  const [isEdit, setEdit] = useState(false);

  let urlImg = uncheckImg;

  if (item.isComplete) {
    urlImg = checkImg;
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

  const handleOnBlurInput = (event) => {
    setEdit(false);
    setItemText(item.title);
  }

  return (
    <div className={className}>
      <img src={urlImg} width="32" onClick={onCheckClick} alt="Check item" />
      {isEdit && (
        <input
          value={itemText}
          onChange={onChangeItem}
          onKeyUp={handleKeyUpItem}
          onBlur={handleOnBlurInput}
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

TodoItem.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),
  onCheckClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onKeyUpItem: PropTypes.func,
};

export default TodoItem;
