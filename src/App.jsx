import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour (id) {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
  }
  if(tours.length === 0) {
    return (
      <div className="refresh">
        <h1>No tours left</h1>
        <button className="button-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
