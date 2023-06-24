import "./App.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form } from "components/Form";
import { ListsToBeSorted } from "components/ListsToBeSorted";
import { useSelector } from "react-redux";
import Router from "./shared/Router";

// function App() {
//   return (
//     <div>
//       <Form />
//       <ListsToBeSorted />
//       {/* <Router /> */}
//     </div>
//   );

//   //기존
//   // // 1.useState 설정부분

//   // //
//   // const [todos, setTodos] = useState([
//   //   {
//   //     id: uuid(),
//   //     title: "YET",
//   //     content: "not yet",
//   //     isDone: false,
//   //   },
//   //   {
//   //     id: uuid(),
//   //     title: "DONE",
//   //     content: "already done",
//   //     isDone: true,
//   //   },
//   // ]);

//   // //

//   // // 3.xml return부분
//   // return (
//   //   <div className="App">
//   //     <header
//   //       style={{
//   //         backgroundColor: "lightgray",
//   //         padding: "10px",
//   //       }}
//   //     >
//   //       헤더입니다
//   //     </header>
//   //     <main
//   //       style={{
//   //         padding: "10px",
//   //       }}
//   //     >
//   //       {/* 컴포넌트1 : 폼태그 */}
//   //       <Form todos={todos} setTodos={setTodos} />
//   //       {/* 컴포넌트2  */}
//   //       <div>
//   //         <h1>리스트 보여지는 영역</h1>
//   //         <ListsToBeSorted
//   //           todos={todos}
//   //           setTodos={setTodos}
//   //           listIsDone={false}
//   //         />
//   //         <ListsToBeSorted
//   //           todos={todos}
//   //           setTodos={setTodos}
//   //           listIsDone={true}
//   //         />
//   //       </div>
//   //     </main>
//   //   </div>
//   // );
// }

// export default App;

function App() {
  const todos = useSelector(function (state) {
    return state.todos;
  });

  console.log("콘솔0", todos);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
