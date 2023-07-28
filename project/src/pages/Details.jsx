import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { abcdef } = useParams();
  console.log("넘겨받은 id", abcdef);

  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);

  const todo = todos.find((todo) => todo.id === abcdef);
  //
  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.content}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
    </div>
  );
};

export default Details;
