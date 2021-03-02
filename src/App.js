import "./App.css";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import Forecast from "./Components/Forecast";
function App() {
  return (
    <div className="App">
      <h1>weather app</h1>
      <Search></Search>
      <Forecast></Forecast>
    </div>
  );
}

export default App;
