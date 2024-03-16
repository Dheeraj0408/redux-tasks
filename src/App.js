import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction,resetAction } from "./redux/action";

function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement=()=>{
    dispatch(decrementAction());
  }

  const handleReset=()=>{
    dispatch(resetAction());
  }
  console.log(count);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {count}
        </p>
        <button onClick={handleIncrement}>Increment Counter</button>
        <br/>
        <button onClick={handleDecrement}>Decrement Counter</button>
        <br/>
        <button onClick={handleReset}>Reset Counter</button>
      </header>
    </div>
  );
}

export default App;
