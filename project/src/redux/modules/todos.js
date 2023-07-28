import shortid from "shortid";

//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//action creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (abc) => {
  return { type: DELETE_TODO, abc };
};
export const toggleStatusTodo = (def) => {
  return { type: TOGGLE_STATUS_TODO, def };
};

//초기값
const initialState = [
  {
    id: shortid.generate(),
    title: "YET",
    content: "not yet",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "DONE",
    content: "already done",
    isDone: true,
  },
];

//reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    //
    case ADD_TODO:
      return [...state, action.payload];

    //
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.abc);

    //
    case TOGGLE_STATUS_TODO:
      return state.map((item) => {
        if (item.id === action.def) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default todos;
