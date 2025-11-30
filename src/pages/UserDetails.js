import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
   const [comments, setComments] = useState([]);
   

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(res => res.json())
      .then(data => setBlogs(data));
 fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [id]);

  return (
    <div style={{ padding: "20px",fontSize:"20px" }}>
      <h1>Name: {user.name}</h1>
      <h2>Email: {user.email}</h2>
      <h2>Phone: {user.phone}</h2>

      <h2>Blogs by {user.name}</h2>

      {blogs.map(blog => (
        <div key={blog.id} style={{ border: "1px solid grey", padding: "10px", margin: "15px 0" }}>
          <h2 style={{textDecoration:"underline"}}>Posts by {user.name}</h2>
          <h3>{blog.title}</h3>
          <p>{blog.body.substring(0, 100)}...</p>
           <h2 style={{textDecoration:"underline"}}>Comments by {user.name} </h2>
      {comments.map(c => (
        <div key={c.id} style={{ margin: "10px 0", borderBottom: "1px solid gray" }}>
          <p><strong>{c.email}</strong></p>
          <p>{c.body}</p>
        </div>
      ))} 
        </div>
      ))}

    </div>
  );
}

export default UserDetails;
