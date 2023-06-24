import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Details from "pages/Details";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        {/* 🦑"/:id"로, 동적인 id값을 전달 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// React Router의 Route 컴포넌트는 경로에 해당하는 컴포넌트를 매핑할 때 사용됩니다. 경로 매개변수를 사용하여 동적인 경로를 정의할 수도 있습니다. 여기서는 /:id와 같은 형태의 경로를 사용하여 동적인 id 값을 전달하고 있습니다.

// 🦑path="/" element={<Details />}는 경로가 정확히 /인 경우에만 Details 컴포넌트를 렌더링하는 것을 의미합니다. 즉, 홈 페이지에 해당하는 경로를 설정한 것입니다.

// 그러나 ListsTobeSorted 컴포넌트에서 Link 컴포넌트를 사용하여 동적인 경로를 생성할 때 to={/${todo.id}}를 사용하고 있습니다. 여기서 /${todo.id}는 todo 객체의 id 값을 포함한 경로를 생성합니다. 예를 들어, todo.id가 9d33d690-48ff-45e3-88ba-e8b3d872433b인 경우, 생성되는 경로는 /9d33d690-48ff-45e3-88ba-e8b3d872433b가 됩니다.

// 이로 인해 /:id 경로에 해당하는 Details 컴포넌트가 렌더링되는 것입니다. :id는 경로 매개변수로 간주되고, 해당 위치에 동적으로 전달되는 값이 매칭되어 Details 컴포넌트에 전달됩니다. 따라서 /9d33d690-48ff-45e3-88ba-e8b3d872433b 경로로 접근하면 Details 컴포넌트가 렌더링되며, 해당 경로의 id 값을 useParams를 통해 받아올 수 있게 됩니다.

// 이렇게 경로를 동적으로 설정하면 매개변수를 활용하여 동적인 라우팅을 구현할 수 있습니다.

//❓❓❓❓❓❓❓❓❓

// (1) ListsTobeSorted 컴포넌트에서 Link 컴포넌트를 사용하여 경로를 생성할 때, to={/${todo.id}}를 사용합니다. 여기서 /${todo.id}는 todo 객체의 id 값을 포함한 경로를 생성하는 것입니다. 예를 들어, todo.id가 9d33d690-48ff-45e3-88ba-e8b3d872433b인 경우, 생성되는 경로는 /9d33d690-48ff-45e3-88ba-e8b3d872433b가 됩니다.

// 이렇게 생성된 경로는 사용자가 "상세보기" 링크를 클릭할 때 사용됩니다. 따라서, 사용자가 특정 할 일의 상세 정보를 보려고 할 때, 해당 할 일의 id 값을 포함한 동적 경로로 이동하게 됩니다.

// 이제 (2)번에 대해 설명하겠습니다.

// (2) <Route path="/:id" element={<Details />} />는 Details 컴포넌트를 /:id 경로에 매핑하는 것을 의미합니다. /:id는 경로 매개변수를 포함하는 동적 경로를 나타냅니다. 경로 매개변수는 콜론(:)으로 시작하고, 매개변수의 이름은 id로 지정되어 있습니다.

// 예를 들어, /9d33d690-48ff-45e3-88ba-e8b3d872433b와 같은 경로에 접근하면 :id에 해당하는 부분인 9d33d690-48ff-45e3-88ba-e8b3d872433b가 매개변수로 인식됩니다. 이 매개변수 값은 Details 컴포넌트로 전달되어 useParams 훅을 통해 해당 값을 받아올 수 있습니다.

// 따라서, 사용자가 ListsTobeSorted 컴포넌트에서 생성한 동적 경로인 /9d33d690-48ff-45e3-88ba-e8b3d872433b를 클릭하면, React Router는 /:id 경로에 매칭되는 Details 컴포넌트를 렌더링하고, useParams를 통해 9d33d690-48ff-45e3-88ba-e8b3d872433b 값을 받아올 수 있습니다.

// 이렇게 매칭이 이루어져 사용자는 동적인 경로를 통해 특정 할 일의 상세 정보를 볼 수 있게 됩니다.
