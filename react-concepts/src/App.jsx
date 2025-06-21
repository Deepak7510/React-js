import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IndexComponent from "./components/context-api/IndexComponent";
import Form from "./components/formHaldling/Form";
import Login from "./components/commonForm/Login";
import SIgnup from "./components/commonForm/SIgnup";
import UseFetchIndexPage from "./components/Custom Hook useFetch/UseFetchIndexPage";
import UseSessionIndexPage from "./components/Custom Hook useSession/UseSessionIndexPage";
import UseCounterIndexPage from "./components/Custom hook useCounter/UseCounterIndexPage";
import UseIdIndexPage from "./components/Custom hook useId/UseIdIndexPage";
import UseReducerIndexPage from "./components/reducer/UseReducerIndexPage";
import UseWindowResizeIndexPage from "./components/useWindowResize custom hook/useWindowResizeIndexPage";
import { ClassBaseComponent } from "./components/ClassBaseComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Context-api  */}
      {/* <IndexComponent /> */}

      {/* formHandling  */}
      {/* <Form/> */}

      {/* common form  */}
      {/* <Login /> */}
      {/* <SIgnup /> */}

      {/* Custom Hook  */}
      {/* <UseFetchIndexPage /> */}

      {/* <UseSessionIndexPage/> */}

      {/* <UseCounterIndexPage/> */}

      {/* <UseIdIndexPage/> */}

      {/* <UseWindowResizeIndexPage /> */}

      {/* useReducer  */}

      <ClassBaseComponent />
      {/* <UseReducerIndexPage/> */}
    </>
  );
}

export default App;
