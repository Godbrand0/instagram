import "./App.css";
import Feed from "./components/Feed";
import FollowSection from "./components/FollowSection";
import NavBar from "./components/NavBar";
import StoryBoard from "./components/StoryBoard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <div>
          <StoryBoard />
          <Feed />
        </div>

        <FollowSection />
      </div>
    </div>
  );
}

export default App;
