import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import PostsList from "./components/PostList";
import NewPost from "./components/NewPost";
import { useState, useEffect } from "react";
import BlogDataService from "./services/BlogDataService";

import { Routes, Route } from "react-router-dom";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    BlogDataService.getAll()
      .then((blogs) => {
        setBlogPosts(blogs.data.blog);
      })
      .catch((error) => {
        console.error("Something went wrong" + error.message);
      });
  }, []);

  const deleteBlogPost = (id) => {
    const blog = BlogDataService.getById(id);
    if (!blog) console.log("Blog not found");
    BlogDataService.delete(id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Something went wrong" + error.message);
      });
  };

  const addBlogPost = (data) => {
    BlogDataService.create(data)
      .then((response) => {
        console.log("Successfully added new blog post" + response);
      })
      .catch((error) => {
        console.log("Something went wrong" + error.message);
      });
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="App">
        <Routes>
          <Route
            path="/PostsList/NewPost"
            element={<NewPost handleAddPost={addBlogPost} />}
          />
        </Routes>
        <Header handleToggleClick={setDarkMode} />
        <Search />
        <PostsList blogPosts={blogPosts} handleDeletePost={deleteBlogPost} />
      </div>
    </div>
  );
}

export default App;
