import React from "react";
import classnames from "classnames";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { item } = props;
  /*
        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' TodoItem-complete';
        }
        */
  let className = classnames("TodoItem", {
    "TodoItem-complete": item.isComplete,
  });
  return (
    <div className={className}>
      <p>{item.title}</p>
    </div>
  );
};

export default TodoItem;
