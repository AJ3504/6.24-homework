import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addTodo } from "redux/modules/todos";

export const Form = () => {
  //기존
  //🦑입력 필드의 초기값을 빈 문자열로 설정. 사용자가 아무런 입력을 하지 않고 폼을 제출하는 경우를 대비하기 위해서. 초기값을 설정하지 않고 사용자가 아무런 입력 없이 폼을 제출하면, undefined가 찍히므로 사전에 방지.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //
  const todos = useSelector((state) => state.todos);

  //
  const dispatch = useDispatch();

  //
  const onSubmitHandler = (e) => {
    //
    if (!title || !content) {
      alert("필수값이 누락되었습니다. 확인해주세요!");
      return false; //밑의 로직으로 내려가지 않기 위해
    }

    //
    e.preventDefault();

    //이런 형태의 action객체를
    // dispatch(
    //   {
    //     type: "ADD_TODO",
    //     payload: {
    //       id: shortid.generate(),
    //       title,
    //       content,
    //       isDone: false,
    //     }
    //   }
    // )
    dispatch(
      addTodo({
        id: shortid.generate(),
        title,
        content,
        isDone: false,
      })
    );

    //🦑버튼 클릭후(onSubmitHandler() 작동후) input필드를 초기화하기 위해
    //🦑setTitle과 setContent 함수가 onSubmitHandler 함수 내에서 접근 가능한 이유는 함수 컴포넌트의 스코프 규칙 때문입니다. 함수 컴포넌트 내에서 선언된 변수나 함수는 해당 컴포넌트 내에서 자유롭게 접근할 수 있습니다.
    setTitle("");
    setContent("");

    //🦑(원래는 얘였음)
    // (event) => {
    //   event.preventDefault();
    //   const newTodo = {
    //     id: shortid.generate(),
    //     title: "",
    //     content: "",
    //     isDone: false,
    //   };
    //   //다시 배열로 묶어줘야 -> 뒤에서 filter를 쓸 수 있음
    //   setTodos([...todos, newTodo]);
    // }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};
