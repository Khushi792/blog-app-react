import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchText = query.get("search") || "";

  useEffect(() => {
    // Fetch blogs
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setBlogs(data));

    // Fetch users (authors)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const blogsWithAuthors = blogs.map(blog => {
    const author = users.find(u => u.id === blog.userId);
    return {
      ...blog,
      authorName: author ? author.name : "Unknown Author"
    };
  });

  const filteredBlogs = blogsWithAuthors.filter(blog =>
  blog.authorName.toLowerCase().includes(searchText.toLowerCase()) ||
  blog.title.toLowerCase().includes(searchText.toLowerCase())
);


  return (
    <div style={{display:"block",padding:"25px"}}>
      <h1> List Of All Blogs</h1>

      {filteredBlogs.length > 0 ? (
        filteredBlogs.map(blog => (
          <div 
            key={blog.id}
            style={{
              border: "0.5px solid grey",
              borderRadius: "3px", 
              padding:"1px"
            }}
          >
            <h2 style={{ fontSize: "30px", margin:"10px"}} >{blog.title}  <Link
              to={`/blogs/${blog.id}`}
              style={{ display: "flex", justifyContent: "flex-end" ,fontSize:"25px"}}
            >
              view..
            </Link></h2>
            <p style={{ fontSize: "25px",padding:"0px" }}>{blog.body.substring(0, 100)}...</p>
             <p style={{ display: "flex", justifyContent: "flex-end",fontSize:"25px" }}><b>By : </b> {blog.authorName}</p>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

export default Blogs;
