import "./App.css";
import React from "react";

import { useSelector } from "react-redux";
import Router from "./shared/Router";

function App() {
  //콘솔값 비교
  const todos = useSelector(function (state) {
    return state.todos;
  });
  console.log("state.todos의 콘솔값은 배열", todos);

  console.log(
    "state의 콘솔값은 객체 (왜??????????)", //❓❓❓
    useSelector((state) => state)
  );

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
