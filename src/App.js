import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./img/tick.svg";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { title: "Học JS", isComplete: true },
    { title: "Học Node.js", isComplete: false },
    { title: "Học React", isComplete: true },
  ]);

  const [newItem, setNewItem] = useState("");

  const onCheckClick = (item) => {
    return (event) => {
      const isComplete = item.isComplete;
      const index = todoItems.indexOf(item);
      setTodoItems([
        ...todoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete,
        },
        ...todoItems.slice(index + 1),
      ]);
    };
  };

  const onInputKeyUp = (event) => {
    const { keyCode } = event;
    let text = event.target.value;
    if (keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      setTodoItems([{ title: text, isComplete: false }, ...todoItems]);
      setNewItem("");
    }
  };

  const onInputChange = (event) => {
    const text = event.target.value;
    setNewItem(text);
  };

  const onRemoveClick = (item) => {
    return (event) => {
      const index = todoItems.indexOf(item);
      setTodoItems([
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1),
      ]);
    };
  };

  return (
    <div className="App">
      <div className="Header">
        <img src={tick} width="32" alt="Check all"/>
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={onInputChange}
          onKeyUp={onInputKeyUp}
        />
      </div>
      {todoItems.length > 0 &&
        todoItems.map((item, index) => (
          <TodoItem key={index} item={item} onCheckClick={onCheckClick(item)} onRemoveClick={onRemoveClick(item)} />
        ))}
      {todoItems.length === 0 && <p className="EmptyMessage">Nothing here !</p>}
    </div>
  );
};

export default App;
