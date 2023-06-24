import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  // const params = useParams();
  // console.log("useParams를 쓰면, todo.id값을 객체로 받아오게 됩니다", params);

  //
  const { id } = useParams();
  console.log("넘겨받은 id", id);

  //이전 화면으로
  const navigate = useNavigate();

  //🦑todos.filter의 반환된 배열 : 요소가 1개짜리인 [0] 배열임. 따라서 명시해줘야 함
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id)[0]; //🦑❓❓❓ [0]을 안해주면 화면에 id 출력이 안됨

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
