import "./App.css";
import LineChart from "./components/LineChart";
import PublicNavBar from "./components/PublicNavBar";

function App() {
  return (
    <>
      <PublicNavBar />
      <div className="container">
        <LineChart />
      </div>
    </>
  );
}

export default App;
