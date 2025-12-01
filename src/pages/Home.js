import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontSize: "20px" }}>
      <h1>Welcome to our Blog Web Application</h1>

      <Link to="/blogs" style={{ fontSize: "30px", color: "blue" }}>
        Go To Blogs Page...
      </Link>

      <br /><br />

      <Link to="/users" style={{ fontSize: "30px", color: "blue" }}>
        Go To Users Page...
      </Link>
    </div>
  );
}
