import "./App.css";
import './components/storyboard.css';
import Feed from "./components/Feed";
import FollowSection from "./components/FollowSection";
import NavBar from "./components/NavBar";
import Story from "./components/StoryNew";

import Profile from "./assets/Profile-Pic-S.png";


function App() {
 
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <div className="storyboard-contain">
          <Story/>
          <Feed />
        </div>

        <FollowSection />
      </div>
    </div>
  );
}

export default App;
