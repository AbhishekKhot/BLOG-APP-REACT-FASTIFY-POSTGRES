import { data } from "../utils/data";
import { useState } from "react";

export default function NewPost({ handleAddPost }) {
  var charLimit = 1000;
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  function handleTitleChange(event) {
    setPostTitle(event.target.value);
  }
  function handleContentChange(event) {
    setPostContent(event.target.value);
  }

  function handleSavePost() {
    const newPost = {
      title: postTitle,
      content: postContent,
      date: new Date().toLocaleDateString(),
    };
    handleAddPost(newPost);
    setPostTitle("");
    setPostContent("");
    console.log(newPost);
  }

  return (
    <div className="new-post">
      <div className="input-params-label">Title</div>
      <div className="form-control">
        <input type="text" value={postTitle} onChange={handleTitleChange} />
      </div>
      <div className="input-params-label">Content</div>
      <div className="form-control">
        <textarea
          type="text"
          value={postContent}
          onChange={handleContentChange}
        />
      </div>
      <div className="post-footer">
        <small>{charLimit - postContent.length} Remaining</small>
      </div>
      <div className="input-params-label">
        <button className="btn-btn-block" onClick={handleSavePost}>
          Add Post
        </button>{" "}
      </div>
    </div>
  );
}
