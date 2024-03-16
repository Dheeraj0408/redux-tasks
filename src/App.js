import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "./redux/action";
import { rotateAction } from "./actions/startAction";

function App() {
  const data = useSelector((state) => state);
  console.log(data);
  const { counter, rotate } = data;
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handleReset = () => {
    dispatch(resetAction());
  };
  const handleRotating = () => {
    console.log("Rotate");
    dispatch(rotateAction(!rotate.rotating));
  };
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleRotating}>
          <img
            src={logo}
            className={"App-logo" + (rotate.rotating ? "" : "App-logo-paused")}
            alt="logo"
          />
         <p>Adi Matter</p>
        </div>

        <p>{counter.count}</p>
        <button onClick={handleIncrement}>Increment Counter</button>
        <br />
        <button onClick={handleDecrement}>Decrement Counter</button>
        <br />
        <button onClick={handleReset}>Reset Counter</button>
      </header>
    </div>
  );
}

export default App;
