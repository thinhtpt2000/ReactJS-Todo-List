import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

const App = () => {
  const todoItems = [
    { title: "Học JS", isComplete: true },
    { title: "Học Node.js" },
    { title: "Học React" },
  ];
  return (
    <div className="App">
      {todoItems.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
};

export default App;
