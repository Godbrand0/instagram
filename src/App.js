import "./App.css";
import "./components/storyboard.css";

import FollowSection from "./components/FollowSection";
import NavBar from "./components/NavBar";
import Story from "./components/Story";

import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <div className="storyboard-contain">
          <Story />
          <Posts />
        </div>

        <FollowSection />
      </div>
    </div>
  );
}

export default App;
