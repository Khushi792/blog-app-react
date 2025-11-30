import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
          .then(res => res.json())
          .then(u => setUser(u));
      });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [id]);

  return (
    <div style={{ padding: "10px", fontSize: "20px" }}>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>

      <h3>Author: <Link to={`/users/${user.id}`}>{user.name}</Link></h3>

      <h2>Comments</h2>
      {comments.map(c => (
        <div key={c.id} style={{ margin: "10px 0", borderBottom: "1px solid gray" }}>
          <p><strong>{c.email}</strong></p>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
