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
                  <button
                    onClick={() => changeStatusHandler(todo.id)}

                    // () => {
                    //   dispatch(
                    //     {
                    //       type: TOGGLE_STATUS_TODO,
                    //       payload: "todo.id", =>대신 위에서는 def로 따로 뺌
                    //     }
                    //   )
                    // }
                  >
                    완료
                  </button>
                  <button
                    onClick={() => deleteStatusHandler(todo.id)}

                    // () => {
                    //   dispatch(
                    //     {
                    //       type: DELETE_TODO,
                    //       payload: "todo.id", =>🦑함수를 따로 빼게 되면, payload로 넣은 todo.id를 인식하지 못해서 abc로 바꿈. but 결국 abc = todo.id임
                    //     }
                    //   )
                    // }
                  >
                    삭제
                  </button>
                  {/* 상세보기 */}
                  {/* <Link to="/1">상세보기</Link> */}
                  {/* 🦑/${todo.id}는 todo 객체의 id 값을 포함한 경로를 생성합니다. 예를 들어, todo.id가 9d33d690-48ff-45e3-88ba-e8b3d872433b인 경우, 생성되는 경로는 /9d33d690-48ff-45e3-88ba-e8b3d872433b가 됩니다. */}
                  <Link to={`/${todo.id}`}>상세보기</Link>
                </div>
              );
            })}
        </div>
      </div>

      <div className="done">
        <h2>Done🎉</h2>
        <div className="done-container">
          {/* {todos
            .filter((todo) => todo.isDone === true)
            .map(function (todo) {
              return todo.isDone ? (
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
                </div>
              ) : null;
            })} */}
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

//----------------------------------------------------------------------//
//기존
// export const ListsToBeSorted = ({ todos, setTodos, listIsDone }) => {
//   return (
//     <>
//       <h2>{listIsDone ? "Working🔥" : "Done🎉"}</h2>
//       {todos
//         .filter((todo) => todo.isDone === listIsDone)
//         .map((todo) => {
//           return (
//             <div
//               key={todo.id}
//               style={{
//                 border: "1px solid green",
//                 margin: "10px",
//                 paddingLeft: "10px",
//               }}
//             >
//               <h3>{todo.title}</h3>
//               <p>{todo.content}</p>
//               <p>완료여부: {todo.isDone.toString()}</p>
//               <button
//                 onClick={() => {
//                   const completedTodos = todos.map((item) => {
//                     //상태를 바꿈
//                     if (item.id === todo.id) {
//                       return {
//                         ...item,
//                         isDone: !item.isDone,
//                       };
//                     } else {
//                       return item;
//                     }
//                   });
//                   //
//                   setTodos(completedTodos);
//                 }}
//               >
//                 완료
//               </button>
//               <button
//                 onClick={() => {
//                   //
//                   const deletedTodos = todos.filter(
//                     (item) => item.id !== todo.id
//                   );
//                   //
//                   setTodos(deletedTodos);
//                 }}
//               >
//                 삭제
//               </button>
//             </div>
//           );
//         })}
//     </>
//   );
// };
