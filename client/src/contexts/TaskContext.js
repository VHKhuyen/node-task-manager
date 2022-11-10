import { createContext, useReducer } from "react";
import { taskReducer } from "../store/taskReducer";
import {
  apiUrl,
  TASKS_LOADED_FAIL,
  TASKS_LOADED_SUCCESS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  FIND_TASK,
} from "./constants";
import axios from "axios";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  // State
  const [taskState, dispatch] = useReducer(taskReducer, {
    task: null,
    tasks: [],
  });

  // const [showAddPostModal, setShowAddPostModal] = useState(false);
  // const [showUpdatePostModal, setShowUpdatePostModal] = useState(false);
  // const [showToast, setShowToast] = useState({
  //   show: false,
  //   message: "",
  //   type: null,
  // });

  // Get all posts
  const getAllTasks = async () => {
    try {
      const response = await axios.get(`${apiUrl}/tasks`);
      if (response.data.success) {
        dispatch({ type: TASKS_LOADED_SUCCESS, payload: response.data.tasks });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: TASKS_LOADED_FAIL });
    }
  };

  // Add post
  const addTask = async (newTask) => {
    try {
      const response = await axios.post(`${apiUrl}/tasks`, { name: newTask });
      if (response.data.success) {
        dispatch({ type: ADD_TASK, payload: response.data.task });
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete post
  const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`${apiUrl}/tasks/${taskId}`);
      if (response.data.success)
        dispatch({ type: DELETE_TASK, payload: taskId });
    } catch (error) {
      console.log(error);
    }
  };

  // Find post when user is updating post
  const findTask = (taskId) => {
    const post = taskState.posts.find((post) => post._id === taskId);
    dispatch({ type: FIND_TASK, payload: post });
  };

  // Update post
  const updatePost = async (updatedPost) => {
    try {
      const response = await axios.put(
        `${apiUrl}/posts/${updatedPost._id}`,
        updatedPost
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_TASK, payload: response.data.post });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Post context data
  const taskContextData = {
    taskState,
    getAllTasks,
    addTask,
    deleteTask,
    findTask,
    updatePost,
    // showAddPostModal,
    // setShowAddPostModal,
    // showUpdatePostModal,
    // setShowUpdatePostModal,
    // showToast,
    // setShowToast,
  };

  return (
    <TaskContext.Provider value={taskContextData}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
