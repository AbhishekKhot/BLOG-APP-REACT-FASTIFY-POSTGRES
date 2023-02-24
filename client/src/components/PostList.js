import Post from "./Post";
// import { data } from "../utils/data";

export default function PostsList({ blogPosts, handleDeletePost }) {
  return (
    <div className="posts-list">
      {blogPosts.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
          handleDeletePost={handleDeletePost}
        />
      ))}
    </div>
  );
}
