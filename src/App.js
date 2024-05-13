import logo from "./logo.svg";
import "./App.css";
import PostCard from "./Components/PostCard";
import posts from "./data";
import Postlist from "./Components/Postlist";

function App() {
  return (
    <div className="App">
      <h1>My cool instagram clone</h1>

      <Postlist />
    </div>
  );
}

export default App;
