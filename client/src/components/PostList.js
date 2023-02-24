import Post from "./Post";
import { data } from "../utils/data";

export default function PostsList() {
  return (
    <div className="posts-list">
      {data.map((post) => (
        <Post title={post.title} content={post.content} date={post.date} />
      ))}
    </div>
  );
}
