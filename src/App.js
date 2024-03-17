import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "./redux/action";
import { useEffect } from "react";
import axios from "axios";
import { addNewProduct, getProductAction } from "./redux/products/action";

function App() {
  const data = useSelector((state) => state);
  const { ticket, rotate, profile, productListing } = data;
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const result = await axios.get("https://dummyjson.com/products");
    dispatch(getProductAction(result.data.products));
    console.log(result);
  }
  const addNew = () => {
    dispatch(addNewProduct());
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img
            src={logo}
            className={"App-logo" + (rotate.rotating ? "" : "App-logo-paused")}
            alt="logo"
          />
          <h3>{profile.name}</h3>
          <h2>{ticket.count}</h2>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={addNew}>Add New IPhone</button>
          {productListing.products.length > 0 &&
            productListing.products.map((eachObject) => (
              <h3>{eachObject.title} </h3>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
