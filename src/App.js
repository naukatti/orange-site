import "./Reset.css";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import StoryList from "./StoryList";
import User from "./User";

const App = () => {
  return (
    <main>
      <Link to="/">
        <h1>Orange site</h1>
      </Link>
      <Routes>
        <Route path="/" element={<StoryList />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </main>
  );
};

export default App;
