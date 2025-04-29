import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Click Me!</button>
    </>
  );
}

export default App;
