import { MdDeleteForever } from "react-icons/md";

export default function Post({ id, title, content, date, handleDeletePost }) {
  return (
    <div className="post">
      <span>{title}</span>
      <span>{content}</span>
      <div className="post-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeletePost(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}
