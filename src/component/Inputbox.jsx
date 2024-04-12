import React, { useState } from "react";

const Inputbox = ({ addTodo }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      taskName: taskName,
      description: description,
      status: status
    });
    // Clear input fields after submitting
    setTaskName("");
    setDescription("");
    setStatus("All");
  };

  return (
    <div className="container input-box">
      <form onSubmit={handleSubmit}>
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
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <select
              className="form-control"
              aria-label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Complete">Complete</option>
              <option value="Not Complete">Not Complete</option>
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inputbox;
