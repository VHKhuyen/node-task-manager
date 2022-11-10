import {
  TASKS_LOADED_SUCCESS,
  TASKS_LOADED_FAIL,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  FIND_TASK,
} from "../contexts/constants";

export const taskReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TASKS_LOADED_SUCCESS:
      return {
        ...state,
        tasks: payload,
      };

    case TASKS_LOADED_FAIL:
      return {
        ...state,
        tasks: [],
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== payload),
      };

    case FIND_TASK:
      return { ...state, post: payload };

    case UPDATE_TASK:
      const newPosts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );

      return {
        ...state,
        posts: newPosts,
      };

    default:
      return state;
  }
};
