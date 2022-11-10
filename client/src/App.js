import { useEffect, useContext, useState } from "react";
import { TaskContext } from "./contexts/TaskContext";
import Task from "./components/Task";
import "./App.css";

function App() {
  const {
    taskState: { tasks },
    getAllTasks,
    addTask,
  } = useContext(TaskContext);

  const [inputValue, setInputValue] = useState("");

  // Start: Get all posts
  useEffect(() => getAllTasks(), []);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(inputValue);
  };
  const handleClearTask = (e) => {
    e.preventDefault();
    addTask(inputValue);
  };
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div className="header">
            <h1>Task Manager</h1>
          </div>

          <div className="main">
            <form className="form">
              <input
                name="name"
                type="text"
                placeholder="Add Task..."
                value={inputValue}
                onChange={(e) => handleChange(e)}
                required
                className="task-input"
              />
              <div className="buttons">
                <button className="btn add-task-btn" onClick={handleAddTask}>
                  Add Task
                </button>
                <button className="btn clear-btn" onClick={handleClearTask}>
                  Clear
                </button>
              </div>
            </form>
            <div>
              {tasks.length ? (
                <ul className="list">
                  {tasks.map((task) => {
                    return <Task task={task} key={task._id} />;
                  })}
                </ul>
              ) : (
                <div className="no-tasks">No Tasks</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
