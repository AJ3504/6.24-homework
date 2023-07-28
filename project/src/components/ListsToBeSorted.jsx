import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteTodo, toggleStatusTodo } from "redux/modules/todos";

export const ListsToBeSorted = () => {
  //
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //
  const changeStatusHandler = (def) => {
    dispatch(toggleStatusTodo(def));
  };

  const deleteStatusHandler = (abc) => {
    dispatch(deleteTodo(abc));
  };

  return (
    <>
      <div className="working">
        <h2>Working🔥</h2>
        <div className="working-container">
          {todos
            .filter((todo) => todo.isDone === false)
            .map(function (todo) {
              return (
                <div key={todo.id}>
                  <h5>{todo.title}</h5>
                  <br />
                  <p>{todo.content}</p>
                  <br />
                  <p>완료여부: {todo.isDone.toString()}</p>
                  <button onClick={() => changeStatusHandler(todo.id)}>
                    완료
                  </button>
                  <button onClick={() => deleteStatusHandler(todo.id)}>
                    삭제
                  </button>

                  <Link to={`/${todo.id}`}>상세보기</Link>
                </div>
              );
            })}
        </div>
      </div>

      <div className="done">
        <h2>Done🎉</h2>
        <div className="done-container">
          {todos
            .filter((todo) => todo.isDone === !false)
            .map(function (todo) {
              return (
                <div key={todo.id}>
                  <h5>{todo.title}</h5>
                  <br />
                  <p>{todo.content}</p>
                  <br />
                  <p>완료여부: {todo.isDone.toString()}</p>
                  <button onClick={() => changeStatusHandler(todo.id)}>
                    완료취소
                  </button>
                  <button onClick={() => deleteStatusHandler(todo.id)}>
                    삭제
                  </button>
                  <Link to={`/${todo.id}`}>상세보기</Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
