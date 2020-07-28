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

  const onItemClick = (item) => {
    // setTodoItems((prevItems) => {
    //   return prevItems.map((item, index) =>
    //     index === key ? { ...item, isComplete: !item.isComplete } : item
    //   );
    // });
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

  const onKeyUp = (event) => {
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

  const onChange = (event) => {
    const text = event.target.value;
    setNewItem(text);
  }

  return (
    <div className="App">
      <div className="Header">
        <img src={tick} width="32" />
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
      </div>
      {todoItems.length > 0 &&
        todoItems.map((item, index) => (
          <TodoItem key={index} item={item} onItemClick={onItemClick(item)} />
        ))}
      {todoItems.length === 0 && "Nothing here!!!"}
    </div>
  );
};

export default App;
