import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { title: "Học JS", isComplete: true },
    { title: "Học Node.js", isComplete: false },
    { title: "Học React", isComplete: true },
  ]);

  const onItemClick = (key) => {
    setTodoItems((prevItems) => {
      return prevItems.map((item, index) =>
        index === key ? { ...item, isComplete: !item.isComplete } : item
      );
    });
  };

  return (
    <div className="App">
      {todoItems.length > 0 &&
        todoItems.map((item, index) => {
          item.key = index;
          return (
          <TodoItem
            key={index}
            item={item}
            onItemClick={onItemClick}
          />);
        })}
      {todoItems.length === 0 && "Nothing here!!!"}
    </div>
  );
};

export default App;