import React from "react";
import { v4 as uuid } from "uuid";
import shortid from "shortid";

//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

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
// export const getTodoById = (payload) => {
//   return { type: GET_TODO_BY_ID, payload };
// };

//초기값
//🦑const initialState = [{}, {}]
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

//🦑reducer : 액션을 지정해서, 이렇게 해줘!!
const todos = (state = initialState, action) => {
  console.log("리듀서의 parameter로 들어온 state의 콘솔값", state);
  switch (action.type) {
    //
    case ADD_TODO:
      //🦑기존의 state를 펼쳐서, 새롭게 받아온 todo 객체(=action.payload)를 탑재
      return [...state, action.payload];

    //
    case DELETE_TODO:
      //🦑filter, map : 48번째 줄처럼 []으로 안감싸줘도 됨  //return [...state, state.filter((item) => item.id !== action.todoId)];
      //🦑return state.filter((todo) => todo.id !== action.payload)인데, payload 안에 Lists의 todo.id를 연결해주면 됨
      return state.filter((item) => item.id !== action.abc);

    //
    case TOGGLE_STATUS_TODO:
      // return {
      //   ...state,
      //   todos: state.map((todo) =>
      //     todo.id === action.def ? { ...todo, isDone: !todo.isDone } : todo
      //   ),
      // };
      //🦑요소만큼 return해야 하므로, filter가 아닌 map
      //❓🦑여기서도 최종 return물은 배열
      //🦑로직: id가 같으면? 원래 있던 객체를 펼쳐주고, 속성을 반대로 지정 <-> id가 안같으면? 원래 있던 그대로를 return
      return state.map((item) => {
        if (item.id === action.def) {
          //❓🦑배열인 item을 펼치고, 속성 isDone에 접근해서 값을 바꿔주고, 다시 {}로 감싸주고
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    //
    // case GET_TODO_BY_ID:
    //   return {};

    //
    default:
      return state;
  }
};

export default todos;
