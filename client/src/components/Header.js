import { Navigate, useNavigate } from "react-router-dom";

export default function Header({ handleToggleClick }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/PostsList/NewPost");
  }
  return (
    <>
      <nav className="navbar">
        <span className="title">Blog App</span>
        <ul className="headerbuttons">
          <button className="btn-add-post" onClick={handleClick}>
            Add Post
          </button>
          <button
            className="save"
            onClick={()=>handleToggleClick((previousMode) => !previousMode)}
          >
            Dark Mode
          </button>
        </ul>
      </nav>
    </>
  );
}
