import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="text-center">
      <div className="font-bold text-4xl mt-4">
        Introduction to Redux Toolkit
      </div>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
