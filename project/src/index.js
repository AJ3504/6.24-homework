import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; //❶

import store from "./redux/config/configStore"; //❷
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //❷App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다. => ❸app.jsx에서 이제 useSelector로 store의 값 (state)를 꺼내올 수 있게 됨
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
