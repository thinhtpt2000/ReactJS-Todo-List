import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

const App = () => {
  const todoItems = [
    { title: "Học JS", isComplete: true },
    { title: "Học Node.js" },
    { title: "Học React", isComplete: true },
  ];
  return (
    <div className="App">
      {todoItems.length > 0 && todoItems.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
      {todoItems.length === 0 && 'Nothing here!!!'}
    </div>
  );
};

export default App;
