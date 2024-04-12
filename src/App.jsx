import React, { useState } from "react";
import "./App.css";
import todoList from "./todoList";

function App() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(todoList);
  const [editIndex, setEditIndex] = useState(null); // Index of the item being edited
  const [filter, setFilter] = useState("All"); // Filter for displaying todos

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // If editIndex is not null, update the todo item at editIndex
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { ...todos[editIndex], taskName, description };
      setTodos(updatedTodos);
      setEditIndex(null);
      alert("Updated Successfully");
    } else {
      // If editIndex is null, add a new todo item
      setTodos([...todos, { taskName, description, completed: false }]);
      alert("Created Successfully");
    }

    // Clear input fields after submitting
    setTaskName("");
    setDescription("");
  };

  // Delete todo item by index
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    alert("Deleted Successfully");
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setTaskName(todo.taskName);
    setDescription(todo.description);
    setEditIndex(index);
  };

  const handleStatusChange = (index, completed) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], completed };
    setTodos(updatedTodos);
    alert("Status Updated");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Complete") {
      return todo.completed;
    } else if (filter === "Not Complete") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  const filterColor = (filter) => {
    if (filter === "All") {
      return 'bg-secondary';
    } else if (filter === "Complete") {
      return 'bg-success';
    } else {
      return 'bg-danger';
    }
  };
  

  return (
    <div className="App">
      <div className="container input-box">
        <form onSubmit={handleSubmit}>
          <h3 align="center" className="mb-4"> Todo List</h3>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control form-des"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container ">
        <div className="filter-div">
        <h2>Todos</h2>
         <div className="filter-opt">
          <h2>Status Filter</h2>
          <select
            className={`form-select text-white ${filterColor(filter)}`}
            aria-label="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Not Complete">Not Complete</option>
          </select>
         </div>
        </div>

        
        <div className="container">
          <div className="row">
            {filteredTodos.map((todo, index) => (
              <div className="col-lg-4" key={index}>
                <div className="todo-box">
                  <div className="card-body">
                    <h5 className="card-title">Task : {todo.taskName}</h5>
                    <h5 className="card-text mt-4">Description :</h5>
                    <p>{todo.description}</p>
                    <select
                      className={`form-select text-white mt-4 dropdown-toggle ${
                        todo.completed ? "bg-success" : "bg-danger"
                      }`}
                      aria-label="Status"
                      data-toggle="dropdown"
                      value={todo.completed ? "Complete" : "Not Complete"}
                      onChange={(e) =>
                        handleStatusChange(index, e.target.value === "Complete")
                      }
                    >
                      
                      <option value="Complete">Complete</option>
                      <option value="Not Complete">Not Complete</option>
                    </select>
                    <i class="bi bi-caret-down-fill"></i>
                    <div className="bottom-btn">
                      <button
                        className="btn btn-info"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
