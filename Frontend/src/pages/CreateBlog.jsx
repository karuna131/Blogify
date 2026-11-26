import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  function publishBlog(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    if (title === "" || content === "") {
      alert("Please fill all fields");
      return;
    }

    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

    blogs.push({
      id: Date.now(),
      title: title,
      content: content,
      author: user.name,
      email: user.email
    });

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog Published Successfully!");

    navigate("/dashboard");
  }

  return (
    <div className="auth-box">
      <h2>Create New Blog ✍️</h2>

      <form onSubmit={publishBlog}>

        <input
          type="text"
          placeholder="Enter Blog Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write Your Blog..."
          rows="6"
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Publish Blog</button>

      </form>
    </div>
  );
}

export default CreateBlog;



