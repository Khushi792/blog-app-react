import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router basename="/my-react-blog">
      <Navbar />
      <Routes>
        {/* Default Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
