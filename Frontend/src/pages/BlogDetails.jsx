
import { useParams, Link } from "react-router-dom";

const sampleBlogs = [
  {
    id: 1,
    title: "Learning Web Development",
    description: "Learn HTML, CSS and JavaScript step by step.",
    author: "Rahul Sharma",
    date: "November 24, 2026"
  },
  {
    id: 2,
    title: "Importance of Education",
    description: "Education helps us learn new skills and improve our knowledge.",
    author: "Ananya Verma",
    date: "November 22, 2026"
  },
  {
    id: 3,
    title: "My Coding Journey",
    description: "My experience of starting a journey in programming.",
    author: "Priya Singh",
    date: "November 20, 2026"
  }
];

function BlogDetails() {
  const { id } = useParams();

  const savedBlogs = JSON.parse(
    localStorage.getItem("blogs") || "[]"
  );

  const allBlogs = [...sampleBlogs, ...savedBlogs];

  const blog = allBlogs.find(
    (item) => String(item.id) === id
  );

  if (!blog) {
    return (
      <div className="blog-details">
        <h2>Blog Not Found!</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>

      <p className="blog-author">
        Written by {blog.author}
      </p>

      <p className="blog-content">
        {blog.content || blog.description}
      </p>

      <Link to="/" className="back-home">
        ← Back to Home
      </Link>
    </div>
  );
}

export default BlogDetails;
