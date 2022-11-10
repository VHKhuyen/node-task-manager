import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task._id);
  };
  return (
    <li className="list-item">
      <span>{task.name} </span>
      <div>
        {task.completed && (
          <button className="btn-edit task-btn">
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )}
        <button className="btn-edit task-btn">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn-delete task-btn" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Task;
