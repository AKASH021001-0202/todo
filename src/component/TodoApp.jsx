import React, { useState } from "react";
import Inputbox from "./Inputbox";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // Add todo function
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Update todo function
  const updateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  // Delete todo function
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Inputbox addTodo={addTodo} />
      {/* Display the list of todos */}
      <div className="container">
        <div className="row">
        {todos.map((todo, index) => (
        <div className="col-lg-4" >
          <div className="card">
            Task: {todo.taskName}, Description: {todo.description}, Status: {todo.status}
            {/* Edit button */}
            <button onClick={() => updateTodo(index, { ...todo, description: "Updated Description" })}>
              Edit
            </button>
            {/* Delete button */}
            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        
        </div>
        ))}
        </div>
       
      
      </div>
    </div>
  );
};

export default TodoApp;
