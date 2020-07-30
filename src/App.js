import React, { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";
import tick from "./img/tick.svg";

const App = () => {
  // const [todoItems, setTodoItems] = useState([
  //   { title: "Học JS", isComplete: true },
  //   { title: "Học Node.js", isComplete: false },
  //   { title: "Học React", isComplete: true },
  // ]);
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [newItem, setNewItem] = useState("");

  const [allStatus, setAllStatus] = useState(true);

  const [currentState, setCurrentState] = useState("All");

  const [currentItems, setCurrentItems] = useState([]);

  const [counter, setCounter] = useState(0);

  const [counterComp, setCounterComp] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));

    // Change current item list
    switch (currentState) {
      case "Active":
        setCurrentItems(todoItems.filter((item) => !item.isComplete));
        break;
      case "Complete":
        setCurrentItems(todoItems.filter((item) => item.isComplete));
        break;
      default:
        setCurrentItems(todoItems);
        break;
    }

    console.log("current: ");
    console.log(currentItems);
    console.log("all: ");
    console.log(todoItems);

    const incompleteItems = todoItems.filter((item) => !item.isComplete);
    setCounter(incompleteItems.length);

    const completeItems = todoItems.filter((item) => item.isComplete);
    setCounterComp(completeItems.length);
  }, [currentState, todoItems, counter]);

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
      setTodoItems([...todoItems, { title: text, isComplete: false }]);
      // setTodoItems([{ title: text, isComplete: false }, ...todoItems]);
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

  const onCheckAllClick = () => {
    setAllStatus(!allStatus);
    setTodoItems(
      todoItems.map((item) => {
        return { ...item, isComplete: allStatus };
      })
    );
  };

  const onStateClick = (newState) => {
    setCurrentState(newState);
  };

  const onClearCompleteClick = () => {
    setTodoItems(todoItems.filter((item) => !item.isComplete));
  };

  const onKeyUpItem = (item) => {
    return (event) => {
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
        const index = todoItems.indexOf(item);
        setTodoItems([
          ...todoItems.slice(0, index),
          { ...item, title: text },
          ...todoItems.slice(index + 1),
        ]);
      }
    };
  };

  return (
    <div className="App">
      <div className="Title">My Todos App</div>
      <div className="Header">
        <img src={tick} width="32" alt="Check all" onClick={onCheckAllClick} />
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={onInputChange}
          onKeyUp={onInputKeyUp}
        />
      </div>
      <div className="Container">
        {currentItems.length > 0 &&
          currentItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onCheckClick={onCheckClick(item)}
              onRemoveClick={onRemoveClick(item)}
              onKeyUpItem={onKeyUpItem(item)}
            />
          ))}
        {currentItems.length === 0 && (
          <p className="EmptyMessage">Nothing here !</p>
        )}
      </div>
      <Footer
        currentState={currentState}
        onStateClick={onStateClick}
        counter={counter}
        counterComp={counterComp}
        onClearCompleteClick={onClearCompleteClick}
      />
    </div>
  );
};

export default App;
