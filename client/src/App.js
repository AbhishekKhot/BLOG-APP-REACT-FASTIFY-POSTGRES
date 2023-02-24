import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import PostsList from "./components/PostList";
import NewPost from "./components/NewPost";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="App">
        <Routes>
          <Route path="/PostsList/NewPost" element={<NewPost />} />
        </Routes>
        <Header handleToggleClick={setDarkMode} />
        <Search />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
