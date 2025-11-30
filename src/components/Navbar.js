import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/blogs?search=${text}`);
  }
  return (
    <nav className="nav">
      <h1 className="logo">Blog App</h1>

      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
        <li><Link to="/users" className="nav-link">Users</Link></li>
      </ul>

      {/* Search bar*/}
      <form onSubmit={handleSearch} className="search-form">
        <input
          title=" Search using author name or blog name"
          type="text"
          placeholder="Search Blogs"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
