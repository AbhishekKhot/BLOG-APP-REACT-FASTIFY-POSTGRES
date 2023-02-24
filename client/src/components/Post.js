import { MdDeleteForever } from "react-icons/md";

export default function Post({ title, content, date }) {
  return (
    <div className="post">
      <span>{title}</span>
      <span>{content}</span>
      <div className="post-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}
