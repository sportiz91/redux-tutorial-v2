import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  console.log("re-render"); //The because we are subscribing to changes in counter, and isLogged store state,
  //Whenever that piece of state changes, the component will re-render.

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  console.log(`Counter: ${counter}`); //Should output 0 when loading page.
  console.log(`isLogged: ${isLogged}`); //Should output false when loading page.
  console.log(`dispatch: ${dispatch}`); //Should output the definition of the dispatch function of the store.
  //With dispatch = useDispatch() you are creating an instance of the dispatch function of the store.

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment(2)); //dispatch increment action with an argument of 2. That calls later the reducer function to alter the state.
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>
      {isLogged ? <h3>Sensible information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
